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
	///Контактные лица контрагентов
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КонтактныеЛицаКонтрагентов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("73fad1f0-e174-4c7d-9132-e00ad2212966");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012001.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		public string/*(100)*/ Должность {get;set;}
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.КонтактныеЛица КонтактноеЛицо {get;set;}//Контактное лицо
		public V82.СправочникиСсылка.РолиКонтактныхЛиц РольКонтактногоЛица {get;set;}//Роль контактного лица
		
		public КонтактныеЛицаКонтрагентов()
		{
		}
		
		public КонтактныеЛицаКонтрагентов(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public КонтактныеЛицаКонтрагентов(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld1251 [Должность]
					,_Fld1252 [Комментарий]
					,_Fld1253RRef [КонтактноеЛицо]
					,_Fld1254RRef [РольКонтактногоЛица]
					From _Reference77(NOLOCK)
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
								Должность = Читалка.GetString(6);
								Комментарий = Читалка.GetString(7);
								КонтактноеЛицо = new V82.СправочникиСсылка.КонтактныеЛица((byte[])Читалка.GetValue(8),Глубина+1);
								РольКонтактногоЛица = new V82.СправочникиСсылка.РолиКонтактныхЛиц((byte[])Читалка.GetValue(9),Глубина+1);
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
		
		public V82.СправочникиОбъект.КонтактныеЛицаКонтрагентов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КонтактныеЛицаКонтрагентов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Должность = Должность;
			Объект.Комментарий = Комментарий;
			Объект.КонтактноеЛицо = КонтактноеЛицо;
			Объект.РольКонтактногоЛица = РольКонтактногоЛица;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.КонтактныеЛицаКонтрагентов(УникальныйИдентификатор);
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