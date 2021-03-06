﻿
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыКриптоПровайдеров
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///Криптопровайдер КриптоПро CSP
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"5b750bc5-51ec-49a3-a031-04215852a966\", \"Представление\":\"CryptoPro\"}")]
		CryptoPro = 0,//Crypto pro
	///<summary>
	///Криптопровайдер VipNet CSP
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"a1a1603b-7092-474f-b82f-e17d944f589d\", \"Представление\":\"VipNet\"}")]
		VipNet = 1,//Vip net
	}
	public static partial class ТипыКриптоПровайдеров_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///Криптопровайдер КриптоПро CSP
		///</summary>
		public static readonly Guid CryptoPro = new Guid("210431a0-5258-66a9-49a3-51ec5b750bc5");//Crypto pro
		///<summary>
		///Криптопровайдер VipNet CSP
		///</summary>
		public static readonly Guid VipNet = new Guid("7de12fb8-4f94-9d58-474f-7092a1a1603b");//Vip net
		public static ТипыКриптоПровайдеров Получить(this ТипыКриптоПровайдеров Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыКриптоПровайдеров Получить(this ТипыКриптоПровайдеров Значение, Guid Ссылка)
		{
			if(Ссылка == CryptoPro)
			{
				return ТипыКриптоПровайдеров.CryptoPro;
			}
			else if(Ссылка == VipNet)
			{
				return ТипыКриптоПровайдеров.VipNet;
			}
			return ТипыКриптоПровайдеров.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыКриптоПровайдеров Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыКриптоПровайдеров Значение)
		{
			switch (Значение)
			{
				case ТипыКриптоПровайдеров.CryptoPro: return CryptoPro;
				case ТипыКриптоПровайдеров.VipNet: return VipNet;
			}
			return Guid.Empty;
		}
	}
}