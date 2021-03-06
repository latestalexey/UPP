﻿Ext.define('Справочники.ТиповыеАнкеты.ФормаЭлементаСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var хранилище = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код','Наименование','Родитель','Родитель.Ссылка','Родитель.Представление','ЗагружатьОбъекты','МакетАнкеты','ВидСправочникаДляЗагрузки','ВидСправочникаДляЗагрузки.Ссылка','ВидСправочникаДляЗагрузки.Представление','Адресная','НаименованиеАнкеты','Вступление','ЗаполнятьАнкетуДанными','ВидАнкеты','ВидАнкеты.Ссылка','ВидАнкеты.Представление','СекундОтвета',],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/ТиповыеАнкеты/НайтиПоСсылке/' + ссылка, timeout:200}),
		});
		хранилище.load(
		{
			callback: function (records, operation, success)
			{
				Ext.require(['Справочники.ТиповыеАнкеты.ФормаЭлемента'], function ()
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
					var окно = Ext.create('Справочники.ТиповыеАнкеты.ФормаЭлемента',
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