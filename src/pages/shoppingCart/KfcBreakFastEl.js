import React, { useState } from "react";
import { CartMenuGroup } from "./KfcEl";
// ======引入圖片=====
// 早餐套餐
import 吮指嫩雞燒餅套餐 from "../../images/jpg/KFC/BreakFastGroup/吮指嫩雞燒餅套餐.jpg";
import 吮指嫩雞蛋堡套餐 from "../../images/jpg/KFC/BreakFastGroup/吮指嫩雞蛋堡套餐.jpg";
import 吮指嫩雞蛋烤餅套餐 from "../../images/jpg/KFC/BreakFastGroup/吮指嫩雞蛋烤餅套餐.jpg";
import 培根薯餅蛋烤餅套餐 from "../../images/jpg/KFC/BreakFastGroup/培根薯餅蛋烤餅套餐.jpg";
import 歐式經典總匯早餐套餐 from "../../images/jpg/KFC/BreakFastGroup/歐式經典總匯早餐.jpg";
import 雙人優惠B餐 from "../../images/jpg/KFC/BreakFastGroup/紅藜燕麥嫩雞粥雙人餐.jpg";
import 紅藜燕麥粥早餐套餐 from "../../images/jpg/KFC/BreakFastGroup/紅藜燕麥粥早餐套餐.jpg";
import 總匯歐姆蛋堡套餐 from "../../images/jpg/KFC/BreakFastGroup/總匯歐姆蛋堡套餐.jpg";
import 總匯歐姆蛋燒餅套餐 from "../../images/jpg/KFC/BreakFastGroup/總匯歐姆蛋燒餅套餐.jpg";
import 雙人優惠A餐 from "../../images/jpg/KFC/BreakFastGroup/雙人優惠A餐.jpg";
// 早餐單點
import 吮指嫩雞燒餅 from "../../images/jpg/KFC/BreakFast/吮指嫩雞燒餅.jpg";
import 吮指嫩雞蛋堡 from "../../images/jpg/KFC/BreakFast/吮指嫩雞蛋堡.jpg";
import 吮指嫩雞蛋烤餅 from "../../images/jpg/KFC/BreakFast/吮指嫩雞蛋烤餅.jpg";
import 培根薯餅蛋烤餅 from "../../images/jpg/KFC/BreakFast/培根薯餅蛋烤餅.jpg";
import 歐式經典總匯早餐 from "../../images/jpg/KFC/BreakFast/歐式經典總匯早餐.jpg";
import 紅藜燕麥粥 from "../../images/jpg/KFC/BreakFast/紅藜燕麥粥.jpg";
import 總匯歐姆蛋堡 from "../../images/jpg/KFC/BreakFast/總匯歐姆蛋堡.jpg";
import 總匯歐姆蛋燒餅 from "../../images/jpg/KFC/BreakFast/總匯歐姆蛋燒餅.jpg";
import 薯餅 from "../../images/jpg/KFC/BreakFast/薯餅.jpg";
import 鮮蔬沙拉 from "../../images/jpg/KFC/BreakFast/鮮蔬沙拉(千島醬).jpg";

// 早餐套餐
export function KfcBreakFastGroup() {
    let [KfcBreakFastGroupData] = useState([
        {
            "name": "吮指嫩雞燒餅套餐",
            "price": 75,
            "img": 吮指嫩雞燒餅套餐,
            "url": "ChickenBiscuitsGroup"
        },
        {
            "name": "吮指嫩雞蛋堡套餐",
            "price": 65,
            "img": 吮指嫩雞蛋堡套餐,
            "url": "ChickenEggBurgerGroup"
        },
        {
            "name": "吮指嫩雞蛋烤餅套餐",
            "price": 75,
            "img": 吮指嫩雞蛋烤餅套餐,
            "url": "ChickenSconesGroup"
        },
        {
            "name": "培根薯餅蛋烤餅套餐",
            "price": 49,
            "img": 培根薯餅蛋烤餅套餐,
            "url": "BaconPotatoCakeSconesGroup"
        },
        {
            "name": "歐式經典總匯早餐",
            "price": 119,
            "img": 歐式經典總匯早餐套餐,
            "url": "ClassicBreakFastGroup"
        },
        {
            "name": "雙人優惠A餐",
            "price": 105,
            "img": 雙人優惠A餐,
            "url": "DoubleDiscountAGroup"
        },
        {
            "name": "雙人優惠B餐",
            "price": 115,
            "img": 雙人優惠B餐,
            "url": "DoubleDiscountBGroup"
        },
        {
            "name": "紅藜燕麥粥早餐套餐",
            "price": 65,
            "img": 紅藜燕麥粥早餐套餐,
            "url": "OatmealBreakFastGroup"
        },
        {
            "name": "總匯歐姆蛋堡套餐",
            "price": 59,
            "img": 總匯歐姆蛋堡套餐,
            "url": "OmeletteBurgerGroup"
        },
        {
            "name": "總匯歐姆蛋燒餅套餐",
            "price": 69,
            "img": 總匯歐姆蛋燒餅套餐,
            "url": "OmeletteBurgerBiscuitsGroup"
        }
    ])
    return <>
        {KfcBreakFastGroupData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}
// 5-7人歡聚餐
export function KfcBreakFast() {
    let [KfcBreakFastData] = useState([
        {
            "name": "吮指嫩雞燒餅",
            "price": 56,
            "img": 吮指嫩雞燒餅,
            "url": "ChickenBiscuits"
        },
        {
            "name": "吮指嫩雞蛋堡",
            "price": 46,
            "img": 吮指嫩雞蛋堡,
            "url": "ChickenEggBurger"
        },
        {
            "name": "吮指嫩雞蛋烤餅",
            "price": 46,
            "img": 吮指嫩雞蛋烤餅,
            "url": "ChickenScones"
        },
        {
            "name": "培根薯餅蛋烤餅",
            "price": 35,
            "img": 培根薯餅蛋烤餅,
            "url": "BaconPotatoCakeScones"
        },
        {
            "name": "歐式經典總匯早餐",
            "price": 95,
            "img": 歐式經典總匯早餐,
            "url": "ClassicBreakFast"
        },        
        {
            "name": "紅藜燕麥粥",
            "price": 46,
            "img": 紅藜燕麥粥,
            "url": "OatmealBreakFast"
        },
        {
            "name": "總匯歐姆蛋堡",
            "price": 40,
            "img": 總匯歐姆蛋堡,
            "url": "OmeletteBurger"
        },
        {
            "name": "總匯歐姆蛋燒餅",
            "price": 50,
            "img": 總匯歐姆蛋燒餅,
            "url": "OmeletteBurgerBiscuits"
        },
        {
            "name": "薯餅",
            "price": 25,
            "img": 薯餅,
            "url": "PotatoCake"
        },
        {
            "name": "鮮蔬沙拉(千島醬)",
            "price": 40,
            "img": 鮮蔬沙拉,
            "url": "ThousandIslandSauceSara"
        }
    ])
    return <>
        {KfcBreakFastData.map((item, x) => (
            <CartMenuGroup
                key={x}
                img={item.img}
                name={item.name}
                cost={item.url}
                price={item.price} />
        ))}
    </>
}