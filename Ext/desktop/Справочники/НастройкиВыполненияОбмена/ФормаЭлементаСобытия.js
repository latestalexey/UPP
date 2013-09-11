﻿Ext.define('Справочники.НастройкиВыполненияОбмена.ФормаЭлементаСобытия',
{
	ПередатьСсылку: function (строкаЗначений)
	{
		var ссылка = строкаЗначений.Ссылка;
		var хранилище = Ext.create('Ext.data.Store',
		{
			autoLoad: true,
			fields: ['Код','Наименование','ВыполнятьДействияПодПолнымиПравами','ИспользоватьРегламентныеЗадания','ДинамическиИзменятьИнтервалМеждуОбменами','Ответственный','Ответственный.Ссылка','Ответственный.Представление','КаждыйЗапускПрограммы','КаждоеЗавершениеРаботыСПрограммой','КаталогПроверкиДоступности','ВыполнятьОбменПриПоявленииФайла','КоличествоЭлементовВТранзакцииНаВыгрузкуДанных','КоличествоЭлементовВТранзакцииНаЗагрузкуДанных','УчетнаяЗаписьОтправкиСообщенияОбОшибке','УчетнаяЗаписьОтправкиСообщенияОбОшибке.Ссылка','УчетнаяЗаписьОтправкиСообщенияОбОшибке.Представление','АдресДляОтправкиСообщенийОбОшибке','Комментарий','РегламентноеЗадание',],
			proxy: new Ext.data.ScriptTagProxy({ url: 'https://as-msk-n7077:1337/Справочники/НастройкиВыполненияОбмена/НайтиПоСсылке/' + ссылка, timeout:200}),
		});
		хранилище.load(
		{
			callback: function (records, operation, success)
			{
				Ext.require(['Справочники.НастройкиВыполненияОбмена.ФормаЭлемента'], function ()
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
					var окно = Ext.create('Справочники.НастройкиВыполненияОбмена.ФормаЭлемента',
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