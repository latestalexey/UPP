﻿Ext.define('Отчеты.АнализСтадийВзаимоотношенийСПокупателями.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:659px;height:427px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ стадий взаимоотношений с покупателями',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата отчета:',
			style: 'position:absolute;left:8px;top:33px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаОтчета',
			style: 'position:absolute;left:78px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:642px;height:72px;',
			height: 72,width: 642,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиКонтрагент',
			style: 'position:absolute;left:396px;top:0px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:232px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСКонтрагент',
			style: 'position:absolute;left:396px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоКонтрагент',
			style: 'position:absolute;left:522px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:234px;top:0px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСтадияПокупателя',
			style: 'position:absolute;left:396px;top:24px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Стадия взаимоотношений с покупателем:',
			style: 'position:absolute;left:0px;top:24px;width:232px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиССтадияПокупателя',
			style: 'position:absolute;left:396px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоСтадияПокупателя',
			style: 'position:absolute;left:522px;top:24px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:234px;top:24px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиКлассПостоянногоПокупателя',
			style: 'position:absolute;left:396px;top:48px;width:246px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'XYZ-класс постоянного покупателя:',
			style: 'position:absolute;left:0px;top:48px;width:232px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСКлассПостоянногоПокупателя',
			style: 'position:absolute;left:396px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиПоКлассПостоянногоПокупателя',
			style: 'position:absolute;left:522px;top:48px;width:120px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:234px;top:48px;width:160px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:659px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});