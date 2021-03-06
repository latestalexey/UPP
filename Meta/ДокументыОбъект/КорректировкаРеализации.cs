﻿
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КорректировкаРеализации:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыОперацийИсправленияПоступленияРеализации ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.БанковскиеСчета БанковскийСчетОрганизации {get;set;}//Банковский счет организации
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Контрагенты Грузоотправитель {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Контрагенты Грузополучатель {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ИнформационныеКарты ДисконтнаяКарта {get;set;}//Дисконтная карта
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public object Проект {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public object Сделка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(30)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(31)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(32)]
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(33)]
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.УсловияПродаж УсловиеПродаж {get;set;}//Условие продаж
		[DataMember]
		[ProtoMember(36)]
		public object ДокументРеализации {get;set;}//Документ реализации
		[DataMember]
		[ProtoMember(37)]
		public object ИсправляемыйДокументРеализации {get;set;}//Исправляемый документ реализации
		[DataMember]
		[ProtoMember(38)]
		public bool КорректироватьБУиНУ {get;set;}//Корректировать упр. и регл. учет
		[DataMember]
		[ProtoMember(39)]
		public bool ОтчетностьПодписана {get;set;}//Отчетность подписана
		[DataMember]
		[ProtoMember(40)]
		public V82.СправочникиСсылка.ПрочиеДоходыИРасходы СтатьяПрочихДоходовИРасходов {get;set;}//Статья прочих доходов и расходов
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(41)]
		public V82.СправочникиСсылка.ПодразделенияОрганизаций ПодразделениеОрганизации {get;set;}//Подразделение организации
		[DataMember]
		[ProtoMember(42)]
		public string/*(0)*/ АдресДоставки {get;set;}//Адрес доставки
		[DataMember]
		[ProtoMember(43)]
		public string/*(0)*/ ДополнениеКАдресуДоставки {get;set;}//Дополнение к адресу доставки
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document23153(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld24523RRef
						,_Fld24524RRef
						,_Fld24525RRef
						,_Fld24526RRef
						,_Fld24527RRef
						,_Fld24528
						,_Fld24529
						,_Fld24530
						,_Fld24531RRef
						,_Fld24532
						,_Fld24533
						,_Fld24534RRef
						,_Fld24535RRef
						,_Fld24536RRef
						,_Fld24537
						,_Fld24538RRef
						,_Fld24539RRef
						,_Fld24542RRef
						,_Fld24543
						,_Fld24544
						,_Fld24545
						,_Fld24546RRef
						,_Fld24547RRef
						,_Fld24548RRef
						,_Fld24549RRef
						,_Fld24552
						,_Fld24553
						,_Fld24554RRef
						,_Fld24555RRef
						,_Fld24556
						,_Fld24557)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперации
						,@Организация
						,@Контрагент
						,@ДоговорКонтрагента
						,@БанковскийСчетОрганизации
						,@ОтражатьВУправленческомУчете
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ВалютаДокумента
						,@КратностьВзаиморасчетов
						,@КурсВзаиморасчетов
						,@Грузоотправитель
						,@Грузополучатель
						,@ДисконтнаяКарта
						,@Комментарий
						,@Ответственный
						,@Подразделение
						,@Склад
						,@УчитыватьНДС
						,@СуммаВключаетНДС
						,@СуммаДокумента
						,@СчетУчетаРасчетовПоАвансам
						,@СчетУчетаРасчетовСКонтрагентом
						,@ТипЦен
						,@УсловиеПродаж
						,@КорректироватьБУиНУ
						,@ОтчетностьПодписана
						,@СтатьяПрочихДоходовИРасходов
						,@ПодразделениеОрганизации
						,@АдресДоставки
						,@ДополнениеКАдресуДоставки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document23153
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld24523RRef	= @ВидОперации
						,_Fld24524RRef	= @Организация
						,_Fld24525RRef	= @Контрагент
						,_Fld24526RRef	= @ДоговорКонтрагента
						,_Fld24527RRef	= @БанковскийСчетОрганизации
						,_Fld24528	= @ОтражатьВУправленческомУчете
						,_Fld24529	= @ОтражатьВБухгалтерскомУчете
						,_Fld24530	= @ОтражатьВНалоговомУчете
						,_Fld24531RRef	= @ВалютаДокумента
						,_Fld24532	= @КратностьВзаиморасчетов
						,_Fld24533	= @КурсВзаиморасчетов
						,_Fld24534RRef	= @Грузоотправитель
						,_Fld24535RRef	= @Грузополучатель
						,_Fld24536RRef	= @ДисконтнаяКарта
						,_Fld24537	= @Комментарий
						,_Fld24538RRef	= @Ответственный
						,_Fld24539RRef	= @Подразделение
						,_Fld24542RRef	= @Склад
						,_Fld24543	= @УчитыватьНДС
						,_Fld24544	= @СуммаВключаетНДС
						,_Fld24545	= @СуммаДокумента
						,_Fld24546RRef	= @СчетУчетаРасчетовПоАвансам
						,_Fld24547RRef	= @СчетУчетаРасчетовСКонтрагентом
						,_Fld24548RRef	= @ТипЦен
						,_Fld24549RRef	= @УсловиеПродаж
						,_Fld24552	= @КорректироватьБУиНУ
						,_Fld24553	= @ОтчетностьПодписана
						,_Fld24554RRef	= @СтатьяПрочихДоходовИРасходов
						,_Fld24555RRef	= @ПодразделениеОрганизации
						,_Fld24556	= @АдресДоставки
						,_Fld24557	= @ДополнениеКАдресуДоставки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперации", ВидОперации.Ключ());
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("КратностьВзаиморасчетов", КратностьВзаиморасчетов);
					Команда.Parameters.AddWithValue("КурсВзаиморасчетов", КурсВзаиморасчетов);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовПоАвансам", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаРасчетовСКонтрагентом", Guid.Empty);
					Команда.Parameters.AddWithValue("КорректироватьБУиНУ", КорректироватьБУиНУ);
					Команда.Parameters.AddWithValue("ОтчетностьПодписана", ОтчетностьПодписана);
					Команда.Parameters.AddWithValue("АдресДоставки", АдресДоставки);
					Команда.Parameters.AddWithValue("ДополнениеКАдресуДоставки", ДополнениеКАдресуДоставки);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document23153
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}