﻿Ext.require(['Данные.Документы.ВосстановлениеНДС'], function () 
{
	Ext.define('Документы.ВосстановлениеНДС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	id: 'ФормаСписка',
	style: 'position:absolute;width:507px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Восстановления НДС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		ПервоеОткрытие: true,
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:491px;height:380px;',
			Привязка:
			{
				Горизонтальная: false,
				Вертикальная: false,
				ОбъектПривязки: 
				{
					Правая: { Элемент: 'Форма', Граница: 'Правая', Номер: 0, Координата: 0},
					Левая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: 'Форма', Граница: 'Нижняя', Номер: 0, Координата: 0},
				},
				ОбъектПропорций: 
				{
					Правая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Левая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
				},
			},
			Высота:380,
			Ширина:491,
			Верх:33,
			Лево:8,
			height: 380,width: 491,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'В книгу продаж',
					width:'84',
					dataIndex:'ОтразитьВКнигеПродаж',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВосстановлениеНДС/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ОтразитьВКнигеПродаж',
					},
					{
						name:'Организация',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ВосстановлениеНДС.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВосстановлениеНДС.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			id: 'ДействияФормы',
			style: 'position:absolute;left:0px;top:0px;width:507px;height:25px;',
			Привязка:
			{
				Горизонтальная: false,
				Вертикальная: false,
				ОбъектПривязки: 
				{
					Правая: { Элемент: 'Форма', Граница: 'Правая', Номер: 0, Координата: 0},
					Левая: { Элемент: 'Форма', Граница: 'Левая', Номер: 0, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: 'ДействияФормы', Граница: 'Верхняя', Номер: 2, Координата: 0},
				},
				ОбъектПропорций: 
				{
					Правая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Левая: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
				},
			},
			Высота:25,
			Ширина:507,
			Верх:0,
			Лево:0,
			width: 507,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					id:'Подменю2',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
				{
					id:'ПроводкиДтКт',
					text:'Дт/кт',
					tooltip:'Проводки БУ',
				},
			]
		},
		],
	}],
	dockedItems:
	[
	],
	listeners:
	{
		resize:
		{
			fn: function (win, width, height, opt)
			{
				var форма = win.down('form');
				if (!форма.ПервоеОткрытие)
				{
					форма.items.each(function (item)
					{
						//ПривязкаГраниц(item, item.ПозицияЭлемента);
						if (item.Групповой)
						{
							var элемент = Ext.getCmp(item.id).items.items[0].items.items;
							for (var i = 0; i < элемент.length; i++ ) 
							{
								var текЭлемент = элемент[i];
								//ПривязкаГраниц(текЭлемент, текЭлемент.ПозицияЭлемента);
							}
						}
					});
				}
				форма.ПервоеОткрытие = false;
			}
		}
	}
	});
});