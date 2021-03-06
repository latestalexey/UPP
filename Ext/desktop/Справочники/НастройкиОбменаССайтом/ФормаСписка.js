﻿Ext.require(['Данные.Справочники.НастройкиОбменаССайтом'], function () 
{
	Ext.define('Справочники.НастройкиОбменаССайтом.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	id: 'ФормаСписка',
	style: 'position:absolute;width:724px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Настройки обмена с WEB - сайтом',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		ПервоеОткрытие: true,
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:708px;height:259px;',
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
			Высота:259,
			Ширина:708,
			Верх:33,
			Лево:8,
			height: 259,width: 708,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'181',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Загрузка',
					width:'110',
					dataIndex:'ЗагрузкаДанных',
					flex:1,
				},
				{
					text:'Выгрузка',
					width:'100',
					dataIndex:'ВыгрузкаДанных',
					flex:1,
				},
				{
					text:'Папка/URL для обмена',
					width:'250',
					dataIndex:'АдресДляОбмена',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Сайт',
					width:'200',
					dataIndex:'HTTPОбменАдресСайта',
					flex:1,
				},
				{
					text:'Каталог выгрузки',
					width:'200',
					dataIndex:'КаталогВыгрузки',
					flex:1,
				},
				{
					text:'Выгружать на сайт',
					width:'70',
					dataIndex:'ВыгружатьНаСайт',
					flex:1,
				},
				{
					text:'Узел обмена товарами',
					width:'100',
					dataIndex:'УзелОбменаТоварами.Представление',
					flex:1,
				},
				{
					text:'Узел обмена заказами',
					width:'100',
					dataIndex:'УзелОбменаЗаказами.Представление',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиОбменаССайтом").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ЗагрузкаДанных','ВыгрузкаДанных','АдресДляОбмена','Комментарий','HTTPОбменАдресСайта','КаталогВыгрузки','ВыгружатьНаСайт','УзелОбменаТоварами.Представление','УзелОбменаЗаказами.Представление',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиОбменаССайтом/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ЗагрузкаДанных',
					},
					{
						name:'ВыгрузкаДанных',
					},
					{
						name:'АдресДляОбмена',
					},
					{
						name:'Комментарий',
					},
					{
						name:'HTTPОбменАдресСайта',
					},
					{
						name:'КаталогВыгрузки',
					},
					{
						name:'ВыгружатьНаСайт',
					},
					{
						name:'УзелОбменаТоварами',
					},
					{
						name:'УзелОбменаЗаказами',
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
						Ext.require(['Справочники.НастройкиОбменаССайтом.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиОбменаССайтом.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			id: 'ДействияФормы',
			style: 'position:absolute;left:0px;top:0px;width:724px;height:25px;',
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
			Ширина:724,
			Верх:0,
			Лево:0,
			width: 724,
			height: 25,
			items:
			[
				{
					id:'',
					text:'',
					tooltip:'Добавить',
					iconCls:'x-copy',
				},
				{
					id:'',
					text:'',
					tooltip:'Новая группа',
					iconCls:'x-CreateFolder',
				},
				{
					id:'',
					text:'',
					tooltip:'Скопировать',
					iconCls:'x-copy',
				},
				{
					id:'',
					text:'',
					tooltip:'Изменить',
					iconCls:'x-Change',
				},
				{
					id:'',
					text:'',
					tooltip:'Установить пометку удаления',
					iconCls:'x-Delete',
				},
				{
					xtype: 'splitbutton',
					id:'Подменю',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Монитор обменов',
					tooltip:'Открыть монитор обменов',
				},
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен',
				},
					]
				},
				'-',
				{
					id:'ПомощникНастройкиОбмена',
					text:'Помощник настройки',
					tooltip:'Помощник настройки',
				},
				{
					id:'ОткрытьМониторОбменов',
					text:'Монитор обменов',
					tooltip:'Открыть монитор обменов',
				},
				'-',
				{
					xtype: 'splitbutton',
					id:'Подменю',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Монитор обменов',
					tooltip:'Открыть монитор обменов',
				},
				{
					text:'Выполнить обмен',
					tooltip:'Выполнить обмен',
				},
					]
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