﻿Ext.require(['Данные.Отчеты.РапортРуководителю'], function () 
{
	Ext.define('Отчеты.РапортРуководителю.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	id: 'ФормаГлавная',
	style: 'position:absolute;width:656px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Рапорт руководителю',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		ПервоеОткрытие: true,
		items:
		[
		{
			xtype: 'toolbar',
			id: 'КоманднаяПанель',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			Привязка:
			{
				Горизонтальная: false,
				Вертикальная: false,
				ОбъектПривязки: 
				{
					Правая: { Элемент: 'Форма', Граница: 'Правая', Номер: 0, Координата: 0},
					Левая: { Элемент: 'Форма', Граница: 'Левая', Номер: 0, Координата: 0},
					Верхняя: { Элемент: '', Граница: 'Пустая', Номер: -1, Координата: 0},
					Нижняя: { Элемент: 'КоманднаяПанель', Граница: 'Верхняя', Номер: 2, Координата: 0},
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
			Ширина:656,
			Верх:0,
			Лево:0,
			width: 656,
			height: 25,
			items:
			[
				'-',
				{
					id:'Сформировать',
					text:'Сформировать',
					tooltip:'Обновить данные рапорта',
				},
				'-',
				{
					id:'Опубликовать',
					text:'Опубликовать',
					tooltip:'Рассылка рапорта адресатам по электронной почте и сохранение в файле (если установлены соответствующие опции настройки)',
				},
				'-',
				{
					id:'Настройка',
					text:'Настройка',
					tooltip:'Настройка',
				},
				'-',
				{
					id:'Справка',
					text:'Справка',
					tooltip:'Открыть справку',
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