﻿Ext.define('Справочники.ВидыОплатЧекаККМ.ФормаВыбораСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var хранилище = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код','Наименование','Родитель','Родитель.Ссылка','Родитель.Представление','ТипОплаты','ТипОплаты.Ссылка','ТипОплаты.Представление','БанкКредитор','БанкКредитор.Ссылка','БанкКредитор.Представление','ДоговорВзаиморасчетовБанкаКредитора','ДоговорВзаиморасчетовБанкаКредитора.Ссылка','ДоговорВзаиморасчетовБанкаКредитора.Представление','ПроцентБанковскойКомиссии',],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/ВидыОплатЧекаККМ/НайтиПоСсылке/' + ссылка, timeout:200}),
		});
		хранилище.load(
		{
			callback: function (records, operation, success)
			{
				Ext.require(['Справочники.ВидыОплатЧекаККМ.ФормаЭлемента'], function ()
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
					var окно = Ext.create('Справочники.ВидыОплатЧекаККМ.ФормаЭлемента',
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