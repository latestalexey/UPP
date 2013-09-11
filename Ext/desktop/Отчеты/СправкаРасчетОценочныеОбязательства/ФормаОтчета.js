﻿Ext.require(['Данные.Отчеты.СправкаРасчетОценочныеОбязательства'], function () 
{
	Ext.define('Отчеты.СправкаРасчетОценочныеОбязательства.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:838px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Шаблон типового отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:525px;top:134px;width:306px;height:398px;',
			height: 398,width: 306,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:306px;height:372px;',
			height: 372,width: 306,
			items:
			[
				{
					items:
					[
		{
			id: 'ПараметрыДанных',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:74px;',
			height: 74,width: 292,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Параметр',
					width:'100',
					dataIndex:'Параметр',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Параметр',
					width:'100',
					dataIndex:'ПараметрСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'50',
					dataIndex:'ЗначениеСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'50',
					dataIndex:'ДатаЗначениеСДатой',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаРасчетОценочныеОбязательства/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Параметр',
					},
					{
						name:'Значение',
					},
					{
						name:'ПараметрСДатой',
					},
					{
						name:'ЗначениеСДатой',
					},
					{
						name:'ДатаЗначениеСДатой',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ПараметрыДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:119px;',
			height: 119,width: 292,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'43',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Поле',
					width:'42',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'21',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'56',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'119',
					dataIndex:'ТипДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'119',
					dataIndex:'ТипДляКраткогоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Значение',
					width:'43',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'35',
					dataIndex:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'40',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'34',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Значение',
					width:'41',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'32',
					dataIndex:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'119',
					dataIndex:'ТипДляПодробногоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'32',
					dataIndex:'ПрименениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'119',
					dataIndex:'ТипДляКраткогоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'32',
					dataIndex:'ПрименениеДляКраткогоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Значение',
					width:'43',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Режим отображения',
					width:'32',
					dataIndex:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'119',
					dataIndex:'ТипДляПодробногоОтображенияГруппыГлавногоОтбора',
					flex:1,
				},
				{
					text:'Режим отображения',
					width:'32',
					dataIndex:'РежимОтображенияДляПодробногоОтображенияГруппыГлавногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппыГлавногоОтбора',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'21',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'21',
					dataIndex:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'21',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'21',
					dataIndex:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'21',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'21',
					dataIndex:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Применение',
					width:'32',
					dataIndex:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'21',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'21',
					dataIndex:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Применение',
					width:'32',
					dataIndex:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'43',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'32',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'21',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'21',
					dataIndex:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Режим отображения',
					width:'32',
					dataIndex:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Представление',
					width:'43',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаРасчетОценочныеОбязательства/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппы',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппы',
					},
					{
						name:'ТипДляКраткогоОтображенияГруппы',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ТипДляКраткогоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляКраткогоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппыГлавногоОтбора',
					},
					{
						name:'РежимОтображенияДляПодробногоОтображенияГруппыГлавногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппыГлавногоОтбора',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Отбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:136px;',
			height: 136,width: 292,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Поле',
					width:'248',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаРасчетОценочныеОбязательства/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Представление',
					},
					{
						name:'Поле',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Показатели');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
				{
					items:
					[
		{
			id: 'Сортировка',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:253px;height:83px;',
			height: 83,width: 253,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле сортировки',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'100',
					dataIndex:'ТипУпорядочивания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СправкаРасчетОценочныеОбязательства/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'Поле',
					},
					{
						name:'ТипУпорядочивания',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Сортировка');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СправкаРасчетОценочныеОбязательства.ФормаОтчетаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:269px;top:22px;width:24px;height:52px;',
			width: 24,
			height: 52,
			items:
			[
				{
					text:'',
					tooltip:'',
				},
				{
					text:'',
					tooltip:'',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВыполняетсяПерерисовкаПанели',
			text: 'Выполняется перерисовка панели...',
			style: 'position:absolute;left:0px;top:42px;width:306px;height:36px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:306px;height:26px;',
			width: 306,
			height: 26,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Показать сформированный отчет в отдельном окне',
					tooltip:'Показать сформированный отчет в отдельном окне',
				},
				'-',
				{
					text:'Сохранить сформированный отчет для сравнения',
					tooltip:'Сохранить сформированный отчет для сравнения',
				},
				{
					text:'Сравнить сформированный отчет с сохраненным',
					tooltip:'Сравнить сформированный отчет с сохраненным',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:838px;height:57px;',
			height: 57,width: 838,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:101px;top:0px;width:220px;height:25px;',
			width: 220,
			height: 25,
			items:
			[
				{
					text:'Настройка структуры',
					tooltip:'Редактировать структуру отчета',
				},
				{
					text:'Панель пользователя',
					tooltip:'Редактировать параметры панели настроек',
				},
				{
					text:'Описание и Пользователи',
					tooltip:'Описание и Пользователи варианта отчета',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:86px;top:0px;width:2px;height:56px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'Сформировать',
			text: 'Сформировать',
			style: 'position:absolute;left:6px;top:98px;width:124px;height:30px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:9px;top:63px;width:821px;height:31px;',
			height: 31,width: 821,
			tabBar:{hidden:true},
			items:
			[
				{
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:136px;top:101px;width:120px;height:24px;',
			width: 120,
			height: 24,
			items:
			[
				{
					text:'Печать',
					tooltip:'Печать сформированного отчета сразу',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:658px;top:101px;width:173px;height:24px;',
			width: 173,
			height: 24,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
					tooltip:'Отображение панели вариантов',
				},
				{
					text:'Настройки',
					tooltip:'Отображение панели настроек',
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});