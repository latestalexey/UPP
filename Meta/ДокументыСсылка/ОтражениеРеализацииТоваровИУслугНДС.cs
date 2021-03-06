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
	[ProtoContract]
	[DataContract]
	public partial class ОтражениеРеализацииТоваровИУслугНДС:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("09f7575b-5c0e-4506-946a-8b6a85397031");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012003.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Не используется
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		public bool ИспользоватьДокументРасчетовКакСчетФактуру {get;set;}//Использовать документ расчетов как счет-фактуру
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Если данный флаг взведен, документ производит непосредственную запись в книгу продаж. Остальные регистры учета НДС не корректируются.
		///</summary>
		public bool ПрямаяЗаписьВКнигу {get;set;}//Использовать в качестве дополнительной записи книги продаж
		public object РасчетныйДокумент {get;set;}//Документ расчетов
		///<summary>
		///(Общ)
		///</summary>
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		public bool ФормироватьПроводки {get;set;}//Формировать проводки
		///<summary>
		///(Общ) 
		///</summary>
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		///<summary>
		///(Общ) 
		///</summary>
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		public bool ФормироватьСторнирующиеЗаписиДопЛистовВручную {get;set;}//Формировать сторнирующие записи доп. листов вручную
		public bool ЗаписьДополнительногоЛиста {get;set;}//Запись дополнительного листа
		public DateTime КорректируемыйПериод {get;set;}//Корректируемый период
		
		public ОтражениеРеализацииТоваровИУслугНДС()
		{
		}
		
		public ОтражениеРеализацииТоваровИУслугНДС(byte[] УникальныйИдентификатор)
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
					,_Fld7145RRef [ВалютаДокумента]
					,_Fld7150RRef [Грузоотправитель]
					,_Fld7151RRef [Грузополучатель]
					,_Fld7143RRef [ДоговорКонтрагента]
					,_Fld21782 [ИспользоватьДокументРасчетовКакСчетФактуру]
					,_Fld7147 [Комментарий]
					,_Fld7142RRef [Контрагент]
					,_Fld21778 [КратностьВзаиморасчетов]
					,_Fld21779 [КурсВзаиморасчетов]
					,_Fld7141RRef [Организация]
					,_Fld7148 [ПрямаяЗаписьВКнигу]
					,_Fld7144_TYPE [РасчетныйДокумент_Тип],_Fld7144_RRRef [РасчетныйДокумент],_Fld7144_RTRef [РасчетныйДокумент_Вид]
					,_Fld21780 [СуммаВключаетНДС]
					,_Fld7146 [СуммаДокумента]
					,_Fld21781RRef [ТипЦен]
					,_Fld21777 [ФормироватьПроводки]
					,_Fld19501 [ДатаВходящегоДокумента]
					,_Fld19502 [НомерВходящегоДокумента]
					,_Fld21785 [ФормироватьСторнирующиеЗаписиДопЛистовВручную]
					,_Fld21783 [ЗаписьДополнительногоЛиста]
					,_Fld21784 [КорректируемыйПериод]
					From _Document351(NOLOCK)
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
							ИспользоватьДокументРасчетовКакСчетФактуру = ((byte[])Читалка.GetValue(8))[0]==1;
							Комментарий = Читалка.GetString(9);
							КратностьВзаиморасчетов = Читалка.GetDecimal(11);
							КурсВзаиморасчетов = Читалка.GetDecimal(12);
							ПрямаяЗаписьВКнигу = ((byte[])Читалка.GetValue(14))[0]==1;
							СуммаВключаетНДС = ((byte[])Читалка.GetValue(18))[0]==1;
							СуммаДокумента = Читалка.GetDecimal(19);
							ФормироватьПроводки = ((byte[])Читалка.GetValue(21))[0]==1;
							ДатаВходящегоДокумента = Читалка.GetDateTime(22);
							НомерВходящегоДокумента = Читалка.GetString(23);
							ФормироватьСторнирующиеЗаписиДопЛистовВручную = ((byte[])Читалка.GetValue(24))[0]==1;
							ЗаписьДополнительногоЛиста = ((byte[])Читалка.GetValue(25))[0]==1;
							КорректируемыйПериод = Читалка.GetDateTime(26);
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
		
		public V82.ДокументыОбъект.ОтражениеРеализацииТоваровИУслугНДС  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ОтражениеРеализацииТоваровИУслугНДС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.Грузоотправитель = Грузоотправитель;
			Объект.Грузополучатель = Грузополучатель;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.ИспользоватьДокументРасчетовКакСчетФактуру = ИспользоватьДокументРасчетовКакСчетФактуру;
			Объект.Комментарий = Комментарий;
			Объект.Контрагент = Контрагент;
			Объект.КратностьВзаиморасчетов = КратностьВзаиморасчетов;
			Объект.КурсВзаиморасчетов = КурсВзаиморасчетов;
			Объект.Организация = Организация;
			Объект.ПрямаяЗаписьВКнигу = ПрямаяЗаписьВКнигу;
			Объект.РасчетныйДокумент = РасчетныйДокумент;
			Объект.СуммаВключаетНДС = СуммаВключаетНДС;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.ТипЦен = ТипЦен;
			Объект.ФормироватьПроводки = ФормироватьПроводки;
			Объект.ДатаВходящегоДокумента = ДатаВходящегоДокумента;
			Объект.НомерВходящегоДокумента = НомерВходящегоДокумента;
			Объект.ФормироватьСторнирующиеЗаписиДопЛистовВручную = ФормироватьСторнирующиеЗаписиДопЛистовВручную;
			Объект.ЗаписьДополнительногоЛиста = ЗаписьДополнительногоЛиста;
			Объект.КорректируемыйПериод = КорректируемыйПериод;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ОтражениеРеализацииТоваровИУслугНДС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ОтражениеРеализацииТоваровИУслугНДС)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ОтражениеРеализацииТоваровИУслугНДС(УникальныйИдентификатор);
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