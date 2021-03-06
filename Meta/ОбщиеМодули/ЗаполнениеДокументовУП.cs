﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class ЗаполнениеДокументовУП
	{
		// Функция определяет возможность отразить документ в бух. учете

		public object МожноОтражатьВБухгалтерскомУчете(/*Организация, Дата, СообщениеОбОшибке = ""*/)
		{
			if(true/*НЕ ЗначениеЗаполнено(Организация)*/)
			{
				//СообщениеОбОшибке = Нстр("ru = 'Не указана организация'");
			}
			if(true/*НЕ Организация.ОтражатьВРегламентированномУчете*/)
			{
				//СообщениеОбОшибке = Нстр("ru = 'Не ведется регламентированный учет по организации ""%Организация""'");
				//СообщениеОбОшибке = СтрЗаменить(СообщениеОбОшибке, "%Организация", "" + Организация);
			}
			return null;
		}
		// Контроль и заполнение признаков отражения в учете для управляемого режима

		public void ПередЗаписьюУправлениеОтражениемВУчете(/*Источник, Отказ, РежимЗаписи, РежимПроведения*/)
		{
			if(true/*ТекущийРежимЗапуска() = РежимЗапускаКлиентскогоПриложения.УправляемоеПриложение*/)
			{
				//СообщениеОбОшибкеБУ = "";
				//СообщениеОбОшибкеНУ = "";
				//ОтражатьВБухгалтерскомУчете = МожноОтражатьВБухгалтерскомУчете(Источник.Организация, Источник.Дата, СообщениеОбОшибкеБУ);
				//ОтражатьВНалоговомУчете     = ОтражатьВБухгалтерскомУчете;
				if(true/*РольДоступна("ОтражениеВРегламентированномУчете")
		  ИЛИ РольДоступна("ПолныеПрава")*/)
				{
					/*//Для ответственных за отражение в учете сообщим об ошибках
*/
					if(true/*Источник.ОтражатьВБухгалтерскомУчете И НЕ ОтражатьВБухгалтерскомУчете*/)
					{
						//ОбщегоНазначения.СообщитьОбОшибке(Нстр("ru = 'Не удалось отразить документ в бухгалтерском учете.'") + Символы.ПС + СообщениеОбОшибкеБУ,Отказ);
					}
				}
			}
		}
	}
}
