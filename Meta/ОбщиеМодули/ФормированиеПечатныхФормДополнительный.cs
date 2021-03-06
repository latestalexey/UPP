﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class ФормированиеПечатныхФормДополнительный
	{
		////////////////////////////////////////////////////////////////////////////////
		// ВСПОМОГАТЕЛЬНЫЕ ПРОЦЕДУРЫ И ФУНКЦИИ
		// Формирует запрос по документу
		//
		// Параметры:
		//		Структура с полями:
		//			Организация;
		//			Банк;
		//			Дата.
		//
		// Возвращаемое значение:
		//  Результат запроса
		//

		public object ЗапросШапкиДляПечатиСпискаПеречислений(/*ПечатаемыйДокумент*/)
		{
			//Запрос = Новый Запрос;
			//Запрос.УстановитьПараметр("ПечатаемыйДокумент", ПечатаемыйДокумент);
			//Запрос.УстановитьПараметр("СтруктурнаяЕдиница", ПечатаемыйДокумент.Организация);
			//Запрос.УстановитьПараметр("ДатаДокумента", 		ПечатаемыйДокумент.Дата);
			/*Запрос.Текст = 
		ФормированиеПечатныхФормЗК.ПолучитьТекстЗапросаПоОтветственнымЛицам(
			"ДатаДокумента",
			"ОтветственноеЛицо В (ЗНАЧЕНИЕ(Перечисление.ОтветственныеЛицаОрганизаций.Руководитель),ЗНАЧЕНИЕ(Перечисление.ОтветственныеЛицаОрганизаций.ГлавныйБухгалтер))
			|И СтруктурнаяЕдиница = &СтруктурнаяЕдиница")
		+ ";"
		+Символы.ПС
		+Символы.ПС
		+ "////////////////////////////////////////////////////////////////////////////////"
		+Символы.ПС
		+
		"ВЫБРАТЬ
		|	ПечатаемыйДокумент.Дата КАК ДатаДок,
		|	ПечатаемыйДокумент.Организация.НаименованиеПолное КАК НазваниеОрганизации,
		|	ГлавныйБухгалтер.НаименованиеОтветственногоЛица КАК ФИОГлБуха
		|ИЗ
		|	Документ." + ПечатаемыйДокумент.Метаданные().Имя + " КАК ПечатаемыйДокумент
		|		ЛЕВОЕ СОЕДИНЕНИЕ ВТДанныеОбОтветственномЛице КАК ГлавныйБухгалтер
		|		ПО (ГлавныйБухгалтер.ОтветственноеЛицо = ЗНАЧЕНИЕ(Перечисление.ОтветственныеЛицаОрганизаций.ГлавныйБухгалтер))
		|ГДЕ
		|	ПечатаемыйДокумент.Ссылка = &ПечатаемыйДокумент";*/
			return null;
		}
		// СформироватьЗапросДляПечати()
		// Формирует запрос по документу
		//
		// Параметры:
		//  ПечатаемыйДокумент - документ, из которого выполняется печать
		//		Платежное поручение исходящее или Зарплата к выплате организаций
		//  Ведомости - массив, документы Зарплата к выплате организаций
		//  ФИОСокращенно - булево, используется для идентификации печати ФИО с инициалами
		//
		// Возвращаемое значение:
		//  Результат запроса
		//

		public object ЗапросСпискаДляПечатиПеречняПеречислений(/*ДатаДокумента, Ведомости, ФИОСокращенно*/)
		{
			//Запрос = Новый Запрос;
			//Запрос.УстановитьПараметр("ДатаДокумента",	ДатаДокумента);
			//Запрос.УстановитьПараметр("Ведомости",		Ведомости);
			//Запрос.УстановитьПараметр("ФИОСокращенно",	ФИОСокращенно);
			/*Запрос.Текст =
	"ВЫБРАТЬ РАЗРЕШЕННЫЕ
	|	ЗарплатаКВыплатеОрганизацийЗарплата.Физлицо КАК Физлицо,
	|	ЛицевыеСчетаРаботниковОрганизации.НомерЛицевогоСчета КАК НомерЛицевогоСчета,
	|	СУММА(ЗарплатаКВыплатеОрганизацийЗарплата.Сумма + ЗарплатаКВыплатеОрганизацийЗарплата.КомпенсацияЗаЗадержкуЗарплаты) КАК Сумма
	|ПОМЕСТИТЬ ВТВыплаты
	|ИЗ
	|	Документ.ЗарплатаКВыплатеОрганизаций.Зарплата КАК ЗарплатаКВыплатеОрганизацийЗарплата
	|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.ЛицевыеСчетаРаботниковОрганизации КАК ЛицевыеСчетаРаботниковОрганизации
	|		ПО ЗарплатаКВыплатеОрганизацийЗарплата.Физлицо = ЛицевыеСчетаРаботниковОрганизации.ФизЛицо
	|			И ЗарплатаКВыплатеОрганизацийЗарплата.Ссылка.Банк = ЛицевыеСчетаРаботниковОрганизации.Банк
	|			И ЗарплатаКВыплатеОрганизацийЗарплата.Ссылка.Организация = ЛицевыеСчетаРаботниковОрганизации.Организация
	|ГДЕ
	|	ЗарплатаКВыплатеОрганизацийЗарплата.Сумма + ЗарплатаКВыплатеОрганизацийЗарплата.КомпенсацияЗаЗадержкуЗарплаты > 0
	|	И ЗарплатаКВыплатеОрганизацийЗарплата.Ссылка В(&Ведомости)
	|
	|СГРУППИРОВАТЬ ПО
	|	ЗарплатаКВыплатеОрганизацийЗарплата.Физлицо,
	|	ЛицевыеСчетаРаботниковОрганизации.НомерЛицевогоСчета
	|
	|ИНДЕКСИРОВАТЬ ПО
	|	Физлицо
	|;
	|
	|////////////////////////////////////////////////////////////////////////////////
	|ВЫБРАТЬ
	|	ЕСТЬNULL(ФИОФизЛицСрезПоследних.Фамилия + ВЫБОР
	|			КОГДА ПОДСТРОКА(ФИОФизЛицСрезПоследних.Имя, 1, 1) <> """"
	|				ТОГДА "" "" + ВЫБОР
	|						КОГДА &ФИОСокращенно
	|							ТОГДА ПОДСТРОКА(ФИОФизЛицСрезПоследних.Имя, 1, 1) + "".""
	|						ИНАЧЕ ФИОФизЛицСрезПоследних.Имя
	|					КОНЕЦ
	|			ИНАЧЕ """"
	|		КОНЕЦ + ВЫБОР
	|			КОГДА ПОДСТРОКА(ФИОФизЛицСрезПоследних.Отчество, 1, 1) <> """"
	|				ТОГДА "" "" + ВЫБОР
	|						КОГДА &ФИОСокращенно
	|							ТОГДА ПОДСТРОКА(ФИОФизЛицСрезПоследних.Отчество, 1, 1) + "".""
	|						ИНАЧЕ ФИОФизЛицСрезПоследних.Отчество
	|					КОНЕЦ
	|			ИНАЧЕ """"
	|		КОНЕЦ, Выплаты.Физлицо.Наименование) КАК ФизЛицо,
	|	Выплаты.НомерЛицевогоСчета КАК НомерЛицевогоСчета,
	|	Выплаты.Сумма КАК Сумма
	|ИЗ
	|	ВТВыплаты КАК Выплаты
	|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.ФИОФизЛиц.СрезПоследних(
	|				&ДатаДокумента,
	|				Физлицо В
	|					(ВЫБРАТЬ РАЗЛИЧНЫЕ
	|						СписокФизЛиц.Физлицо
	|					ИЗ
	|						ВТВыплаты КАК СписокФизЛиц)) КАК ФИОФизЛицСрезПоследних
	|		ПО Выплаты.Физлицо = ФИОФизЛицСрезПоследних.ФизЛицо
	|
	|УПОРЯДОЧИТЬ ПО
	|	ФизЛицо";*/
			return null;
		}
		// СформироватьЗапросДляПечатиПеречняПеречислений()
		////////////////////////////////////////////////////////////////////////////////
		// ПРОЦЕДУРЫ И ФУНКЦИИ МЕХАНИЗМА ОСТАТКИ ОТПУСКОВ

		public object СформироватьПечатнуюФормуСправкиПоУправленческимОтпускамСотрудника(/*Физлицо, ФИОСотрудника, Сотрудник = Неопределено*/)
		{
			//ФорматДаты = "ДФ='d MMM yyyy ""г.""'";
			//КомпонентаСклоненияФИО = глЗначениеПеременной("глКомпонентаСклоненияФИО");
			//Макет = ПолучитьОбщийМакет("СправкаПоОтпускамКомпанииСотрудника");
			//ТабДокумент = Новый ТабличныйДокумент;
			//ТабДокумент.ИмяПараметровПечати = "ПАРАМЕТРЫ_ПЕЧАТИ_СправкаПоУправленческимОтпускамСотрудника";
			//Запрос = Новый Запрос;
			//Запрос.УстановитьПараметр("Физлицо",	Физлицо);
			/*Запрос.Текст =
	"ВЫБРАТЬ
	|	ПриемНаРаботу.Сотрудник,
	|	ПриемНаРаботу.ДатаПриема,
	|	ВЫБОР
	|		КОГДА Увольнение.ДатаУвольнения ЕСТЬ NULL 
	|				ИЛИ Увольнение.ДатаУвольнения < ПриемНаРаботу.ДатаПриема
	|			ТОГДА ДАТАВРЕМЯ(1, 1, 1)
	|		ИНАЧЕ Увольнение.ДатаУвольнения
	|	КОНЕЦ КАК ДатаУвольнения,
	|	ПриемНаРаботу.Подразделение,
	|	ПриемНаРаботу.Должность,
	|	ПриемНаРаботу.Пол,
	|	ЕСТЬNULL(УчетнаяПолитикаПоПерсоналу.КоличествоДнейОтпускаВГод, 20) КАК КоличествоДнейОтпускаВГод
	|ИЗ
	|	(ВЫБРАТЬ
	|		Работники.ФизЛицо.Наименование КАК Сотрудник,
	|		Работники.Период КАК ДатаПриема,
	|		Работники.Подразделение.Наименование КАК Подразделение,
	|		Работники.Должность.Наименование КАК Должность,
	|		Работники.ФизЛицо.Пол КАК Пол,
	|		Работники.ФизЛицо КАК ФизЛицо
	|	ИЗ
	|		РегистрСведений.Работники КАК Работники
	|			ВНУТРЕННЕЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
	|				МАКСИМУМ(Работники.Период) КАК Период,
	|				Работники.ФизЛицо КАК ФизЛицо
	|			ИЗ
	|				РегистрСведений.Работники КАК Работники
	|			ГДЕ
	|				Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.ПриемНаРаботу)
	|				И Работники.ФизЛицо = &ФизЛицо
	|			
	|			СГРУППИРОВАТЬ ПО
	|				Работники.ФизЛицо) КАК РаботникиПериоды
	|			ПО Работники.Период = РаботникиПериоды.Период
	|				И Работники.ФизЛицо = РаботникиПериоды.ФизЛицо
	|	ГДЕ
	|		Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.ПриемНаРаботу)
	|		И Работники.ФизЛицо = &ФизЛицо) КАК ПриемНаРаботу
	|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.УчетнаяПолитикаПоПерсоналу КАК УчетнаяПолитикаПоПерсоналу
	|		ПО (ИСТИНА)
	|		ЛЕВОЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
	|			ДОБАВИТЬКДАТЕ(Работники.Период, ДЕНЬ, -1) КАК ДатаУвольнения,
	|			Работники.ФизЛицо КАК ФизЛицо
	|		ИЗ
	|			РегистрСведений.Работники КАК Работники
	|				ВНУТРЕННЕЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
	|					МАКСИМУМ(Работники.Период) КАК Период,
	|					Работники.ФизЛицо КАК ФизЛицо
	|				ИЗ
	|					РегистрСведений.Работники КАК Работники
	|				ГДЕ
	|					Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.Увольнение)
	|					И Работники.ФизЛицо = &ФизЛицо
	|				
	|				СГРУППИРОВАТЬ ПО
	|					Работники.ФизЛицо) КАК РаботникиПериоды
	|				ПО Работники.Период = РаботникиПериоды.Период
	|					И Работники.ФизЛицо = РаботникиПериоды.ФизЛицо
	|		ГДЕ
	|			Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.Увольнение)
	|			И Работники.ФизЛицо = &ФизЛицо) КАК Увольнение
	|		ПО ПриемНаРаботу.ФизЛицо = Увольнение.ФизЛицо
	|
	|СГРУППИРОВАТЬ ПО
	|	ЕСТЬNULL(УчетнаяПолитикаПоПерсоналу.КоличествоДнейОтпускаВГод, 20),
	|	ПриемНаРаботу.Сотрудник,
	|	ПриемНаРаботу.ДатаПриема,
	|	ПриемНаРаботу.Подразделение,
	|	ПриемНаРаботу.Должность,
	|	ПриемНаРаботу.Пол,
	|	ВЫБОР
	|		КОГДА Увольнение.ДатаУвольнения ЕСТЬ NULL 
	|				ИЛИ Увольнение.ДатаУвольнения < ПриемНаРаботу.ДатаПриема
	|			ТОГДА ДАТАВРЕМЯ(1, 1, 1)
	|		ИНАЧЕ Увольнение.ДатаУвольнения
	|	КОНЕЦ";*/
			//Выборка = Запрос.Выполнить().Выбрать();
			//ДатаПриема = Дата(1,1,1);
			if(true/*Выборка.Следующий()*/)
			{
				//ДатаПриема = Выборка.ДатаПриема;
				//ОбластьМакета = Макет.ПолучитьОбласть("ОбщиеДанные");
				//ОбластьМакета.Параметры.Заполнить(Выборка);
				//ТабДокумент.Вывести(ОбластьМакета);
				//ОбластьМакета = Макет.ПолучитьОбласть("Шапка");
				//ОбластьМакета.Параметры.Период		= Формат(ДатаПриема, ФорматДаты);
				if(true/*Выборка.Пол = Перечисления.ПолФизическихЛиц.Женский*/)
				{
					//ОбластьМакета.Параметры.Комментарий	= "Принята на работу";
				}
				//ТабДокумент.Вывести(ОбластьМакета);
				//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
				//ОбластьМакета.Параметры.Текст			= "" + Выборка.КоличествоДнейОтпускаВГод + " " + ОбщегоНазначения.ФормаМножественногоЧисла("день","дня","дней",Выборка.КоличествоДнейОтпускаВГод) + " отпуска в год";
				//ТабДокумент.Вывести(ОбластьМакета);
				//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
				//ТабДокумент.Вывести(ОбластьМакета);
			}
			if(true/*Выборка.Количество() = 0*/)
			{
				/*Запрос.Текст =
		"ВЫБРАТЬ
		|	ПриемНаРаботу.Сотрудник КАК Сотрудник,
		|	ПриемНаРаботу.ДатаПриема КАК ДатаПриема,
		|	ВЫБОР
		|		КОГДА Увольнение.ДатаУвольнения ЕСТЬ NULL 
		|				ИЛИ Увольнение.ДатаУвольнения < ПриемНаРаботу.ДатаПриема
		|			ТОГДА ДАТАВРЕМЯ(1, 1, 1)
		|		ИНАЧЕ Увольнение.ДатаУвольнения
		|	КОНЕЦ КАК ДатаУвольнения,
		|	ЕСТЬNULL(СоответствиеПодразделенийИПодразделенийОрганизаций.Подразделение.Наименование, ""Подразделение не указано"") КАК Подразделение,
		|	ПриемНаРаботу.Должность КАК Должность,
		|	ПриемНаРаботу.Пол КАК Пол,
		|	ЕСТЬNULL(УчетнаяПолитикаПоПерсоналу.КоличествоДнейОтпускаВГод, 20) КАК КоличествоДнейОтпускаВГод,
		|	ПриемНаРаботу.ОбособленноеПодразделение КАК ОбособленноеПодразделение
		|ИЗ
		|	(ВЫБРАТЬ
		|		Работники.Сотрудник.Физлицо.Наименование КАК Сотрудник,
		|		МАКСИМУМ(Работники.Период) КАК ДатаПриема,
		|		Работники.Должность.Наименование КАК Должность,
		|		Работники.Сотрудник.Физлицо.Пол КАК Пол,
		|		Работники.ОбособленноеПодразделение.Наименование КАК ОбособленноеПодразделение,
		|		Работники.ПодразделениеОрганизации КАК ПодразделениеОрганизации,
		|		Работники.Сотрудник.Физлицо КАК Физлицо
		|	ИЗ
		|		РегистрСведений.РаботникиОрганизаций КАК Работники
		|			ВНУТРЕННЕЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
		|				МАКСИМУМ(Работники.Период) КАК Период,
		|				Работники.Сотрудник.Физлицо КАК Физлицо
		|			ИЗ
		|				РегистрСведений.РаботникиОрганизаций КАК Работники
		|			ГДЕ
		|				Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.ПриемНаРаботу)
		|				И Работники.Сотрудник.Физлицо = &ФизЛицо
		|			
		|			СГРУППИРОВАТЬ ПО
		|				Работники.Сотрудник.Физлицо) КАК РаботникиПериоды
		|			ПО Работники.Период = РаботникиПериоды.Период
		|				И Работники.Сотрудник.Физлицо = РаботникиПериоды.Физлицо
		|	ГДЕ
		|		Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.ПриемНаРаботу)
		|		И Работники.Сотрудник.Физлицо = &ФизЛицо
		|	
		|	СГРУППИРОВАТЬ ПО
		|		Работники.Сотрудник.Физлицо.Наименование,
		|		Работники.Должность.Наименование,
		|		Работники.Сотрудник.Физлицо.Пол,
		|		Работники.ОбособленноеПодразделение.Наименование,
		|		Работники.ПодразделениеОрганизации,
		|		Работники.Сотрудник.Физлицо) КАК ПриемНаРаботу
		|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.УчетнаяПолитикаПоПерсоналу КАК УчетнаяПолитикаПоПерсоналу
		|		ПО (ИСТИНА)
		|		ЛЕВОЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
		|			Работники.Сотрудник.Физлицо КАК Физлицо,
		|			МАКСИМУМ(Работники.Период) КАК ДатаУвольнения
		|		ИЗ
		|			РегистрСведений.РаботникиОрганизаций КАК Работники
		|				ВНУТРЕННЕЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
		|					МАКСИМУМ(Работники.Период) КАК Период,
		|					Работники.Сотрудник.Физлицо КАК Физлицо
		|				ИЗ
		|					РегистрСведений.РаботникиОрганизаций КАК Работники
		|				ГДЕ
		|					Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.Увольнение)
		|					И Работники.Сотрудник.Физлицо = &ФизЛицо
		|				
		|				СГРУППИРОВАТЬ ПО
		|					Работники.Сотрудник.Физлицо) КАК РаботникиПериоды
		|				ПО Работники.Период = РаботникиПериоды.Период
		|					И Работники.Сотрудник.Физлицо = РаботникиПериоды.Физлицо
		|		ГДЕ
		|			Работники.ПричинаИзмененияСостояния = ЗНАЧЕНИЕ(Перечисление.ПричиныИзмененияСостояния.Увольнение)
		|			И Работники.Сотрудник.Физлицо = &ФизЛицо
		|		
		|		СГРУППИРОВАТЬ ПО
		|			Работники.Сотрудник.Физлицо) КАК Увольнение
		|		ПО ПриемНаРаботу.Физлицо = Увольнение.Физлицо
		|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.СоответствиеПодразделенийИПодразделенийОрганизаций КАК СоответствиеПодразделенийИПодразделенийОрганизаций
		|		ПО ПриемНаРаботу.ПодразделениеОрганизации = СоответствиеПодразделенийИПодразделенийОрганизаций.ПодразделениеОрганизации";*/
				//Выборка = Запрос.Выполнить().Выбрать();
				if(true/*Выборка.Следующий()*/)
				{
					//ДатаПриема = Выборка.ДатаПриема;
					//ОбластьМакета = Макет.ПолучитьОбласть("ОбщиеДанные");
					//ОбластьМакета.Параметры.Заполнить(Выборка);
					//ТабДокумент.Вывести(ОбластьМакета);
					//ОбластьМакета = Макет.ПолучитьОбласть("Шапка");
					//ОбластьМакета.Параметры.Период		= Формат(ДатаПриема, ФорматДаты);
					if(true/*Выборка.Пол = Перечисления.ПолФизическихЛиц.Женский*/)
					{
						//ОбластьМакета.Параметры.Комментарий	= "Принята на работу в организацию " + Выборка.ОбособленноеПодразделение;
					}
					//ТабДокумент.Вывести(ОбластьМакета);
					//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
					//ОбластьМакета.Параметры.Текст			= "" + Выборка.КоличествоДнейОтпускаВГод + " " + ОбщегоНазначения.ФормаМножественногоЧисла("день","дня","дней",Выборка.КоличествоДнейОтпускаВГод) + " отпуска в год";
					//ТабДокумент.Вывести(ОбластьМакета);
					//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
					//ТабДокумент.Вывести(ОбластьМакета);
				}
			}
			/*Запрос.Текст =
	"ВЫБРАТЬ
	|	ПравоНаДополнительныеДниОтпускаРаботники.Ссылка.Дата КАК Период,
	|	ПравоНаДополнительныеДниОтпускаРаботники.Количество КАК ДнейОтпуска,
	|	ПравоНаДополнительныеДниОтпускаРаботники.Примечание
	|ИЗ
	|	Документ.ПравоНаДополнительныеДниОтпуска.Работники КАК ПравоНаДополнительныеДниОтпускаРаботники
	|ГДЕ
	|	ПравоНаДополнительныеДниОтпускаРаботники.Сотрудник.Физлицо = &Физлицо
	|	И ПравоНаДополнительныеДниОтпускаРаботники.Ссылка.Проведен
	|
	|УПОРЯДОЧИТЬ ПО
	|	Период";*/
			//ТаблицаДопОтпусков = Запрос.Выполнить().Выгрузить();
			/*Запрос.Текст =
	"ВЫБРАТЬ
	|	ОстаткиСрез.ДатаОкончанияРабочегоГода КАК Период,
	|	СУММА(ОстаткиОтпусковОстатки.Количество) КАК Количество
	|ИЗ
	|	Справочник.ОстаткиОтпусков.Остатки КАК ОстаткиОтпусковОстатки
	|		ВНУТРЕННЕЕ СОЕДИНЕНИЕ (ВЫБРАТЬ
	|			ВложенныйЗапрос.ДатаАктуальности КАК ДатаАктуальности,
	|			МАКСИМУМ(ВложенныйЗапрос.ДатаОкончанияРабочегоГода) КАК ДатаОкончанияРабочегоГода
	|		ИЗ
	|			(ВЫБРАТЬ
	|				МАКСИМУМ(ОстаткиОтпусковОстатки.Ссылка.ДатаАктуальности) КАК ДатаАктуальности,
	|				ОстаткиОтпусковОстатки.ДатаОкончанияРабочегоГода КАК ДатаОкончанияРабочегоГода
	|			ИЗ
	|				Справочник.ОстаткиОтпусков.Остатки КАК ОстаткиОтпусковОстатки
	|			ГДЕ
	|				ОстаткиОтпусковОстатки.Ссылка.Физлицо = &Физлицо
	|			
	|			СГРУППИРОВАТЬ ПО
	|				ОстаткиОтпусковОстатки.ДатаОкончанияРабочегоГода) КАК ВложенныйЗапрос
	|		
	|		СГРУППИРОВАТЬ ПО
	|			ВложенныйЗапрос.ДатаАктуальности) КАК ОстаткиСрез
	|		ПО ОстаткиОтпусковОстатки.Ссылка.ДатаАктуальности = ОстаткиСрез.ДатаАктуальности
	|			И (ОстаткиОтпусковОстатки.Ссылка.Физлицо = &Физлицо)
	|
	|СГРУППИРОВАТЬ ПО
	|	ОстаткиСрез.ДатаОкончанияРабочегоГода
	|
	|УПОРЯДОЧИТЬ ПО
	|	Период";*/
			//ТаблицаОстатков = Запрос.Выполнить().Выгрузить();
			/*Запрос.Текст =
	"ВЫБРАТЬ
	|	0 КАК НомерСтроки,
	|	ФактическиеОтпуска.Физлицо КАК Сотрудник,
	|	ФактическиеОтпуска.Период КАК ДатаНачала,
	|	ФактическиеОтпуска.ДатаОкончания КАК ДатаОкончания
	|ИЗ
	|	РегистрНакопления.ФактическиеОтпуска КАК ФактическиеОтпуска
	|ГДЕ
	|	ФактическиеОтпуска.Физлицо = &ФизЛицо
	|
	|УПОРЯДОЧИТЬ ПО
	|	ДатаНачала,
	|	ДатаОкончания";*/
			//ТаблицаПериодов = Запрос.Выполнить().Выгрузить();
			//НомерСтроки = 1;
			//СотрудникУволен		= ЗначениеЗаполнено(Выборка.ДатаУвольнения);
			//ДатаАктуальности	= ?(СотрудникУволен, Выборка.ДатаУвольнения, ОбщегоНазначения.ПолучитьРабочуюДату());
			//ДлинаСуток = 86400;
			/*// Получим остатки отпуска на следующий день после текущего или после даты увольнения,
*/
			/*// Что бы отпуска текущего дня тоже попали в отчет
*/
			//Строка = ТаблицаПериодов.Добавить();
			//Строка.НомерСтроки		= 0;
			//Строка.Сотрудник		= Физлицо;
			//Строка.ДатаНачала		= ДатаАктуальности + ДлинаСуток;
			//Строка.ДатаОкончания	= ДатаАктуальности + ДлинаСуток;
			/*// Получим остатки на конец каждого рабочего года
*/
			if(true/*ЗначениеЗаполнено(ДатаПриема)*/)
			{
				//ТекущийРабочийГод = НачалоДня(КонецГода(ДатаПриема));
				//НомерСтроки = -1;
				while(true/*ТекущийРабочийГод < ДатаАктуальности*/)
				{
					//Строка = ТаблицаПериодов.Добавить();
					//Строка.НомерСтроки		= НомерСтроки;
					//Строка.Сотрудник		= Физлицо;
					//Строка.ДатаНачала		= ТекущийРабочийГод;
					//Строка.ДатаОкончания	= ТекущийРабочийГод;
					//ТекущийРабочийГод = НачалоДня(КонецГода(КонецГода(ТекущийРабочийГод)+1));
					//НомерСтроки = НомерСтроки - 1;
				}
				//;;
			}
			//ТаблицаПериодов.Сортировать("НомерСтроки");
			//Выборка = ПроцедурыУправленияПерсоналомДополнительный.ПодготовитьДанныеПоУправленческимОтпускам(ТаблицаПериодов, Истина);
			/*// Список макетов с информацией на сегодня
*/
			//МакетыНаСегодня			= Новый Массив;
			/*// таблица с макетами
*/
			//ТаблицаМакетовЗаПериод	= Новый ТаблицаЗначений;
			//ТаблицаМакетовЗаПериод.Колонки.Добавить("Период");
			//ТаблицаМакетовЗаПериод.Колонки.Добавить("ДопРеквизитУпорядочивания");
			//ТаблицаМакетовЗаПериод.Колонки.Добавить("МассивМакетов");
			while(true/*Выборка.Следующий()*/)
			{
				if(true/*Выборка.НомерСтроки = 0*/)
				{
					/*// Остаток отпуска на рабочую дату/дату увольнения
*/
					//ОбщееКоличествоДней		= Выборка.Количество + Выборка.ОстатокДополнительногоОтпуска;
					//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
					//МакетыНаСегодня.Добавить(ОбластьМакета);
					//ОбластьМакета = Макет.ПолучитьОбласть("Шапка");
					if(true/*СотрудникУволен*/)
					{
						//ОбластьМакета.Параметры.Период		= "На дату увольнения, " + Формат(ДатаАктуальности, ФорматДаты);
					}
					//МакетыНаСегодня.Добавить(ОбластьМакета);
					if(true/*ОбщееКоличествоДней >= 0*/)
					{
						//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
						//ОбластьМакета.Параметры.Текст			= "Неиспользованный отпуск";
						//ОбластьМакета.Параметры.КоличествоДней	= "" + ОбщееКоличествоДней + " " + ОбщегоНазначения.ФормаМножественногоЧисла("день","дня","дней",ОбщееКоличествоДней);
					}
					//МакетыНаСегодня.Добавить(ОбластьМакета);
					if(true/*(ОбщееКоличествоДней >= 0 И Выборка.КоличествоДнейОтпускаБезТекущегоГода > 0 И Выборка.ОстатокДополнительногоОтпуска > 0)
				ИЛИ (ОбщееКоличествоДней < 0 И Выборка.КоличествоДнейОтпускаБезТекущегоГода < 0 И Выборка.ОстатокДополнительногоОтпуска < 0)*/)
					{
						//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
						//ОбластьМакета.Параметры.Текст			= "Из них";
						//ТабДокумент.Вывести(ОбластьМакета);
						//ОбщийТекст = "     ";
					}
					if(true/*ОбщееКоличествоДней >= 0*/)
					{
						if(true/*Выборка.КоличествоДнейОтпускаБезТекущегоГода > 0*/)
						{
							//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
							//ОбластьМакета.Параметры.Текст			= ОбщийТекст + "остаток прошлых лет";
							//ОбластьМакета.Параметры.КоличествоДней	= "" + Выборка.КоличествоДнейОтпускаБезТекущегоГода + " " + ОбщегоНазначения.ФормаМножественногоЧисла("день","дня","дней",Выборка.КоличествоДнейОтпускаБезТекущегоГода);
							//МакетыНаСегодня.Добавить(ОбластьМакета);
						}
						if(true/*Выборка.ОстатокДополнительногоОтпуска > 0*/)
						{
							//ОбластьМакета = Макет.ПолучитьОбласть("Строка");
							//ОбластьМакета.Параметры.Текст			= ОбщийТекст + "дополнительный отпуск";
							//ОбластьМакета.Параметры.КоличествоДней	= "" + Выборка.ОстатокДополнительногоОтпуска + " " + ОбщегоНазначения.ФормаМножественногоЧисла("день","дня","дней",Выборка.ОстатокДополнительногоОтпуска);
							//МакетыНаСегодня.Добавить(ОбластьМакета);
						}
					}
				}
			}
			//ТаблицаМакетовЗаПериод.Сортировать("Период, ДопРеквизитУпорядочивания");
			//ФИОСотрудника = СокрЛП(Физлицо);
			//УниверсальныеМеханизмы.Просклонять(КомпонентаСклоненияФИО, ФИОСотрудника, 2, , ФИОСотрудника);
			return null;
		}

		public void ПечатьСправкиПоУправленческимОтпускамСотрудника(/*Физлицо, Сотрудник = Неопределено*/)
		{
			//ФИОСотрудника = "";
			//ТабДокумент = СформироватьПечатнуюФормуСправкиПоУправленческимОтпускамСотрудника(Физлицо, ФИОСотрудника, Сотрудник);
			//УниверсальныеМеханизмы.НапечататьДокумент(ТабДокумент, , , "Отпуска " + ФИОСотрудника);
		}
		// Функция формирует табличный документ с печатной формой "Список плательщиков в банк".
		//
		// Параметры
		//  ПечатаемыйДокумент - документ, из которого выполняется печать
		//		Платежное поручение исходящее или Зарплата к выплате организаций
		//  Ведомости - массив, документы Зарплата к выплате организаций
		//  ФИОСокращенно - булево, используется для идентификации печати ФИО с инициалами
		// Возвращаемое значение:
		//  Табличный документ - печатная форма
		//

		public object ПечатьСписокПеречислений(/*ПечатаемыйДокумент, Ведомости, ФИОСокращенно = Истина*/)
		{
			//ТабДокумент = Новый ТабличныйДокумент;
			//ТабДокумент.ПолеСлева = 0;
			//ТабДокумент.ПолеСправа = 0;
			//ТабДокумент.ИмяПараметровПечати = "ПАРАМЕТРЫ_ПЕЧАТИ_СписокПеречислений";
			//Макет 		= ПолучитьОбщийМакет("СписокПеречисленийЗарплатыВБанк");
			/*// получаем данные для печати
*/
			//ВыборкаДляШапки = ЗапросШапкиДляПечатиСпискаПеречислений(ПечатаемыйДокумент).Выполнить().Выбрать();
			//ВыборкаРаботники = ЗапросСпискаДляПечатиПеречняПеречислений(ПечатаемыйДокумент.Дата, Ведомости, ФИОСокращенно).Выполнить().Выбрать();
			/*// подсчитываем количество страниц документа - для корректного разбиения на страницы
*/
			//ВсегоСтрокДокумента = ВыборкаРаботники.Количество();
			//ОбластьМакетаШапкаДокумента = Макет.ПолучитьОбласть("ШапкаДокумента");
			//ОбластьМакетаШапка			= Макет.ПолучитьОбласть("Шапка");
			//ОбластьМакетаСтрока 		= Макет.ПолучитьОбласть("Строка");
			//ОбластьМакетаИтогПоСтранице = Макет.ПолучитьОбласть("ИтогПоЛисту");
			//ОбластьМакетаПодвал 		= Макет.ПолучитьОбласть("Подвал");
			/*// массив с двумя строками - для разбиения на страницы
*/
			//ВыводимыеОбласти = Новый Массив();
			//ВыводимыеОбласти.Добавить(ОбластьМакетаСтрока);
			//ВыводимыеОбласти.Добавить(ОбластьМакетаИтогПоСтранице);
			/*// выводим данные о руководителях организации
*/
			while(true/*ВыборкаДляШапки.Следующий()*/)
			{
				//ОбластьМакетаШапкаДокумента.Параметры.Заполнить(ВыборкаДляШапки);
				/*// Шапка документа.
*/
				//ОбластьМакетаШапкаДокумента.Параметры.НазваниеОрганизации = СокрЛП(ОбластьМакетаШапкаДокумента.Параметры.НазваниеОрганизации);
				//ОбластьМакетаСтрока.Параметры.Заполнить(ВыборкаДляШапки);
				//ОбластьМакетаПодвал.Параметры.Заполнить(ВыборкаДляШапки);
				/*// подписи
*/
			}
			/*;
	
	ТабДокумент.Вывести(ОбластьМакетаШапкаДокумента);*/
			//ТабДокумент.Вывести(ОбластьМакетаШапка);
			//ВыведеноСтраниц = 1;
			//ВыведеноСтрок = 0;
			//ИтогоНаСтранице = 0;
			//Итого = 0;
			/*// выводим данные по строкам документа.
*/
			while(true/*ВыборкаРаботники.Следующий()*/)
			{
				/*// разбиение на страницы
*/
				//ВыведеноСтрок = ВыведеноСтрок + 1;
				//ОбластьМакетаСтрока.Параметры.Заполнить(ВыборкаРаботники);
				//ОбластьМакетаСтрока.Параметры.НомерСтроки = ВыведеноСтрок;
				/*// Проверим, уместится ли строка на странице или надо открывать новую страницу
*/
				//ВывестиПодвалЛиста = Не ФормированиеПечатныхФорм.ПроверитьВыводТабличногоДокумента(ТабДокумент, ВыводимыеОбласти);
				if(true/*Не ВывестиПодвалЛиста и ВыведеноСтрок = ВсегоСтрокДокумента*/)
				{
					//ВыводимыеОбласти.Добавить(ОбластьМакетаПодвал);
					//ВывестиПодвалЛиста = Не ФормированиеПечатныхФорм.ПроверитьВыводТабличногоДокумента(ТабДокумент, ВыводимыеОбласти);
				}
				if(true/*ВывестиПодвалЛиста*/)
				{
					//ОбластьМакетаИтогПоСтранице.Параметры.ИтогоНаСтранице = ИтогоНаСтранице;
					//ТабДокумент.Вывести(ОбластьМакетаИтогПоСтранице);
					//ТабДокумент.ВывестиГоризонтальныйРазделительСтраниц();
					//ТабДокумент.Вывести(ОбластьМакетаШапка);
					//ВыведеноСтраниц = ВыведеноСтраниц + 1;
					//ИтогоНаСтранице = 0;
				}
				//ТабДокумент.Вывести(ОбластьМакетаСтрока);
				//ИтогоНаСтранице = ИтогоНаСтранице + ВыборкаРаботники.Сумма;
				//Итого = Итого + ВыборкаРаботники.Сумма;
			}
			if(true/*ВыведеноСтрок > 0*/)
			{
				//ОбластьМакетаИтогПоСтранице.Параметры.ИтогоНаСтранице = ИтогоНаСтранице;
			}
			//ВыводимыеОбласти = Новый Массив();
			//ВыводимыеОбласти.Добавить(ОбластьМакетаСтрока);
			//ВыводимыеОбласти.Добавить(ОбластьМакетаИтогПоСтранице);
			//ВыводимыеОбласти.Добавить(ОбластьМакетаПодвал);
			//ОбластьМакетаСтрока.Параметры.Физлицо = " " + Символы.ПС + " ";
			while(true/*ФормированиеПечатныхФорм.ПроверитьВыводТабличногоДокумента(ТабДокумент, ВыводимыеОбласти, Ложь)*/)
			{
				//ТабДокумент.Вывести(ОбластьМакетаСтрока);
			}
			/*;
	
	ТабДокумент.Вывести(ОбластьМакетаИтогПоСтранице);*/
			//ОбластьМакетаПодвал.Параметры.Итого = Итого;
			//ТабДокумент.Вывести(ОбластьМакетаПодвал);
			return null;
		}
		// ПечатьСписокПеречислений()
		////////////////////////////////////////////////////////////////////////////////
		// ПРОЦЕДУРЫ И ФУНКЦИИ ОТЧЕТОВ

		public object ТекстЗапросаПоОтпускамДляЛицевогоСчета(/**/)
		{
			/*Возврат
	"ВЫБРАТЬ РАЗРЕШЕННЫЕ
	|	ДатыУходаВОтпуск.Период КАК ДатаС,
	|	ДОБАВИТЬКДАТЕ(ВЫБОР
	|			КОГДА ДатыУходаВОтпуск.ПериодЗавершения >= МИНИМУМ(ДатыВозвращенияИзОтпуска.Период)
	|					ИЛИ ДатыУходаВОтпуск.ПериодЗавершения = ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)
	|				ТОГДА МИНИМУМ(ДатыВозвращенияИзОтпуска.Период)
	|			ИНАЧЕ ДатыУходаВОтпуск.ПериодЗавершения
	|		КОНЕЦ, ДЕНЬ, -1) КАК ДатаПо,
	|	ДатыУходаВОтпуск.Состояние КАК Состояние,
	|	ДатыУходаВОтпуск.ПервичныйДокумент КАК Регистратор,
	|	ДатыУходаВОтпуск.Организация КАК Организация,
	|	ДатыУходаВОтпуск.Сотрудник КАК Сотрудник
	|ПОМЕСТИТЬ ВТПериодыОтпуска
	|ИЗ
	|	РегистрСведений.СостояниеРаботниковОрганизаций КАК ДатыУходаВОтпуск
	|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.СостояниеРаботниковОрганизаций КАК ДатыВозвращенияИзОтпуска
	|		ПО ДатыУходаВОтпуск.Сотрудник = ДатыВозвращенияИзОтпуска.Сотрудник
	|			И ДатыУходаВОтпуск.Период < ДатыВозвращенияИзОтпуска.Период
	|ГДЕ
	|	ДатыУходаВОтпуск.Период МЕЖДУ &ДатаАктуальностиС И &ДатаАктуальностиПо
	|	И ДатыУходаВОтпуск.Состояние В(&СписокОтпусков)
	|	И ДатыУходаВОтпуск.Сотрудник В
	|			(ВЫБРАТЬ
	|				Сотрудники.Ссылка
	|			ИЗ
	|				ВТСотрудники КАК Сотрудники)
	|	И ДатыУходаВОтпуск.ПервичныйДокумент.Организация В(&Организация)
	|
	|СГРУППИРОВАТЬ ПО
	|	ДатыУходаВОтпуск.Период,
	|	ДатыУходаВОтпуск.Состояние,
	|	ДатыУходаВОтпуск.ПериодЗавершения,
	|	ДатыУходаВОтпуск.ПервичныйДокумент,
	|	ДатыУходаВОтпуск.Организация,
	|	ДатыУходаВОтпуск.Сотрудник
	|;
	|
	|////////////////////////////////////////////////////////////////////////////////
	|ВЫБРАТЬ
	|	ВЫБОР
	|		КОГДА ПериодыОтпуска.Состояние = &ЕжегодныйОтпуск
	|				И ПериодыОтпуска.ДатаС = ОтпускаОрганизацииРаботники.ДатаНачалаДоп
	|			ТОГДА ОтпускаОрганизацииРаботники.ВидДополнительногоОтпуска.Наименование
	|		ИНАЧЕ ПериодыОтпуска.Состояние
	|	КОНЕЦ КАК ВидОтпуска,
	|	ПериодыОтпуска.ДатаС КАК ДатаС,
	|	ПериодыОтпуска.ДатаПо КАК ДатаПо,
	|	ПериодыОтпуска.Регистратор.Дата КАК ДатаПриказаОтпуск,
	|	ПериодыОтпуска.Регистратор.Номер КАК НомерПриказаОтпуск,
	|	ОтпускаОрганизацииРаботники.РабочийГодС КАК РабочийГодС,
	|	ОтпускаОрганизацииРаботники.РабочийГодПо КАК РабочийГодПо,
	|	ПериодыОтпуска.Состояние КАК ПричинаОтсутствия,
	|	ВЫБОР
	|		КОГДА ПериодыОтпуска.Состояние = &ЕжегодныйОтпуск
	|			ТОГДА ВЫБОР
	|					КОГДА ЕСТЬNULL(ОтпускаОрганизацииРаботники.ДатаНачалаДоп, ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)) = ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)
	|						ТОГДА ПериодыОтпуска.ДатаПо
	|					ИНАЧЕ ВЫБОР
	|							КОГДА ПериодыОтпуска.ДатаПо < ОтпускаОрганизацииРаботники.ДатаНачалаДоп
	|								ТОГДА ПериодыОтпуска.ДатаПо
	|							ИНАЧЕ ДОБАВИТЬКДАТЕ(ОтпускаОрганизацииРаботники.ДатаНачалаДоп, ДЕНЬ, -1)
	|						КОНЕЦ
	|				КОНЕЦ
	|		ИНАЧЕ ПериодыОтпуска.ДатаПо
	|	КОНЕЦ КАК ДатаПоОсн,
	|	ЕСТЬNULL(ОтпускаОрганизацииРаботники.ДатаНачалаДоп, ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)) КАК ДатаНачалаДоп,
	|	ВЫБОР
	|		КОГДА ЕСТЬNULL(ОтпускаОрганизацииРаботники.ДатаНачалаДоп, ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)) = ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)
	|			ТОГДА ДАТАВРЕМЯ(1, 1, 1, 0, 0, 0)
	|		ИНАЧЕ ПериодыОтпуска.ДатаПо
	|	КОНЕЦ КАК ДатаОкончанияДоп,
	|	ПериодыОтпуска.Сотрудник КАК Сотрудник
	|ПОМЕСТИТЬ ВТОтпускаРаботника
	|ИЗ
	|	ВТПериодыОтпуска КАК ПериодыОтпуска
	|		ЛЕВОЕ СОЕДИНЕНИЕ Документ.ОтпускаОрганизаций.РаботникиОрганизации КАК ОтпускаОрганизацииРаботники
	|		ПО ПериодыОтпуска.Регистратор = ОтпускаОрганизацииРаботники.Ссылка
	|			И ПериодыОтпуска.Сотрудник = ОтпускаОрганизацииРаботники.Сотрудник
	|			И ПериодыОтпуска.ДатаС = ОтпускаОрганизацииРаботники.ДатаНачала
	|;
	|
	|////////////////////////////////////////////////////////////////////////////////
	|ВЫБРАТЬ
	|	ОтпускаРаботника.ДатаС,
	|	ОтпускаРаботника.ДатаПо,
	|	ОтпускаРаботника.РабочийГодС,
	|	ОтпускаРаботника.РабочийГодПо,
	|	ОтпускаРаботника.ВидОтпуска,
	|	ОтпускаРаботника.ДатаПриказаОтпуск КАК ДатаПриказаОтпуск,
	|	ОтпускаРаботника.НомерПриказаОтпуск,
	|	ВЫБОР
	|		КОГДА ОтпускаРаботника.ПричинаОтсутствия <> &ЕжегодныйОтпуск
	|			ТОГДА РАЗНОСТЬДАТ(ОтпускаРаботника.ДатаС, ОтпускаРаботника.ДатаПо, ДЕНЬ) + 1
	|		ИНАЧЕ ЕСТЬNULL(СУММА(ВЫБОР
	|						КОГДА РегламентированныйПроизводственныйКалендарь.ДатаКалендаря МЕЖДУ ОтпускаРаботника.ДатаС И ОтпускаРаботника.ДатаПоОсн
	|							ТОГДА РегламентированныйПроизводственныйКалендарь.КалендарныеДни
	|						ИНАЧЕ 0
	|					КОНЕЦ), 0)
	|	КОНЕЦ КАК ДнейОтпуска,
	|	ВЫБОР
	|		КОГДА ОтпускаРаботника.ПричинаОтсутствия <> &ЕжегодныйОтпуск
	|			ТОГДА 0
	|		ИНАЧЕ ЕСТЬNULL(СУММА(ВЫБОР
	|						КОГДА РегламентированныйПроизводственныйКалендарь.ДатаКалендаря МЕЖДУ ОтпускаРаботника.ДатаНачалаДоп И ОтпускаРаботника.ДатаОкончанияДоп
	|							ТОГДА РегламентированныйПроизводственныйКалендарь.КалендарныеДни
	|						ИНАЧЕ 0
	|					КОНЕЦ), 0)
	|	КОНЕЦ КАК ДнейОтпускаДоп,
	|	ОтпускаРаботника.Сотрудник.Физлицо КАК ФизЛицо
	|ИЗ
	|	ВТОтпускаРаботника КАК ОтпускаРаботника
	|		ЛЕВОЕ СОЕДИНЕНИЕ РегистрСведений.РегламентированныйПроизводственныйКалендарь КАК РегламентированныйПроизводственныйКалендарь
	|		ПО (РегламентированныйПроизводственныйКалендарь.ВидДня <> &Праздник)
	|			И (РегламентированныйПроизводственныйКалендарь.ДатаКалендаря МЕЖДУ ОтпускаРаботника.ДатаС И ОтпускаРаботника.ДатаПо)
	|
	|СГРУППИРОВАТЬ ПО
	|	ОтпускаРаботника.ДатаС,
	|	ОтпускаРаботника.ДатаПо,
	|	ОтпускаРаботника.РабочийГодС,
	|	ОтпускаРаботника.РабочийГодПо,
	|	ОтпускаРаботника.ВидОтпуска,
	|	ОтпускаРаботника.ДатаПриказаОтпуск,
	|	ОтпускаРаботника.НомерПриказаОтпуск,
	|	ОтпускаРаботника.ПричинаОтсутствия,
	|	ОтпускаРаботника.Сотрудник,
	|	ОтпускаРаботника.Сотрудник.Физлицо
	|
	|УПОРЯДОЧИТЬ ПО
	|	ФизЛицо,
	|	ДатаПриказаОтпуск
	|ИТОГИ ПО
	|	ФизЛицо";*/
			return null;
		}
		// ТекстЗапросаПоОтпускамДля()
	}
}
