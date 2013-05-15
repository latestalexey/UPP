﻿Ext.define('Обработки.МенеджерКонтактов.ФормаОтборов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:562px;height:277px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отбор',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:8px;top:32px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияКонтрагент',
			style: 'position:absolute;left:126px;top:32px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораКонтрагент',
			style: 'position:absolute;left:308px;top:32px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ВидСравненияПользователь',
			style: 'position:absolute;left:126px;top:81px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ЗначениеОтбораПользователь',
			style: 'position:absolute;left:308px;top:81px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Важность:',
			style: 'position:absolute;left:8px;top:105px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияВажность',
			style: 'position:absolute;left:126px;top:105px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораВажность',
			style: 'position:absolute;left:308px;top:105px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Тип (вход., исход.):',
			style: 'position:absolute;left:8px;top:129px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияТип',
			style: 'position:absolute;left:126px;top:129px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораТип',
			style: 'position:absolute;left:308px;top:129px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата:',
			style: 'position:absolute;left:8px;top:8px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияДата',
			style: 'position:absolute;left:126px;top:8px;width:180px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеОтбораДата',
			style: 'position:absolute;left:308px;top:8px;width:246px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеОтбораДатаНач',
			style: 'position:absolute;left:308px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеОтбораДатаКон',
			style: 'position:absolute;left:434px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номер:',
			style: 'position:absolute;left:8px;top:177px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияНомер',
			style: 'position:absolute;left:126px;top:177px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораНомер',
			style: 'position:absolute;left:308px;top:177px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид документа:',
			style: 'position:absolute;left:8px;top:153px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияТипДокумента',
			style: 'position:absolute;left:126px;top:153px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораТипДокумента',
			style: 'position:absolute;left:308px;top:153px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вид операции:',
			style: 'position:absolute;left:8px;top:201px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияВидОперации',
			style: 'position:absolute;left:126px;top:201px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораВидОперации',
			style: 'position:absolute;left:308px;top:201px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дата события:',
			style: 'position:absolute;left:8px;top:225px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияДатаСобытия',
			style: 'position:absolute;left:126px;top:225px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораДатаСобытия',
			style: 'position:absolute;left:308px;top:225px;width:246px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеОтбораДатаСобытияНач',
			style: 'position:absolute;left:308px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ЗначениеОтбораДатаСобытияКон',
			style: 'position:absolute;left:434px;top:225px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:252px;width:562px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контактное лицо:',
			style: 'position:absolute;left:8px;top:57px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСравненияКонтактноеЛицо',
			style: 'position:absolute;left:126px;top:57px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ЗначениеОтбораКонтактноеЛицо',
			style: 'position:absolute;left:308px;top:57px;width:246px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});