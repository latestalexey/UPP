﻿Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаДанныхНДФЛСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var хранилище = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код','Наименование','Родитель','Родитель.Ссылка','Родитель.Представление','Физлицо','Физлицо.Ссылка','Физлицо.Представление','Актуальность','Организация','Организация.Ссылка','Организация.Представление','ОбособленноеПодразделение','ОбособленноеПодразделение.Ссылка','ОбособленноеПодразделение.Представление','ВидДоговора','ВидДоговора.Ссылка','ВидДоговора.Представление','ВидЗанятости','ВидЗанятости.Ссылка','ВидЗанятости.Представление','НомерДоговора','ДатаДоговора','ГрафикРаботы','ГрафикРаботы.Ссылка','ГрафикРаботы.Представление','ПодразделениеОрганизации','ПодразделениеОрганизации.Ссылка','ПодразделениеОрганизации.Представление','Должность','Должность.Ссылка','Должность.Представление','ЗанимаемыхСтавок','ДатаНачала','ДатаОкончания','ИспытательныйСрок','ВидРасчета','ВидРасчета.Ссылка','ВидРасчета.Представление','ТарифнаяСтавка','ВалютаТарифнойСтавки','ВалютаТарифнойСтавки.Ссылка','ВалютаТарифнойСтавки.Представление','ПостфиксНаименования','ТарифныйРазряд','ТарифныйРазряд.Ссылка','ТарифныйРазряд.Представление','ТекущееОбособленноеПодразделение','ТекущееОбособленноеПодразделение.Ссылка','ТекущееОбособленноеПодразделение.Представление','ТекущееПодразделениеОрганизации','ТекущееПодразделениеОрганизации.Ссылка','ТекущееПодразделениеОрганизации.Представление','ТекущаяДолжностьОрганизации','ТекущаяДолжностьОрганизации.Ссылка','ТекущаяДолжностьОрганизации.Представление','ДатаПриемаНаРаботу','ДатаУвольнения','ТекущееПодразделениеКомпании','ТекущееПодразделениеКомпании.Ссылка','ТекущееПодразделениеКомпании.Представление','ТекущаяДолжностьКомпании','ТекущаяДолжностьКомпании.Ссылка','ТекущаяДолжностьКомпании.Представление','ДатаПриемаНаРаботуВКомпанию','ДатаУвольненияИзКомпании','ЯвляетсяСтудентомРаботающимВСтудотряде',],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/СотрудникиОрганизаций/НайтиПоСсылке/' + ссылка, timeout:200}),
		});
		хранилище.load(
		{
			callback: function (records, operation, success)
			{
				Ext.require(['Справочники.СотрудникиОрганизаций.ФормаЭлемента'], function ()
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
					var окно = Ext.create('Справочники.СотрудникиОрганизаций.ФормаЭлемента',
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