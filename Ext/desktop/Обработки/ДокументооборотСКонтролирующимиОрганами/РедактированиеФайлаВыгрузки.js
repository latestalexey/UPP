﻿Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РедактированиеФайлаВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:701px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Редактирование файла выгрузки',
	
	items:
	[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Текст',
			style: 'position:absolute;left:8px;top:38px;width:685px;height:382px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяФайла',
			text: 'Имя файла:',
			style: 'position:absolute;left:8px;top:11px;width:65px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайла',
			style: 'position:absolute;left:77px;top:10px;width:616px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:33px;width:685px;height:3px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:701px;height:25px;',
			dock: 'bottom',
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
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});