﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class ПроцедурыОбменаУТУПП
	{

		public object ПолучитьМассивВсехУзлов(/**/)
		{
			//Запрос = Новый Запрос;
			/*Запрос.Текст = "ВЫБРАТЬ различные
	               |	ОбменУправлениеПредприятиемУправлениеТорговлей.Ссылка КАК Ссылка
	               |ИЗ
	               |	ПланОбмена.ОбменУправлениеПредприятиемУправлениеТорговлей КАК ОбменУправлениеПредприятиемУправлениеТорговлей
				   |
				   |ГДЕ
				   |
				   |	ОбменУправлениеПредприятиемУправлениеТорговлей.Ссылка <> &ЭтотУзел";*/
			//Запрос.УстановитьПараметр("ЭтотУзел", ПланыОбмена.ОбменУправлениеПредприятиемУправлениеТорговлей.ЭтотУзел());
			//МассивСсылок = Запрос.Выполнить().Выгрузить().ВыгрузитьКолонку("Ссылка");
			return null;
		}

		public object ВернутьМассивВсехУзловИзПараметровСеанса(/**/)
		{
			return null;
		}

		public object ПолучитьСоответствиеУзловИОрганизаций(/**/)
		{
			//Хранилище = ПараметрыСеанса.СоответствиеОрганизацийИУзловОбменаУТУПП;
			//СоответствиеУзловИОрганизаций = Хранилище.Получить();
			return null;
		}

		public object ВернутьМассивУзловПоОднойОрганизации(/*Организация, СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			if(true/*СоответствиеУзловИОрганизаций = Неопределено*/)
			{
				//СоответствиеУзловИОрганизаций = ПолучитьСоответствиеУзловИОрганизаций();
			}
			return null;
		}

		public object ПолучитьЗапросомМассивУзловПоОрганизации(/*Организация*/)
		{
			//Запрос = Новый Запрос;
			/*Запрос.Текст = "ВЫБРАТЬ Различные
	               |	ОбменУправлениеПредприятиемУправлениеТорговлей.Ссылка КАК Ссылка
	               |ИЗ
	               |	ПланОбмена.ОбменУправлениеПредприятиемУправлениеТорговлей КАК ОбменУправлениеПредприятиемУправлениеТорговлей
				   |		Левое соединение ПланОбмена.ОбменУправлениеПредприятиемУправлениеТорговлей.Организации КАК СписокОрганизаций
				   |			ПО (ОбменУправлениеПредприятиемУправлениеТорговлей.Ссылка = СписокОрганизаций.Ссылка)
				   |
	               |ГДЕ
	               |	(СписокОрганизаций.Организация В (&СсылкаНаОрганизацию)
				   |		ИЛИ СписокОрганизаций.Организация Есть NULL)
				   |	И ОбменУправлениеПредприятиемУправлениеТорговлей.Ссылка <> &ЭтотУзел";*/
			//Запрос.УстановитьПараметр("СсылкаНаОрганизацию", Организация);
			//Запрос.УстановитьПараметр("ЭтотУзел", ПланыОбмена.ОбменУправлениеПредприятиемУправлениеТорговлей.ЭтотУзел());
			//МассивСсылок = Запрос.Выполнить().Выгрузить().ВыгрузитьКолонку("Ссылка");
			return null;
		}

		public object ПолучитьТаблицуУзловИДат(/**/)
		{
			//Хранилище = ПараметрыСеанса.СоответствиеУзловИДатДляОбменаУТУПП;
			//ТаблицаУзловИДат = Хранилище.Получить();
			return null;
		}

		public object ПолучитьМассивУзловПоОрганизации(/*Организация, СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			if(true/*ТипЗнч(Организация) = Тип("Массив")*/)
			{
				//КоличествоЭлементовВМассиве = Организация.Количество();
				if(true/*КоличествоЭлементовВМассиве = 0*/)
				{
					//ОрганизацияДляПоиска = Справочники.Организации.ПустаяСсылка();
				}
			}
			if(true/*ОрганизацияДляПоиска <> Неопределено*/)
			{
				//МассивУзлов = ВернутьМассивУзловПоОднойОрганизации(ОрганизацияДляПоиска, СоответствиеУзловИОрганизаций);
			}
			return null;
		}

		public void ЗаполнитьСтруктуруПараметровПоЭлементу(/*Элемент, ИмяБазовогоТипа, ТипЭлемента, СтруктураПараметров, 
	СтруктураПолученияКоличества = Неопределено*/)
		{
			//ИмяДляЗапроса = "";
			//ЭтоСсылка = ОпределитьПоЭлементуЭтоСсылка(Элемент, ИмяБазовогоТипа, ТипЭлемента, ИмяДляЗапроса);
			if(true/*НЕ ЭтоСсылка*/)
			{
				if(true/*СтруктураПолученияКоличества <> Неопределено*/)
				{
				}
			}
			/*// надо все единым запросом получить
*/
			/*//нужно построить запрос и вернуть параметр по ссылке
*/
			//СтрокаИменПараметров = "";
			if(true/*СтруктураПолученияКоличества <> Неопределено*/)
			{
			}
			//СтрокаИменПараметров = Сред(СтрокаИменПараметров, 2);
			//Запрос = Новый Запрос();
			/*Запрос.Текст = "ВЫБРАТЬ
	               |	" + СтрокаИменПараметров + "
	               |ИЗ
	               |	" + ИмяДляЗапроса + " КАК ОбъектДанных
	               |ГДЕ
	               |	ОбъектДанных.Ссылка = &Ссылка";*/
			//Запрос.УстановитьПараметр("Ссылка", Элемент);
			//РезультатЗапроса = Запрос.Выполнить();
			if(true/*НЕ РезультатЗапроса.Пустой()*/)
			{
				//Выборка = РезультатЗапроса.Выбрать();
				//Выборка.Следующий();
				//ЗаполнитьЗначенияСвойств(СтруктураПараметров, Выборка);
				if(true/*СтруктураПолученияКоличества <> Неопределено*/)
				{
				}
			}
		}
		// функция по элементу определяет это группа и возвращает ссылку на него

		public object ОпределитьПоЭлементуЭтоГруппаИСсылку(/*Элемент, ИмяБазовогоТипа, ТипЭлемента, НужноОпределятьЭтоГруппа = Ложь, ЭтоГруппа = Ложь*/)
		{
			//ИмяДляЗапроса = "";
			//ЭтоСсылка = ОпределитьПоЭлементуЭтоСсылка(Элемент, ИмяБазовогоТипа, ТипЭлемента, ИмяДляЗапроса);
			if(true/*НЕ ЭтоСсылка*/)
			{
				if(true/*НужноОпределятьЭтоГруппа*/)
				{
					//ЭтоГруппа = Элемент.ЭтоГруппа;
					if(true/*ЭтоГруппа = Неопределено*/)
					{
						//ЭтоГруппа = Ложь;
					}
				}
			}
			if(true/*НужноОпределятьЭтоГруппа*/)
			{
				//ЭтоГруппа = ПолучитьЗначениеПараметраОбъектаИлиСсылки(Элемент, ИмяБазовогоТипа, ТипЭлемента, "ЭтоГруппа");
				if(true/*ЭтоГруппа = Неопределено*/)
				{
					//ЭтоГруппа = Ложь;
				}
			}
			return null;
		}

		public object ОпределитьПоЭлементуЭтоСсылка(/*Элемент, ИмяБазовогоТипа, ТипЭлемента, ИмяДляЗапроса*/)
		{
			//МетаданныеЭлемента = Элемент.Метаданные();
			if(true/*ИмяБазовогоТипа = "Справочники"*/)
			{
				//ТипСсылки = Тип("СправочникСсылка." + МетаданныеЭлемента.Имя);
				//ИмяДляЗапроса = "Справочник." + МетаданныеЭлемента.Имя;
			}
			//Возврат ТипЭлемента = ТипСсылки;
			return null;
		}
		// функция анализирует Элемент это объект или нет
		// если объект возвращает его реквизит, иначе
		// строит по ссылке запрос и возвращает значение этого реквизита из запроса

		public object ПолучитьЗначениеПараметраОбъектаИлиСсылки(/*Элемент, ИмяБазовогоТипа, ТипЭлемента, ИмяПараметра*/)
		{
			//ИмяДляЗапроса = "";
			//ЭтоСсылка = ОпределитьПоЭлементуЭтоСсылка(Элемент, ИмяБазовогоТипа, ТипЭлемента, ИмяДляЗапроса);
			if(true/*НЕ ЭтоСсылка*/)
			{
			}
			//Запрос = Новый Запрос();
			/*Запрос.Текст = "ВЫБРАТЬ
	               |	ОбъектДанных." + ИмяПараметра + "
				   |
	               |ИЗ
	               |	" + ИмяДляЗапроса + " КАК ОбъектДанных
	               |ГДЕ
	               |	ОбъектДанных.Ссылка = &Ссылка";*/
			//Запрос.УстановитьПараметр("Ссылка", Элемент);
			//РезультатЗапроса = Запрос.Выполнить();
			if(true/*РезультатЗапроса.Пустой()*/)
			{
			}
			//Выборка = РезультатЗапроса.Выбрать();
			//Выборка.Следующий();
			return null;
		}

		public void ДополнитьМассивУзловДляВыгрузкиДокумента(/*Элемент, МассивУзловДляПередачи, 
	ТипЭлемента = Неопределено, ВыгружатьДляВсехУзлов = Ложь, ВозвращатьМассивВсехУзлов = Истина,
	СоответствиеУзловИОрганизаций = Неопределено, НужноАнализироватьОграниченияПоДатам = Ложь*/)
		{
			if(true/*ТипЭлемента = Неопределено*/)
			{
				//ТипЭлемента = ТипЗнч(Элемент);
			}
			//СтруктураПараметров = Новый Структура("Дата");
			//СтруктураДопПараметров = Новый Структура();
			/*// если нужно делаем органичения для выгрузки для организации
*/
			/*// не для всех документов нужно такое органичение
*/
			/*// для некотороыех документов если в шапке пустая организация - значит документ едет везде
*/
			if(true/*ТипЭлемента = Тип("ДокументОбъект.ВнутреннееПеремещениеНаличныхДенежныхСредств") 
		ИЛИ ТипЭлемента = Тип("ДокументСсылка.ВнутреннееПеремещениеНаличныхДенежныхСредств")*/)
			{
				//СтруктураПараметров.Вставить("ОрганизацияПолучатель");
				//ЗаполнитьСтруктуруПараметровПоЭлементу(Элемент, "Документы", ТипЭлемента, СтруктураПараметров);
				//ДополнитьМассивУзламиПоОрганизации(МассивУзловДляПередачи, СтруктураПараметров.ОрганизацияПолучатель, СоответствиеУзловИОрганизаций);
			}
			if(true/*НужноАнализироватьОграниченияПоДатам*/)
			{
				/*// ограничение по датам смотрим
*/
				//ТаблицаДатИУзлов = ПолучитьТаблицуУзловИДат();
				//Номер = 0;
				while(true/*Номер <= МассивУзловДляПередачи.Количество() - 1*/)
				{
					//СтрокаТаблицы = ТаблицаДатИУзлов.Найти(МассивУзловДляПередачи[Номер], "ссылка");
					if(true/*СтрокаТаблицы <> Неопределено
				И ЗначениеЗаполнено(СтруктураПараметров.Дата)
				И СтруктураПараметров.Дата < СтрокаТаблицы.ДатаНачалаВыгрузкиДокументов*/)
					{
						//МассивУзловДляПередачи.Удалить(Номер);
					}
				}
				//;;
			}
		}

		public void ДополнитьМассивСсылками(/*ТекущийМассив, МассивДляДобавления*/)
		{
			if(true/*МассивДляДобавления = Неопределено*/)
			{
			}
		}

		public void ДополнитьМассивУзламиПоСправочникуИПараметру(/*ИмяСправочника, ИмяРеквизита, 
	СсылкаНаСправочник, МассивУзловДляПередачи, ИмяРеквизитаОрганизации = "Организация", СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			if(true/*СсылкаНаСправочник.Пустая()*/)
			{
			}
			//РезультатЗапроса = ПолныеПрава.ПолучитьРезультатЗапросаПоВыборкеОрганизаций(ИмяСправочника, ИмяРеквизита, ИмяРеквизитаОрганизации, СсылкаНаСправочник);
			if(true/*РезультатЗапроса.Пустой()*/)
			{
				//ДополнитьМассивУзламиПоОрганизации(МассивУзловДляПередачи, Справочники.Организации.ПустаяСсылка(), СоответствиеУзловИОрганизаций);
			}
		}

		public object ПолучитьПоНаборуЗаписейРазличныеЗначенияРеквизита(/*НаборЗаписей, ИмяРеквизита*/)
		{
			if(true/*НаборЗаписей.Количество() = 0*/)
			{
			}
			//ТаблицаДанных = НаборЗаписей.Выгрузить(, ИмяРеквизита);
			//ТаблицаДанных.Свернуть(ИмяРеквизита);
			//МассивОрганизаций = ТаблицаДанных.ВыгрузитьКолонку(ИмяРеквизита);
			return null;
		}

		public void ДополнитьМассивВсемиУзлами(/*МассивУзловДляПередачи*/)
		{
			//МассивУзлов = ВернутьМассивВсехУзловИзПараметровСеанса();
			//ДополнитьМассивСсылками(МассивУзловДляПередачи, МассивУзлов);
		}

		public void ДополнитьМассивУзламиПоОрганизации(/*МассивУзловДляПередачи, Организация, СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			//МассивУзлов = ПолучитьМассивУзловПоОрганизации(Организация, СоответствиеУзловИОрганизаций);
			//ДополнитьМассивСсылками(МассивУзловДляПередачи, МассивУзлов);
		}

		public void ДополнитьМассивУзловДляВыгрузкиСправочника(/*Элемент, МассивУзловДляПередачи, 
	ТипЭлемента = Неопределено, ВыгружатьДляВсехУзлов = Ложь, ВозвращатьМассивВсехУзлов = Истина,
	СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			/*// пердопределенные элементы выгружаем и загружаем послностью
*/
			if(true/*Элемент.Предопределенный*/)
			{
				//ОбеспечитьВыгрузкуОбъектаДляВсехУзлов(ВыгружатьДляВсехУзлов, ВозвращатьМассивВсехУзлов, МассивУзловДляПередачи);
			}
			//ВыгружатьДляВсехУзлов = Ложь;
			if(true/*ТипЭлемента = Неопределено*/)
			{
				//ТипЭлемента = ТипЗнч(Элемент);
			}
			if(true/*ТипЭлемента = Тип("СправочникОбъект.БанковскиеСчета")
		ИЛИ ТипЭлемента = Тип("СправочникСсылка.БанковскиеСчета")*/)
			{
				/*// нужно определить владельца
*/
				/*// если владелец не организация, тогда регистрируем изменения для всех узлов, 
*/
				/*// если организация, то только для тех узлов куда организация передается
*/
				//Владелец = ПолучитьЗначениеПараметраОбъектаИлиСсылки(Элемент, "Справочники", ТипЭлемента, "Владелец");
				if(true/*ТипЗнч(Владелец) = Тип("СправочникСсылка.Организации")*/)
				{
					/*// только узлы с указанной организацией
*/
					//ДополнитьМассивУзламиПоОрганизации(МассивУзловДляПередачи, Владелец, СоответствиеУзловИОрганизаций);
				}
			}
		}

		public void ОбеспечитьВыгрузкуОбъектаДляВсехУзлов(/*ВыгружатьДляВсехУзлов, ВозвращатьМассивВсехУзлов, МассивУзловДляПередачи*/)
		{
			//ВыгружатьДляВсехУзлов = Истина;
			if(true/*ВозвращатьМассивВсехУзлов*/)
			{
				//ДополнитьМассивВсемиУзлами(МассивУзловДляПередачи);
			}
		}

		public object ОпределениеУзловДляВыгрузкиСправочника(/*Элемент, ТипЭлемента = Неопределено, 
	ВыгружатьДляВсехУзлов = Ложь, ВозвращатьМассивВсехУзлов = Истина, 
	СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			//МассивУзловДляПередачи = Новый Массив;
			/*ДополнитьМассивУзловДляВыгрузкиСправочника(Элемент, МассивУзловДляПередачи, 
		ТипЭлемента, ВыгружатьДляВсехУзлов, ВозвращатьМассивВсехУзлов, СоответствиеУзловИОрганизаций);*/
			return null;
		}

		public object ОпределениеУзловДляВыгрузкиДокумента(/*Элемент, ТипРеквизита = Неопределено, ВыгружатьДляВсехУзлов = Ложь, 
	ВозвращатьМассивВсехУзлов = Истина, 
	СоответствиеУзловИОрганизаций = Неопределено, НужноАнализироватьОграниченияПоДатам = Ложь*/)
		{
			//МассивУзловДляПередачи = Новый Массив;
			/*ДополнитьМассивУзловДляВыгрузкиДокумента(Элемент, МассивУзловДляПередачи, 
		ТипРеквизита, ВыгружатьДляВсехУзлов, ВозвращатьМассивВсехУзлов, СоответствиеУзловИОрганизаций, НужноАнализироватьОграниченияПоДатам);*/
			return null;
		}

		public void ДополнитьМассивУзловДляВыгрузкиСсылочногоТипа(/*ИмяБазовогоТипа, Элемент, МассивУзловДляПередачи, 
	ТипЭлемента = Неопределено, ВыгружатьДляВсехУзлов = Ложь, ВозвращатьМассивВсехУзлов = Истина,
	СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			if(true/*ИмяБазовогоТипа = "Справочники"*/)
			{
				/*ДополнитьМассивУзловДляВыгрузкиСправочника(Элемент, МассивУзловДляПередачи, 
			ТипЭлемента, ВыгружатьДляВсехУзлов, ВозвращатьМассивВсехУзлов,
			СоответствиеУзловИОрганизаций);*/
			}
		}

		public object ОпределитьМассивУзловДляРегистрацииПроизвольногоТипа(/*Данные, ИмяБазовогоТипа, ТипЭлемента = Неопределено, МетаданныеОбъекта = Неопределено,
	ВыгружатьДляВсехУзлов = Ложь, ВозвращатьМассивВсехУзлов = Истина,
	СоответствиеУзловИОрганизаций = Неопределено, НужноАнализироватьОграниченияПоДатам = Истина*/)
		{
			if(true/*ИмяБазовогоТипа = "Справочники"*/)
			{
				/*МассивУзловДляРегистрацииСсылки = ОпределениеУзловДляВыгрузкиСправочника(Данные, ТипЭлемента, ВыгружатьДляВсехУзлов, 
			ВозвращатьМассивВсехУзлов, СоответствиеУзловИОрганизаций);*/
			}
			return null;
		}

		public void ОпределитьПоНаборуиРеквизитуМассивУзловДляПередачи(/*НаборЗаписей, МассивУзловДляПередачи, 
	ИмяРеквизита, ТипЭлемента = Неопределено, СоответствиеУзловИОрганизаций = Неопределено, ИмяБазовогоТипа = "Справочники"*/)
		{
			//МассивРазличныхЗначенийРеквизита = ПолучитьПоНаборуЗаписейРазличныеЗначенияРеквизита(НаборЗаписей, ИмяРеквизита);
			//МассивУзловДляПередачи = Новый Массив();
		}

		public object ОпределениеУзловДляВыгрузкиНабораЗаписейРегистраСведений(/*Элемент, МетаданныеРегистра, 
	ВыгружатьДляВсехУзлов = Ложь, ВозвращатьМассивВсехУзлов = Истина, СоответствиеУзловИОрганизаций = Неопределено*/)
		{
			//ВыгружатьДляВсехУзлов = Ложь;
			//МассивУзловДляПередачи = Новый Массив;
			//ТипЭлемента = ТипЗнч(Элемент);
			//МетаданныеОбъекта = Метаданные.НайтиПоТипу(ТипЭлемента);
			//НаличиеОрганизации = (МетаданныеОбъекта.Измерения.Найти("Организация") <> Неопределено);
			if(true/*НаличиеОрганизации*/)
			{
				/*ОпределитьПоНаборуиРеквизитуМассивУзловДляПередачи(Элемент, МассивУзловДляПередачи, "Организация", 
			Тип("СправочникСсылка.Организации"), СоответствиеУзловИОрганизаций);*/
			}
			return null;
		}

		public void ЗаполнитьПолучателейДляОбмена(/*Источник, МассивУзловДляРегистрацииПередЗаписью, МассивУзловДляРегистрацииПриЗаписи = Неопределено*/)
		{
			//ПроцедурыОбменаДанными.ДополнитьМассивПолучателейУзламиАвторегистрации(Источник);
			/*// для регистрации ссылки
*/
			if(true/*МассивУзловДляРегистрацииПриЗаписи <> Неопределено*/)
			{
				/*// для регистрации объекта
*/
			}
		}

		public void ПередЗаписьюСсылочногоТипаДляОбменаПоОрганизации(/*Источник, Отказ, ИмяБазовогоТипа, 
	МассивУзловДляРегистрацииСсылки = Неопределено, МассивУзловДляРегистрацииОбъекта = Неопределено*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			if(true/*Источник.ЭтоНовый()*/)
			{
				/*// элемент еще никуда не передавался
*/
				//МассивУзловДляРегистрацииСсылки = Новый Массив;
			}
			//МассивУзловДляРегистрацииОбъекта = ОпределитьМассивУзловДляРегистрацииПроизвольногоТипа(Источник, ИмяБазовогоТипа);
			//ЗаполнитьПолучателейДляОбмена(Источник, МассивУзловДляРегистрацииСсылки, МассивУзловДляРегистрацииОбъекта);
		}

		public void ПередЗаписьюНабораЗаписейДляОбменаПоОрганизации(/*Источник, Отказ, Замещение, ИмяБазовогоТипа, ТипЗначенияИсточника = Неопределено*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			if(true/*ТипЗначенияИсточника = Неопределено*/)
			{
				//ТипЗначенияИсточника = ТипЗнч(Источник);
			}
			//МетаданныеРегистра = Метаданные.НайтиПоТипу(ТипЗначенияИсточника);
			if(true/*Замещение*/)
			{
				if(true/*ИмяБазовогоТипа = "РегистрыСведений"*/)
				{
					//СтарыйНаборЗаписей = РегистрыСведений[МетаданныеРегистра.Имя].СоздатьНаборЗаписей();
				}
				//СтарыйНаборЗаписей.Прочитать();
				//МассивУзловДляРегистрацииСсылки = ОпределитьМассивУзловДляРегистрацииПроизвольногоТипа(СтарыйНаборЗаписей, ИмяБазовогоТипа,  , МетаданныеРегистра);
			}
			//МассивУзловДляРегистрацииОбъекта = ОпределитьМассивУзловДляРегистрацииПроизвольногоТипа(Источник, ИмяБазовогоТипа,  , МетаданныеРегистра);
			//ЗаполнитьПолучателейДляОбмена(Источник, МассивУзловДляРегистрацииСсылки, МассивУзловДляРегистрацииОбъекта);
		}

		public void ПередЗаписьСправочникаДляОбменаУТУПП(/*Источник, Отказ*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			//ПередЗаписьюСсылочногоТипаДляОбменаПоОрганизации(Источник, Отказ, "Справочники");
		}

		public void ПередЗаписьюДокументаДляОбменаУТУПП(/*Источник, Отказ, РежимЗаписи, РежимПроведения*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			//ПередЗаписьюСсылочногоТипаДляОбменаПоОрганизации(Источник, Отказ, "Документы");
		}

		public void ПередЗаписьюРегистраСведенийОбменУПП(/*Источник, Отказ, Замещение*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			//ТипИсточника = ТипЗнч(Источник);
			if(true/*ТипИсточника = Тип("РегистрСведенийНаборЗаписей.ОбъектыДоступаДокументов")*/)
			{
				//ДокументСсылка = Источник.Отбор.ДокументСсылка.Значение;
				if(true/*ЗначениеЗаполнено(ДокументСсылка)*/)
				{
					//МассивУзловДляРегистрацииСсылки = ОпределитьМассивУзловДляРегистрацииПроизвольногоТипа(ДокументСсылка, "Документы");
					//ЗаполнитьПолучателейДляОбмена(Источник, МассивУзловДляРегистрацииСсылки);
				}
			}
		}

		public void ПередУдалениемСправочникаДляОбменаУТУПП(/*Источник, Отказ*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			//ПередЗаписьюСсылочногоТипаДляОбменаПоОрганизации(Источник, Отказ, "Справочники");
		}

		public void ПередУдалениемДокументаДляОбменаУТУПП(/*Источник, Отказ*/)
		{
			if(true/*Отказ
		ИЛИ НЕ ПараметрыСеанса.НаличиеОбменаУТУПП*/)
			{
			}
			//ПередЗаписьюСсылочногоТипаДляОбменаПоОрганизации(Источник, Отказ, "Документы");
		}
	}
}
