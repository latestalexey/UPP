﻿Ext.define('Справочники.СотрудникиОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Данные сотрудника',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:276px;top:159px;width:716px;height:249px;',
			height: 249,width: 716,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:716px;height:150px;',
			height: 150,width: 716,
			columns:
			[
				{
					text:'Сотрудники',
					width:'100',
					dataIndex:'Группа',
					flex:1,
				},
				{
					text:'Наименование',
					width:'142',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код (Таб. №)',
					width:'71',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Организация',
					width:'126',
					dataIndex:'ОбособленноеПодразделение',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'123',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Вид договора',
					width:'140',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Принят',
					width:'60',
					dataIndex:'ДатаПриема',
					flex:1,
				},
				{
					text:'Уволен',
					width:'60',
					dataIndex:'ДатаУвольнения',
					flex:1,
				},
				{
					text:'Аванс',
					width:'60',
					dataIndex:'Аванс',
					flex:1,
				},
				{
					text:'Номер лицевого счета',
					width:'120',
					dataIndex:'НомерЛицевогоСчета',
					flex:1,
				},
				{
					text:'Банк',
					width:'100',
					dataIndex:'Банк',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Группа',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
					{
						name:'ОбособленноеПодразделение',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаПриема',
					},
					{
						name:'ДатаУвольнения',
					},
					{
						name:'Аванс',
					},
					{
						name:'НомерЛицевогоСчета',
					},
					{
						name:'Банк',
					},
				]
			},
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:74px;top:0px;width:216px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:28px;width:175px;height:24px;',
			items:
			[
				{
					text:'Наименованию',
				},
				{
					text:'Подразделению',
				},
				{
					text:'Должности',
				},
				{
					text:'Дате приема',
				},
				{
					text:'Таб. номеру',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:180px;width:716px;height:67px;',
			height: 67,width: 716,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстаткаОтпусков',
			style: 'position:absolute;left:636px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:262px;height:539px;',
			height: 539,width: 262,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:262px;height:515px;',
			height: 515,width: 262,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'По группам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:515px;',
			height: 515,width: 262,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:113px;width:182px;height:24px;',
			items:
			[
				{
					text:'Выбрать группу',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				{
					text:'Обновить',
				},
			]
		},
					]
				},
				{
					title:'По подразделениям',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:515px;',
			height: 515,width: 262,
			columns:
			[
				{
					text:'Организация',
					width:'137',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Наименование',
					width:'195',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код',
					width:'65',
					dataIndex:'Код',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Организация',
					},
					{
						name:'Наименование',
					},
					{
						name:'Код',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:33px;top:166px;width:203px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
					]
				},
				{
					title:'По виду договора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:515px;',
			height: 515,width: 262,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид договора',
					width:'100',
					dataIndex:'ВидДоговора',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'ВидДоговора',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:0px;width:262px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:276px;top:414px;width:716px;height:158px;',
			height: 158,width: 716,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Форма медицинского страхования',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:1px;top:25px;width:715px;height:24px;',
			items:
			[
				{
					text:'Обязательное страхование',
				},
				{
					text:'Добровольное страхование',
				},
				{
					text:'Добровольное страхование родственника',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:50px;width:715px;height:108px;',
			height: 108,width: 715,
			columns:
			[
				{
					text:'Серия',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Выдан',
					width:'80',
					dataIndex:'ДатаВыдачиПолиса',
					flex:1,
				},
				{
					text:'До',
					width:'80',
					dataIndex:'ДатаОкончанияПолиса',
					flex:1,
				},
				{
					text:'Вид страхования',
					width:'100',
					dataIndex:'ВидСтрахования',
					flex:1,
				},
				{
					text:'Программа страхования',
					width:'130',
					dataIndex:'ПрограммаСтрахования',
					flex:1,
				},
				{
					text:'Родственник',
					width:'120',
					dataIndex:'Родственник',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ДатаВыдачиПолиса',
					},
					{
						name:'ДатаОкончанияПолиса',
					},
					{
						name:'ВидСтрахования',
					},
					{
						name:'ПрограммаСтрахования',
					},
					{
						name:'Родственник',
					},
				]
			},
		},
					]
				},
				{
					title:'Форма остатков отпусков',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:55px;width:716px;height:24px;',
			items:
			[
				{
					text:'Редактировать остаток отпуска',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Изменить количество дней отпуска в год',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:81px;width:715px;height:77px;',
			height: 77,width: 715,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'100',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
				{
					text:'Год работы',
					width:'100',
					dataIndex:'ГодРаботы',
					flex:1,
				},
				{
					text:'С',
					width:'80',
					dataIndex:'ДатаНачалаРабочегоГода',
					flex:1,
				},
				{
					text:'По',
					width:'80',
					dataIndex:'ДатаОкончанияРабочегоГода',
					flex:1,
				},
				{
					text:'Количество дней',
					width:'70',
					dataIndex:'Количество',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидЕжегодногоОтпуска',
					},
					{
						name:'ГодРаботы',
					},
					{
						name:'ДатаНачалаРабочегоГода',
					},
					{
						name:'ДатаОкончанияРабочегоГода',
					},
					{
						name:'Количество',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:276px;top:33px;width:716px;height:126px;',
			height: 126,width: 716,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});