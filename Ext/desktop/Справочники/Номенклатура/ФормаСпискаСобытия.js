﻿Ext.define('Справочники.Номенклатура.ФормаСпискаСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var хранилище = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код','Наименование','Родитель','Родитель.Ссылка','Родитель.Представление','Артикул','НаименованиеПолное','Весовой','ВесовойКоэффициентВхождения','ВестиОперативныйУчетОстатковНЗП','ВестиПартионныйУчетПоСериям','ВестиУчетПоСериям','ВестиУчетПоСериямВНЗП','ВестиУчетПоХарактеристикам','ВидВоспроизводства','ВидВоспроизводства.Ссылка','ВидВоспроизводства.Представление','ВидНоменклатуры','ВидНоменклатуры.Ссылка','ВидНоменклатуры.Представление','ЕдиницаДляОтчетов','ЕдиницаДляОтчетов.Ссылка','ЕдиницаДляОтчетов.Представление','ЕдиницаХраненияОстатков','ЕдиницаХраненияОстатков.Ссылка','ЕдиницаХраненияОстатков.Представление','БазоваяЕдиницаИзмерения','БазоваяЕдиницаИзмерения.Ссылка','БазоваяЕдиницаИзмерения.Представление','Набор','НазначениеИспользования','НазначениеИспользования.Ссылка','НазначениеИспользования.Представление','СтавкаНДС','СтавкаНДС.Ссылка','СтавкаНДС.Представление','Комментарий','НоменклатурнаяГруппаЗатрат','НоменклатурнаяГруппаЗатрат.Ссылка','НоменклатурнаяГруппаЗатрат.Представление','Услуга','ОсновноеИзображение','ОсновноеИзображение.Ссылка','ОсновноеИзображение.Представление','ОсновнойПоставщик','ОсновнойПоставщик.Ссылка','ОсновнойПоставщик.Представление','ОтветственныйМенеджерЗаПокупки','ОтветственныйМенеджерЗаПокупки.Ссылка','ОтветственныйМенеджерЗаПокупки.Представление','НоменклатурнаяГруппа','НоменклатурнаяГруппа.Ссылка','НоменклатурнаяГруппа.Представление','СтранаПроисхождения','СтранаПроисхождения.Ссылка','СтранаПроисхождения.Представление','НомерГТД','НомерГТД.Ссылка','НомерГТД.Представление','ТребуетсяВнешняяСертификация','ТребуетсяВнутренняяСертификация','СтатьяЗатрат','СтатьяЗатрат.Ссылка','СтатьяЗатрат.Представление','ВестиСерийныеНомера','Комплект','НаправлениеВыпуска','НаправлениеВыпуска.Ссылка','НаправлениеВыпуска.Представление','НаправлениеСписанияВыпущеннойПродукции','НаправлениеСписанияВыпущеннойПродукции.Ссылка','НаправлениеСписанияВыпущеннойПродукции.Представление','ПорядокПрисвоенияСерийногоНомера','ПорядокПрисвоенияСерийногоНомера.Ссылка','ПорядокПрисвоенияСерийногоНомера.Представление','ЦеноваяГруппа','ЦеноваяГруппа.Ссылка','ЦеноваяГруппа.Представление','ОКП','ОКП.Ссылка','ОКП.Представление','ЕдиницаИзмеренияМест','ЕдиницаИзмеренияМест.Ссылка','ЕдиницаИзмеренияМест.Представление','ДополнительноеОписаниеНоменклатуры','Производитель','Производитель.Ссылка','Производитель.Представление','Импортер','Импортер.Ссылка','Импортер.Представление',],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/Номенклатура/НайтиПоСсылке/' + ссылка, timeout:200}),
		});
		хранилище.load(
		{
			callback: function (records, operation, success)
			{
				Ext.require(['Справочники.Номенклатура.ФормаЭлемента'], function ()
				{
					var количество = хранилище.getCount();
					if (количество == 0)
					{
						var массивЗначений = строкаЗначений;
					}
					else
					{
						var массивЗначений = хранилище.data.items[0].data;
					};
					var окно = Ext.create('Справочники.Номенклатура.ФормаЭлемента',
					{
						Хранилище: массивЗначений.Родитель,
					});
					var форма = окно.down('form');
					форма.getForm().setValues(массивЗначений);
					if (окно)
					{
						окно.show();
						return окно;
					}
				});
			},
			scope: this
		});
	}
});