﻿
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НормативыОбслуживанияОС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("04151f13-c635-439e-8800-4e49bed66283");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011941.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public V82.СправочникиСсылка.НормативыОбслуживанияОС Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public DateTime ДатаУтверждения {get;set;}//Дата утверждения
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Номенклатура Услуга {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодичностьОбслуживания {get;set;}//Периодичность обслуживания
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(10.2)*/ КоличествоПериодов {get;set;}//Количество периодов
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.ПараметрыВыработкиОС ПараметрВыработки {get;set;}//Параметр выработки
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(15.3)*/ ЗначениеПараметраВыработки {get;set;}//Значение параметра выработки
		///<summary>
		///(Упр)
		///</summary>
		public decimal/*(15.3)*/ Количество {get;set;}
		
		public НормативыОбслуживанияОС()
		{
		}
		
		public НормативыОбслуживанияОС(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public НормативыОбслуживанияОС(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Folder [ЭтоГруппа]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1489 [Комментарий]
					,_Fld1490RRef [Состояние]
					,_Fld1491 [ДатаУтверждения]
					,_Fld1492RRef [Услуга]
					,_Fld1493RRef [ПериодичностьОбслуживания]
					,_Fld1494 [КоличествоПериодов]
					,_Fld1495RRef [ПараметрВыработки]
					,_Fld1496 [ЗначениеПараметраВыработки]
					,_Fld1497 [Количество]
					From _Reference100(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  -- and _Folder = 0x01  ";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Родитель = new V82.СправочникиСсылка.НормативыОбслуживанияОС((byte[])Читалка.GetValue(4),Глубина+1);
							ЭтоГруппа = ((byte[])Читалка.GetValue(5))[0]==0;
							Код = Читалка.GetString(6);
							Наименование = Читалка.GetString(7);
							if(!ЭтоГруппа)
							{
								Комментарий = Читалка.GetString(8);
								Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
								ДатаУтверждения = Читалка.GetDateTime(10);
								Услуга = new V82.СправочникиСсылка.Номенклатура((byte[])Читалка.GetValue(11),Глубина+1);
								ПериодичностьОбслуживания = V82.Перечисления/*Ссылка*/.Периодичность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
								КоличествоПериодов = Читалка.GetDecimal(13);
								ПараметрВыработки = new V82.СправочникиСсылка.ПараметрыВыработкиОС((byte[])Читалка.GetValue(14),Глубина+1);
								ЗначениеПараметраВыработки = Читалка.GetDecimal(15);
								Количество = Читалка.GetDecimal(16);
							}
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.СправочникиОбъект.НормативыОбслуживанияОС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НормативыОбслуживанияОС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Комментарий = Комментарий;
			Объект.Состояние = Состояние;
			Объект.ДатаУтверждения = ДатаУтверждения;
			Объект.Услуга = Услуга;
			Объект.ПериодичностьОбслуживания = ПериодичностьОбслуживания;
			Объект.КоличествоПериодов = КоличествоПериодов;
			Объект.ПараметрВыработки = ПараметрВыработки;
			Объект.ЗначениеПараметраВыработки = ЗначениеПараметраВыработки;
			Объект.Количество = Количество;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.НормативыОбслуживанияОС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.НормативыОбслуживанияОС)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.НормативыОбслуживанияОС(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}