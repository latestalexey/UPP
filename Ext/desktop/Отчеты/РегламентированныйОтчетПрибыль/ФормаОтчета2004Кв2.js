﻿Ext.define('Отчеты.РегламентированныйОтчетПрибыль.ФормаОтчета2004Кв2',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прибыль',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:122px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Титульный',
				},
				{
					title:'Физ. лица',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуФизЛица',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:251px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:355px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1.1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:342px;top:265px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:343px;top:265px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Дополнительные листы раздела В:',
			style: 'position:absolute;left:78px;top:265px;width:186px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Раздел 1.2',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:104px;top:265px;width:144px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:101px;top:265px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дополнительные страницы:',
			style: 'position:absolute;left:116px;top:265px;width:148px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Раздел 1.3',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1_4',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницЛист03_РазделыБВ',
			text: '999 из 999',
			style: 'position:absolute;left:289px;top:265px;width:64px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1_3',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1_3',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1_3',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1_3',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1_3',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Раздел 1.4',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницЛист02_Прил5а',
			text: '999 из 999',
			style: 'position:absolute;left:272px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницФизЛица',
			text: '999 из 999',
			style: 'position:absolute;left:273px;top:265px;width:80px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуРаздел1_4',
			text: 'Добавить',
			style: 'position:absolute;left:396px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуРаздел1_4',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаРаздел1_4',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаРаздел1_4',
			text: '',
			style: 'position:absolute;left:370px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуРаздел1_4',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатикСтраницРаздел1_3',
			text: '999 из 999',
			style: 'position:absolute;left:288px;top:265px;width:80px;height:19px;text-align:center;',
		},
					]
				},
				{
					title:'Лист 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист02',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист02',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.1 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил1',
			style: 'position:absolute;left:233px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист02_Прил1',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.2 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:266px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил2',
			style: 'position:absolute;left:233px;top:266px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист02_Прил2',
			style: 'position:absolute;left:355px;top:266px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.4 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил4',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист02_Прил4',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.5 к Листу 02',
				},
				{
					title:'Прил.5а к Листу 02',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист02_Прил5а',
			text: 'Добавить',
			style: 'position:absolute;left:394px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист02_Прил5а',
			text: 'Удалить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист02_Прил5а',
			text: '',
			style: 'position:absolute;left:250px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист02_Прил5а',
			text: '',
			style: 'position:absolute;left:354px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист02_Прил5а',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Прил.6 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил6',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист02_Прил6',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Прил.7 к Листу 02',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист02_Прил7',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист02_Прил7',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 03 (Раздел А)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЛист03_РазделА',
			text: 'Добавить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЛист03_РазделА',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист 03 (Разделы Б, В)',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуЛист03_РазделыБВ',
			text: 'Добавить',
			style: 'position:absolute;left:395px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуЛист03_РазделыБВ',
			text: 'Удалить',
			style: 'position:absolute;left:481px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаЛист03_РазделыБВ',
			text: '',
			style: 'position:absolute;left:266px;top:265px;width:21px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаЛист03_РазделыБВ',
			text: '',
			style: 'position:absolute;left:355px;top:265px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуЛист03_РазделыБВ',
			text: 'Перейти',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист 04 (Раздел А)',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист04_РазделА',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист04_РазделА',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 04 (Раздел Б)',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист04_РазделБ',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист04_РазделБ',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 05',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист05',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист05',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 06',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист06',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист06',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 07',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист07',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист07',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 08',
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:6px;top:265px;width:220px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиЛист08',
			style: 'position:absolute;left:232px;top:265px;width:117px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийЛист08',
			style: 'position:absolute;left:355px;top:265px;width:291px;height:19px;',
		},
					]
				},
				{
					title:'Лист 09',
				},
				{
					title:'Лист 10',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиЛист10',
			text: 'Добавить',
			style: 'position:absolute;left:480px;top:265px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиЛист10',
			text: 'Удалить',
			style: 'position:absolute;left:566px;top:265px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Лист 11',
				},
				{
					title:'Прил.1 к Листу 11',
				},
				{
					title:'Прил.2 к Листу 11',
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:584px;top:5px;width:83px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:74px;width:659px;height:48px;',
			height: 48,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключить авторасчет вычисляемых ячеек',
			style: 'position:absolute;left:170px;top:24px;width:246px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:424px;top:24px;width:116px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:555px;top:24px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:433px;width:659px;height:24px;',
			height: 24,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:5px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:5px;width:396px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:659px;height:37px;',
			height: 37,width: 659,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:2px;top:0px;width:657px;height:35px;',
			height: 35,width: 657,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
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
			style: 'position:absolute;left:0px;top:0px;width:675px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				'-',
				'-',
				{
					text:'Настройка...',
				},
				'-',
				{
					text:'Поиск',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Расширить поле бланка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:675px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});