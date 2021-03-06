﻿
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	///<summary>
	///(Регл)
	///</summary>
	public partial class ОпределениеФинансовыхРезультатов:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ОпределениеФинансовыхРезультатов НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
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
		
		public static ДокументыСсылка.ОпределениеФинансовыхРезультатов НайтиПоНомеру(string Номер)
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
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
		
		public static ДокументыВыборка.ОпределениеФинансовыхРезультатов Выбрать()
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ОпределениеФинансовыхРезультатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОпределениеФинансовыхРезультатов ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ОпределениеФинансовыхРезультатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОпределениеФинансовыхРезультатов ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ОпределениеФинансовыхРезультатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОпределениеФинансовыхРезультатов СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ОпределениеФинансовыхРезультатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОпределениеФинансовыхРезультатов СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld6785RRef [Организация]
					,_Fld6788 [ПериодРегистрации]
					,_Fld21708 [ОтражатьВБухгалтерскомУчете]
					,_Fld21709 [ОтражатьВНалоговомУчете]
					,_Fld6786 [ОпределениеФинансовогоРезультатаОтПродаж]
					,_Fld6787 [ОпределениеСальдоПрочихДоходовИРасходов]
					,_Fld27066 [РасчетРезервовПоСомнительнымДолгам]
					,_Fld21710 [СписаниеУбытковПрошлыхЛет]
					,_Fld27067 [ВключениеАмортизационнойПремииВРасходы]
					,_Fld6789RRef [Ответственный]
					,_Fld6790 [Комментарий]
					From _Document339(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ОпределениеФинансовыхРезультатов();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОпределениеФинансовыхРезультатов();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.ПериодРегистрации = Читалка.GetDateTime(4);
							Ссылка.ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							Ссылка.ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(6))[0]==1;
							Ссылка.ОпределениеФинансовогоРезультатаОтПродаж = ((byte[])Читалка.GetValue(7))[0]==1;
							Ссылка.ОпределениеСальдоПрочихДоходовИРасходов = ((byte[])Читалка.GetValue(8))[0]==1;
							Ссылка.РасчетРезервовПоСомнительнымДолгам = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.СписаниеУбытковПрошлыхЛет = ((byte[])Читалка.GetValue(10))[0]==1;
							Ссылка.ВключениеАмортизационнойПремииВРасходы = ((byte[])Читалка.GetValue(11))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(13);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ОпределениеФинансовыхРезультатов СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ОпределениеФинансовыхРезультатов();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}