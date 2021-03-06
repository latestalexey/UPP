﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	///<summary>
	///(Общ)
	///</summary>
	public partial class ПодразделенияОрганизаций:СправочникМенеджер
	{
		
		public static СправочникиСсылка.ПодразделенияОрганизаций НайтиПоСсылке(Guid _Ссылка)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static СправочникиСсылка.ПодразделенияОрганизаций НайтиПоКоду(string Код)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
					Where _Code=@Код";
					Команда.Parameters.AddWithValue("Код", Код);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций Выбрать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK) ";
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций ВыбратьПоКоду(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций ВыбратьПоНаименованию(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
					Where _Description between @Мин and @Макс
					Order by _Description", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций СтраницаПоСсылке(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций СтраницаПоКоду(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций СтраницаПоНаименованию(int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.СправочникиОбъект.ПодразделенияОрганизаций СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ПодразделенияОрганизаций();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.КодПоОКАТО = "";
			Объект.КПП = "";
			Объект.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка;
			Объект.ТерриториальныеУсловияПФР = new V82.СправочникиСсылка.ТерриториальныеУсловия();
			return Объект;
		}
		
		public static V82.СправочникиОбъект.ПодразделенияОрганизаций СоздатьГруппу()
		{
			var Объект = new V82.СправочникиОбъект.ПодразделенияОрганизаций();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.КодПоОКАТО = "";
			Объект.КПП = "";
			Объект.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка;
			Объект.ТерриториальныеУсловияПФР = new V82.СправочникиСсылка.ТерриториальныеУсловия();
			return Объект;
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций ИерархияВыбратьПоСсылке(Guid Родитель,int Режим,int Первые,Guid Мин,Guid Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)
					Where _IDRRef between @Мин and @Макс 
					AND _ParentIDRRef = @Родитель
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ПодразделенияОрганизаций ИерархияСтраницаПоСсылке(Guid Родитель,int Режим,int Размер,int Номер)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_ParentIDRRef [Родитель]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1614RRef [ВидПодразделения]
					,_Fld18715 [КодПоОКАТО]
					,_Fld18716 [КПП]
					,_Fld21275 [РайонныйКоэффициент]
					,_Fld21276 [РайонныйКоэффициентРФ]
					,_Fld21277RRef [ТерриториальныеУсловияПФР]
					,_Fld26576 [Порядок]
					,_Fld26577 [СоответствуетСудамПодФлагомРФ]
					From _Reference119(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ПодразделенияОрганизаций();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ПодразделенияОрганизаций();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Ссылка.Родитель = V82.СправочникиСсылка.ПодразделенияОрганизаций.ВзятьИзКэша((byte[])Читалка.GetValue(4));
							Ссылка.Код = Читалка.GetString(5);
							Ссылка.Наименование = Читалка.GetString(6);
								Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
								Ссылка.КодПоОКАТО = Читалка.GetString(8);
								Ссылка.КПП = Читалка.GetString(9);
								Ссылка.РайонныйКоэффициент = Читалка.GetDecimal(10);
								Ссылка.РайонныйКоэффициентРФ = Читалка.GetDecimal(11);
								Ссылка.ТерриториальныеУсловияПФР = V82.СправочникиСсылка.ТерриториальныеУсловия.ВзятьИзКэша((byte[])Читалка.GetValue(12));
								Ссылка.Порядок = Читалка.GetDecimal(13);
								Ссылка.СоответствуетСудамПодФлагомРФ = ((byte[])Читалка.GetValue(14))[0]==1;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
	}
}