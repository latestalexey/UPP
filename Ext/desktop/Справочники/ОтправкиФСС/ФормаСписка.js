﻿Ext.require(['Данные.Справочники.ОтправкиФСС'], function () 
{
	Ext.define('Справочники.ОтправкиФСС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отправки в ФСС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата отправки',
					width:'124',
					dataIndex:'ДатаОтправки',
					flex:1,
				},
				{
					text:'Статус отправки',
					width:'100',
					dataIndex:'СтатусОтправки.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ОтправкиФСС").data,
					fields: ['Ссылка','Картинка','ДатаОтправки','СтатусОтправки.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтправкиФСС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ДатаОтправки',
					},
					{
						name:'СтатусОтправки',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтправкиФСС.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтправкиФСС.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			width: 400,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
					tooltip:'',
				},
				'-',
				{
					text:'(История отборов)',
					tooltip:'',
					iconCls:'x-FilterHistory',
				},
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
					tooltip:'',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
					tooltip:'Вывести список',
					iconCls:'x-OutputList',
				},
				{
					text:'Настройка списка...',
					tooltip:'Настройка списка',
					iconCls:'x-ListSettings',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
					]
				},
				'-',
				{
					text:'Установить пометку удаления',
					tooltip:'Установить пометку удаления',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
					tooltip:'Отбор и сортировка',
				},
				{
					text:'Отбор по значению в текущей колонке',
					tooltip:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
					tooltip:'Отключить отбор',
					iconCls:'x-ClearFilter',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});