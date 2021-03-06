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
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///Документ предназначен для отражения заявки на сертификацию, как для внешней, так и для внутренней сертификации
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаявкаНаСертификациюНоменклатуры:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("27faffbe-06e6-42a0-8654-86405ccdda07");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012026.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public object ДокументОприходования {get;set;}//Документ оприходования
		public V82.СправочникиСсылка.Номенклатура Номенклатура {get;set;}
		public V82.СправочникиСсылка.СерииНоменклатуры СерияНоменклатуры {get;set;}//Серия номенклатуры
		public V82.СправочникиСсылка.НормативныеДокументыСертификацииНоменклатуры НормативныйДокумент {get;set;}//Нормативный документ
		///<summary>
		///Организация, проводящая отбор проб (для внешней сертификации)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты ОрганПоСертификации {get;set;}//Орган по сертификации
		public V82.Перечисления/*Ссылка*/.ВидыОперацийЗаявкаНаСертификациюНоменклатуры ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Подразделение, которому направляется заявка на внутреннюю сертификацию
		///</summary>
		public V82.СправочникиСсылка.Подразделения СертифицирующееПодразделение {get;set;}//Сертифицирующее подразделение
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		
		public ЗаявкаНаСертификациюНоменклатуры()
		{
		}
		
		public ЗаявкаНаСертификациюНоменклатуры(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld4783RRef [Подразделение]
					,_Fld4784RRef [Организация]
					,_Fld4785RRef [Ответственный]
					,_Fld4786_TYPE [ДокументОприходования_Тип],_Fld4786_RRRef [ДокументОприходования],_Fld4786_RTRef [ДокументОприходования_Вид]
					,_Fld4787RRef [Номенклатура]
					,_Fld4788RRef [СерияНоменклатуры]
					,_Fld4789RRef [НормативныйДокумент]
					,_Fld4790RRef [ОрганПоСертификации]
					,_Fld4791RRef [ВидОперации]
					,_Fld4792 [Комментарий]
					,_Fld4793RRef [СертифицирующееПодразделение]
					,_Fld4794RRef [Склад]
					From _Document272(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
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
							Номер = Читалка.GetString(3);
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийЗаявкаНаСертификациюНоменклатуры.ПустаяСсылка.Получить((byte[])Читалка.GetValue(14));
							Комментарий = Читалка.GetString(15);
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
		
		public V82.ДокументыОбъект.ЗаявкаНаСертификациюНоменклатуры  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ЗаявкаНаСертификациюНоменклатуры();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Подразделение = Подразделение;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ДокументОприходования = ДокументОприходования;
			Объект.Номенклатура = Номенклатура;
			Объект.СерияНоменклатуры = СерияНоменклатуры;
			Объект.НормативныйДокумент = НормативныйДокумент;
			Объект.ОрганПоСертификации = ОрганПоСертификации;
			Объект.ВидОперации = ВидОперации;
			Объект.Комментарий = Комментарий;
			Объект.СертифицирующееПодразделение = СертифицирующееПодразделение;
			Объект.Склад = Склад;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ЗаявкаНаСертификациюНоменклатуры ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ЗаявкаНаСертификациюНоменклатуры)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ЗаявкаНаСертификациюНоменклатуры(УникальныйИдентификатор);
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