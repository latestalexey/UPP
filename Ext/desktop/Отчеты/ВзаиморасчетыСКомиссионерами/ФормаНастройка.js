﻿Ext.require(['Данные.Отчеты.ВзаиморасчетыСКомиссионерами'], function () 
{
	Ext.define('Отчеты.ВзаиморасчетыСКомиссионерами.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:399px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:6px;width:604px;height:360px;',
			height: 360,width: 604,
			items:
			[
				{
					items:
					[
		{
			id: 'Группировки',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:73px;width:336px;height:261px;',
			height: 261,width: 336,
			columns:
			[
				{
					text:'Группировка',
					width:'158',
					dataIndex:'ПредставлениеГруппировки',
					flex:1,
				},
				{
					text:'Тип итога',
					width:'59',
					dataIndex:'ТипИтога',
					flex:1,
				},
				{
					text:'Дополнительные поля',
					width:'147',
					dataIndex:'ДополнительныеПоля',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВзаиморасчетыСКомиссионерами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ПредставлениеГруппировки',
					},
					{
						name:'ТипИтога',
					},
					{
						name:'ДополнительныеПоля',
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
						var грид = Ext.getCmp('Группировки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВзаиморасчетыСКомиссионерами.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВзаиморасчетыСКомиссионерами.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:49px;width:336px;height:24px;',
			width: 336,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				{
					text:'Из списка',
					tooltip:'Выбор группировки из списка',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Группировки строк',
			style: 'position:absolute;left:6px;top:33px;width:336px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 80,
			height: 19,
			style: 'position:absolute;left:65px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:150px;top:6px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКонца',
			width: 80,
			height: 19,
			style: 'position:absolute;left:171px;top:6px;width:80px;height:19px;',
		},
		{
			id: 'Показатели',
			xtype: 'grid',
			style: 'position:absolute;left:346px;top:73px;width:250px;height:261px;',
			height: 261,width: 250,
			columns:
			[
				{
					text:'',
					width:'23',
					dataIndex:'ИспользованиеПоказателя',
					flex:1,
				},
				{
					text:'Показатель',
					width:'176',
					dataIndex:'ПредставлениеПоказателя',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВзаиморасчетыСКомиссионерами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИспользованиеПоказателя',
					},
					{
						name:'ПредставлениеПоказателя',
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
						Ext.require(['Справочники.ВзаиморасчетыСКомиссионерами.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВзаиморасчетыСКомиссионерами.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:346px;top:49px;width:250px;height:24px;',
			width: 250,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
				'-',
				{
					text:'Установить флажки',
					tooltip:'Установить флажки',
				},
				{
					text:'Снять флажки',
					tooltip:'Снять флажки',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Показатели',
			style: 'position:absolute;left:346px;top:33px;width:250px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Раскрашивать группировки',
			style: 'position:absolute;left:434px;top:9px;width:162px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Только просроченные',
			style: 'position:absolute;left:282px;top:9px;width:134px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:254px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:386px;height:24px;',
			width: 386,
			height: 24,
			items:
			[
				{
					text:'&Добавить',
					tooltip:'Добавить',
					iconCls:'x-add',
				},
				{
					text:'&Удалить',
					tooltip:'Удалить текущий',
				},
				{
					text:'&Переместить вверх',
					tooltip:'',
				},
				{
					text:'&Переместить вниз',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:396px;top:30px;width:200px;height:304px;',
		},
		{
			id: 'Отбор',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:386px;height:304px;',
			height: 304,width: 386,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'103',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'76',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'162',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВзаиморасчетыСКомиссионерами/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'ВидСравнения',
					},
					{
						name:'Значение',
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
						Ext.require(['Справочники.ВзаиморасчетыСКомиссионерами.ФормаНастройкаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВзаиморасчетыСКомиссионерами.ФормаНастройкаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:374px;width:620px;height:25px;',
			width: 620,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'Кнопка ОК',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});