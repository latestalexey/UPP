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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЕдиницыИзмерения:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1dec52fd-9ee2-4d32-bf13-245265ae5381");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012033.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаПоКлассификатору {get;set;}//Единица по классификатору
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.3)*/ Вес {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.3)*/ Объем {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.3)*/ Коэффициент {get;set;}
		public decimal/*(10)*/ ПорогОкругления {get;set;}//Порог округления
		public bool ПредупреждатьОНецелыхМестах {get;set;}//При округлении предупреждать о нецелых местах
		
		public ЕдиницыИзмерения()
		{
		}
		
		public ЕдиницыИзмерения(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ЕдиницыИзмерения(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1134RRef [ЕдиницаПоКлассификатору]
					,_Fld1135 [Вес]
					,_Fld1136 [Объем]
					,_Fld1137 [Коэффициент]
					,_Fld21237 [ПорогОкругления]
					,_Fld21238 [ПредупреждатьОНецелыхМестах]
					From _Reference55(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
								ЕдиницаПоКлассификатору = new V82.СправочникиСсылка.КлассификаторЕдиницИзмерения((byte[])Читалка.GetValue(6),Глубина+1);
								Вес = Читалка.GetDecimal(7);
								Объем = Читалка.GetDecimal(8);
								Коэффициент = Читалка.GetDecimal(9);
								ПорогОкругления = Читалка.GetDecimal(10);
								ПредупреждатьОНецелыхМестах = ((byte[])Читалка.GetValue(11))[0]==1;
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
		
		public V82.СправочникиОбъект.ЕдиницыИзмерения  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЕдиницыИзмерения();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ЕдиницаПоКлассификатору = ЕдиницаПоКлассификатору;
			Объект.Вес = Вес;
			Объект.Объем = Объем;
			Объект.Коэффициент = Коэффициент;
			Объект.ПорогОкругления = ПорогОкругления;
			Объект.ПредупреждатьОНецелыхМестах = ПредупреждатьОНецелыхМестах;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ЕдиницыИзмерения ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ЕдиницыИзмерения)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ЕдиницыИзмерения(УникальныйИдентификатор);
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