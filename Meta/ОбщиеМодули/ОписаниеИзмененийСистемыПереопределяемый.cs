﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace V82.ОбщиеМодули
{
	public partial class ОписаниеИзмененийСистемыПереопределяемый
	{

		public object ПараметрыМакетаОписаниеОбновлений(/**/)
		{
			//Параметры = Новый Структура;
			return null;
		}
		// ПараметрыМакетаОписаниеОбновлений()
		// Вызывается при подготовке табличного документа с описанием изменений системы.
		//
		// Параметры:
		//   Макет - ТабличныйДокумент - описание обновлений.
		//
		// См. также общий макет ОписаниеИзмененийСистемы.
		//

		public void ПриПодготовкеМакетаОписанияОбновлений(/*Знач Макет*/)
		{
			/*// УПП
*/
			//Макет.Параметры.Заполнить(БиблиотекаОбновленияИнформационнойБазыКлиент.ПараметрыМакетаОписаниеОбновлений());
			/*// ЗУП
*/
			//Макет.Параметры.Заполнить(ПроцедурыОбновленияИнформационнойБазыПереопределяемый.ПараметрыМакетаОписаниеОбновлений());
			/*// Эта конфигурация
*/
			//Макет.Параметры.Заполнить(ПараметрыМакетаОписаниеОбновлений());
		}
		// ПриПодготовкеМакетаОписанияОбновлений()
	}
}
