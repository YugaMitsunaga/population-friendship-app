import React, { useState, useEffect } from 'react';

const StatsData = () => {
  const [labelzerofirst, setLabelZeroFirst] = useState(null);
  const [labelzerolater, setLabelZeroLater] = useState(null);
  const [labelonefirst, setLabelOneFirst] = useState(null);
  const [labelonelater, setLabelOneLater] = useState(null);
  const [labeltwofirst, setLabelTwoFirst] = useState(null);
  const [labeltwolater, setLabelTwoLater] = useState(null);
  const [labelthreefirst, setLabelThreeFirst] = useState(null);
  const [labelthreelater, setLabelThreeLater] = useState(null);
  const [labelfourfirst, setLabelFourFirst] = useState(null);
  const [labelfourlater, setLabelFourLater] = useState(null);
  const [labelfivefirst, setLabelFiveFirst] = useState(null);
  const [labelfivelater, setLabelFiveLater] = useState(null);
  const [labelsixfirst, setLabelSixFirst] = useState(null);
  const [labelsixlater, setLabelSixLater] = useState(null);
  const [labelsevenfirst, setLabelSevebFirst] = useState(null);
  const [labelsevenlater, setLabelSevenLater] = useState(null);
  const [labeleightfirst, setLabelEightFirst] = useState(null);
  const [labelEightLaterOver, setLabelEightLaterOver] = useState(null);

  const [tokyozerofirst, setTokyoZeroFirst] = useState(null);
  const [tokyozerolater, setTokyoZeroLater] = useState(null);
  const [tokyoonefirst, setTokyoOneFirst] = useState(null);
  const [tokyoonelater, setTokyoOneLater] = useState(null);
  const [tokyotwofirst, setTokyoTwoFirst] = useState(null);
  const [tokyotwolater, setTokyoTwoLater] = useState(null);
  const [tokyothreefirst, setTokyoThreeFirst] = useState(null);
  const [tokyothreelater, setTokyoThreeLater] = useState(null);
  const [tokyofourfirst, setTokyoFourFirst] = useState(null);
  const [tokyofourlater, setTokyoFourLater] = useState(null);
  const [tokyofivefirst, setTokyoFiveFirst] = useState(null);
  const [tokyofivelater, setTokyoFiveLater] = useState(null);
  const [tokyosixfirst, setTokyoSixFirst] = useState(null);
  const [tokyosixlater, setTokyoSixLater] = useState(null);
  const [tokyosevenfirst, setTokyoSevenFirst] = useState(null);
  const [tokyosevenlater, setTokyoSevenLater] = useState(null);
  const [tokyoeightfirst, setTokyoEightFirst] = useState(null);
  const [tokyoEightLaterOver, setTokyoEightLaterOver] = useState(null);

  const [kanagawazerofirst, setKanagawaZeroFirst] = useState(null);
  const [kanagawazerolater, setKanagawaZeroLater] = useState(null);
  const [kanagawaonefirst, setKanagawaOneFirst] = useState(null);
  const [kanagawaonelater, setKanagawaOneLater] = useState(null);
  const [kanagawatwofirst, setKanagawaTwoFirst] = useState(null);
  const [kanagawatwolater, setKanagawaTwoLater] = useState(null);
  const [kanagawathreefirst, setKanagawaThreeFirst] = useState(null);
  const [kanagawathreelater, setKanagawaThreeLater] = useState(null);
  const [kanagawafourfirst, setKanagawaFourFirst] = useState(null);
  const [kanagawafourlater, setKanagawaFourLater] = useState(null);
  const [kanagawafivefirst, setKanagawaFiveFirst] = useState(null);
  const [kanagawafivelater, setKanagawaFiveLater] = useState(null);
  const [kanagawasixfirst, setKanagawaSixFirst] = useState(null);
  const [kanagawasixlater, setKanagawaSixLater] = useState(null);
  const [kanagawasevenfirst, setKanagawaSevenFirst] = useState(null);
  const [kanagawasevenlater, setKanagawaSevenLater] = useState(null);
  const [kanagawaeightfirst, setKanagawaEightFirst] = useState(null);
  const [kanagawaEightLaterOver, setKanagawaEightLaterOver] = useState(null);

  const [saitamazerofirst, setSaitamaZeroFirst] = useState(null);
  const [saitamazerolater, setSaitamaZeroLater] = useState(null);
  const [saitamaonefirst, setSaitamaOneFirst] = useState(null);
  const [saitamaonelater, setSaitamaOneLater] = useState(null);
  const [saitamatwofirst, setSaitamaTwoFirst] = useState(null);
  const [saitamatwolater, setSaitamaTwoLater] = useState(null);
  const [saitamathreefirst, setSaitamaThreeFirst] = useState(null);
  const [saitamathreelater, setSaitamaThreeLater] = useState(null);
  const [saitamafourfirst, setSaitamaFourFirst] = useState(null);
  const [saitamafourlater, setSaitamaFourLater] = useState(null);
  const [saitamafivefirst, setSaitamaFiveFirst] = useState(null);
  const [saitamafivelater, setSaitamaFiveLater] = useState(null);
  const [saitamasixfirst, setSaitamaSixFirst] = useState(null);
  const [saitamasixlater, setSaitamaSixLater] = useState(null);
  const [saitamasevenfirst, setSaitamaSevenFirst] = useState(null);
  const [saitamasevenlater, setSaitamaSevenLater] = useState(null);
  const [saitamaeightfirst, setSaitamaEightFirst] = useState(null);
  const [saitamaEightLaterOver, setSaitamaEightLaterOver] = useState(null);

  const [chibazerofirst, setChibaZeroFirst] = useState(null);
  const [chibazerolater, setChibaZeroLater] = useState(null);
  const [chibaonefirst, setChibaOneFirst] = useState(null);
  const [chibaonelater, setChibaOneLater] = useState(null);
  const [chibatwofirst, setChibaTwoFirst] = useState(null);
  const [chibatwolater, setChibaTwoLater] = useState(null);
  const [chibathreefirst, setChibaThreeFirst] = useState(null);
  const [chibathreelater, setChibaThreeLater] = useState(null);
  const [chibafourfirst, setChibaFourFirst] = useState(null);
  const [chibafourlater, setChibaFourLater] = useState(null);
  const [chibafivefirst, setChibaFiveFirst] = useState(null);
  const [chibafivelater, setChibaFiveLater] = useState(null);
  const [chibasixfirst, setChibaSixFirst] = useState(null);
  const [chibasixlater, setChibaSixLater] = useState(null);
  const [chibasevenfirst, setChibaSevenFirst] = useState(null);
  const [chibasevenlater, setChibaSevenLater] = useState(null);
  const [chibaeightfirst, setChibaEightFirst] = useState(null);
  const [chibaEightLaterOver, setChibaEightLaterOver] = useState(null);

  const [ibarakizerofirst, setIbarakiZeroFirst] = useState(null);
  const [ibarakizerolater, setIbarakiZeroLater] = useState(null);
  const [ibarakionefirst, setIbarakiOneFirst] = useState(null);
  const [ibarakionelater, setIbarakiOneLater] = useState(null);
  const [ibarakitwofirst, setIbarakiTwoFirst] = useState(null);
  const [ibarakitwolater, setIbarakiTwoLater] = useState(null);
  const [ibarakithreefirst, setIbarakiThreeFirst] = useState(null);
  const [ibarakithreelater, setIbarakiThreeLater] = useState(null);
  const [ibarakifourfirst, setIbarakiFourFirst] = useState(null);
  const [ibarakifourlater, setIbarakiFourLater] = useState(null);
  const [ibarakifivefirst, setIbarakiFiveFirst] = useState(null);
  const [ibarakifivelater, setIbarakiFiveLater] = useState(null);
  const [ibarakisixfirst, setIbarakiSixFirst] = useState(null);
  const [ibarakisixlater, setIbarakiSixLater] = useState(null);
  const [ibarakisevenfirst, setIbarakiSevenFirst] = useState(null);
  const [ibarakisevenlater, setIbarakiSevenLater] = useState(null);
  const [ibarakieightfirst, setIbarakiEightFirst] = useState(null);
  const [ibarakiEightLaterOver, setIbarakiEightLaterOver] = useState(null);

  const [tochigizerofirst, setTochigiZeroFirst] = useState(null);
  const [tochigizerolater, setTochigiZeroLater] = useState(null);
  const [tochigionefirst, setTochigiOneFirst] = useState(null);
  const [tochigionelater, setTochigiOneLater] = useState(null);
  const [tochigitwofirst, setTochigiTwoFirst] = useState(null);
  const [tochigitwolater, setTochigiTwoLater] = useState(null);
  const [tochigithreefirst, setTochigiThreeFirst] = useState(null);
  const [tochigithreelater, setTochigiThreeLater] = useState(null);
  const [tochigifourfirst, setTochigiFourFirst] = useState(null);
  const [tochigifourlater, setTochigiFourLater] = useState(null);
  const [tochigifivefirst, setTochigiFiveFirst] = useState(null);
  const [tochigifivelater, setTochigiFiveLater] = useState(null);
  const [tochigisixfirst, setTochigiSixFirst] = useState(null);
  const [tochigisixlater, setTochigiSixLater] = useState(null);
  const [tochigisevenfirst, setTochigiSevenFirst] = useState(null);
  const [tochigisevenlater, setTochigiSevenLater] = useState(null);
  const [tochigieightfirst, setTochigiEightFirst] = useState(null);
  const [tochigiEightLaterOver, setTochigiEightLaterOver] = useState(null);

  const [gunmazerofirst, setGunmaZeroFirst] = useState(null);
  const [gunmazerolater, setGunmaZeroLater] = useState(null);
  const [gunmaonefirst, setGunmaOneFirst] = useState(null);
  const [gunmaonelater, setGunmaOneLater] = useState(null);
  const [gunmatwofirst, setGunmaTwoFirst] = useState(null);
  const [gunmatwolater, setGunmaTwoLater] = useState(null);
  const [gunmathreefirst, setGunmaThreeFirst] = useState(null);
  const [gunmathreelater, setGunmaThreeLater] = useState(null);
  const [gunmafourfirst, setGunmaFourFirst] = useState(null);
  const [gunmafourlater, setGunmaFourLater] = useState(null);
  const [gunmafivefirst, setGunmaFiveFirst] = useState(null);
  const [gunmafivelater, setGunmaFiveLater] = useState(null);
  const [gunmasixfirst, setGunmaSixFirst] = useState(null);
  const [gunmasixlater, setGunmaSixLater] = useState(null);
  const [gunmasevenfirst, setGunmaSevenFirst] = useState(null);
  const [gunmasevenlater, setGunmaSevenLater] = useState(null);
  const [gunmaeightfirst, setGunmaEightFirst] = useState(null);
  const [gunmaEightLaterOver, setGunmaEightLaterOver] = useState(null);

  const [yamanashizerofirst, setYamanashiZeroFirst] = useState(null);
  const [yamanashizerolater, setYamanashiZeroLater] = useState(null);
  const [yamanashionefirst, setYamanashiOneFirst] = useState(null);
  const [yamanashionelater, setYamanashiOneLater] = useState(null);
  const [yamanashitwofirst, setYamanashiTwoFirst] = useState(null);
  const [yamanashitwolater, setYamanashiTwoLater] = useState(null);
  const [yamanashithreefirst, setYamanashiThreeFirst] = useState(null);
  const [yamanashithreelater, setYamanashiThreeLater] = useState(null);
  const [yamanashifourfirst, setYamanashiFourFirst] = useState(null);
  const [yamanashifourlater, setYamanashiFourLater] = useState(null);
  const [yamanashifivefirst, setYamanashiFiveFirst] = useState(null);
  const [yamanashifivelater, setYamanashiFiveLater] = useState(null);
  const [yamanashisixfirst, setYamanashiSixFirst] = useState(null);
  const [yamanashisixlater, setYamanashiSixLater] = useState(null);
  const [yamanashisevenfirst, setYamanashiSevenFirst] = useState(null);
  const [yamanashisevenlater, setYamanashiSevenLater] = useState(null);
  const [yamanashieightfirst, setYamanashiEightFirst] = useState(null);
  const [yamanashiEightLaterOver, setYamanashiEightLaterOver] = useState(null);

  const [list, setList] = useState(null);
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [groupResult, setGroupResult] = useState([[], [], []]);

  const [tokyoStyle, setTokyoStyle] = useState({});
  const [kanagawaStyle, setKanagawaStyle] = useState({});
  const [saitamaStyle, setSaitamaStyle] = useState({});
  const [chibaStyle, setChibaStyle] = useState({});
  const [ibarakiStyle, setIbarakiStyle] = useState({});
  const [tochigiStyle, setTochigiStyle] = useState({});
  const [gunmaStyle, setGunmaStyle] = useState({});
  const [yamanashiStyle, setYamanashiStyle] = useState({});
  
  useEffect(() => {
    
    /*
    const fetchList = async () => {
      try {//統計表情報取得
        const responseList = await fetch('https://api.e-stat.go.jp/rest/3.0/app/json/getStatsList?appId=63b5a76d820f58fe111c6b6ae8bdf060a998fa6f&statsCode=00200524&openYears=202504&searchWord=人口');
        if (!responseList.ok) {
          throw new Error('Network responseList was not ok');
        }
        const result = await responseList.json();
        setList(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };*/
    
    const fetchData = async () => {
      try {//こっちが実データ　後ろの&はAPI仕様を見て //"@tab": "001","@cat01": "000" 男女計,"@cat02": "04018",年齢5歳階級"@cat03": "001",総人口"@area": "17000",都道府県"@time": "1901",2024年10月1日現在"@unit": "千人",
        const responseData = await fetch('https://api.e-stat.go.jp/rest/3.0/app/json/getStatsData?appId=63b5a76d820f58fe111c6b6ae8bdf060a998fa6f&statsDataId=0003448237&cdAreaFrom=08000&cdAreaTo=19000&cdTimeFrom=1901&cdCat01=000&cdCat03=001');
        if (!responseData.ok) {
          throw new Error('Network responseData was not ok');
        }

        const result = await responseData.json();
        setData(result);

        const ageclass = result?.GET_STATS_DATA?.STATISTICAL_DATA?.CLASS_INF?.CLASS_OBJ;
        
        //"年齢5歳階級"の抽出
        const target = ageclass?.find(item => item["@id"] === "cat02");
        const targetCLASS = target.CLASS;

        const obj1001 = targetCLASS?.find(item => item["@code"] === "01001");
        const get1001 = obj1001 ? obj1001["@name"] : null;
        const obj1002 = targetCLASS?.find(item => item["@code"] === "01002");
        const get1002 = obj1002 ? obj1002["@name"] : null;
        const obj1003 = targetCLASS?.find(item => item["@code"] === "01003");
        const get1003 = obj1003 ? obj1003["@name"] : null;
        const obj1004 = targetCLASS?.find(item => item["@code"] === "01004");
        const get1004 = obj1004 ? obj1004["@name"] : null;
        const obj1005 = targetCLASS?.find(item => item["@code"] === "01005");
        const get1005 = obj1005 ? obj1005["@name"] : null;
        const obj1006 = targetCLASS?.find(item => item["@code"] === "01006");
        const get1006 = obj1006 ? obj1006["@name"] : null;
        const obj1007 = targetCLASS?.find(item => item["@code"] === "01007");
        const get1007 = obj1007 ? obj1007["@name"] : null;
        const obj1008 = targetCLASS?.find(item => item["@code"] === "01008");
        const get1008 = obj1008 ? obj1008["@name"] : null;
        const obj1009 = targetCLASS?.find(item => item["@code"] === "01009");
        const get1009 = obj1009 ? obj1009["@name"] : null;
        const obj1010 = targetCLASS?.find(item => item["@code"] === "01010");
        const get1010 = obj1010 ? obj1010["@name"] : null;
        const obj1011 = targetCLASS?.find(item => item["@code"] === "01011");
        const get1011 = obj1011 ? obj1011["@name"] : null;
        const obj1012 = targetCLASS?.find(item => item["@code"] === "01012");
        const get1012 = obj1012 ? obj1012["@name"] : null;
        const obj1013 = targetCLASS?.find(item => item["@code"] === "01013");
        const get1013 = obj1013 ? obj1013["@name"] : null;
        const obj1014 = targetCLASS?.find(item => item["@code"] === "01014");
        const get1014 = obj1014 ? obj1014["@name"] : null;
        const obj1015 = targetCLASS?.find(item => item["@code"] === "01015");
        const get1015 = obj1015 ? obj1015["@name"] : null;
        const obj1016 = targetCLASS?.find(item => item["@code"] === "01016");
        const get1016 = obj1016 ? obj1016["@name"] : null;
        const obj1017 = targetCLASS?.find(item => item["@code"] === "01017");
        const get1017 = obj1017 ? obj1017["@name"] : null;
        const obj4018 = targetCLASS?.find(item => item["@code"] === "04018");
        const get4018 = obj4018 ? obj4018["@name"] : null;

        setLabelZeroFirst(get1001)
        setLabelZeroLater(get1002)
        setLabelOneFirst(get1003)
        setLabelOneLater(get1004)
        setLabelTwoFirst(get1005)
        setLabelTwoLater(get1006)
        setLabelThreeFirst(get1007)
        setLabelThreeLater(get1008)
        setLabelFourFirst(get1009)
        setLabelFourLater(get1010)
        setLabelFiveFirst(get1011)
        setLabelFiveLater(get1012)
        setLabelSixFirst(get1013)
        setLabelSixLater(get1014)
        setLabelSevebFirst(get1015)
        setLabelSevenLater(get1016)
        setLabelEightFirst(get1017)
        setLabelEightLaterOver(get4018)

        const valuesPop = result?.GET_STATS_DATA?.STATISTICAL_DATA?.DATA_INF?.VALUE;

        //東京
        const obj13000_1001 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01001");
        const get13000_1001 = obj13000_1001 ? obj13000_1001["$"] : null;
        const obj13000_1002 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01002");
        const get13000_1002 = obj13000_1002 ? obj13000_1002["$"] : null;
        const obj13000_1003 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01003");
        const get13000_1003 = obj13000_1003 ? obj13000_1003["$"] : null;
        const obj13000_1004 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01004");
        const get13000_1004 = obj13000_1004 ? obj13000_1004["$"] : null;
        const obj13000_1005 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01005");
        const get13000_1005 = obj13000_1005 ? obj13000_1005["$"] : null;
        const obj13000_1006 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01006");
        const get13000_1006 = obj13000_1006 ? obj13000_1006["$"] : null;
        const obj13000_1007 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01007");
        const get13000_1007 = obj13000_1007 ? obj13000_1007["$"] : null;
        const obj13000_1008 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01008");
        const get13000_1008 = obj13000_1008 ? obj13000_1008["$"] : null;
        const obj13000_1009 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01009");
        const get13000_1009 = obj13000_1009 ? obj13000_1009["$"] : null;
        const obj13000_1010 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01010");
        const get13000_1010 = obj13000_1010 ? obj13000_1010["$"] : null;
        const obj13000_1011 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01011");
        const get13000_1011 = obj13000_1011 ? obj13000_1011["$"] : null;
        const obj13000_1012 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01012");
        const get13000_1012 = obj13000_1012 ? obj13000_1012["$"] : null;
        const obj13000_1013 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01013");
        const get13000_1013 = obj13000_1013 ? obj13000_1013["$"] : null;
        const obj13000_1014 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01014");
        const get13000_1014 = obj13000_1014 ? obj13000_1014["$"] : null;
        const obj13000_1015 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01015");
        const get13000_1015 = obj13000_1015 ? obj13000_1015["$"] : null;
        const obj13000_1016 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01016");
        const get13000_1016 = obj13000_1016 ? obj13000_1016["$"] : null;
        const obj13000_1017 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "01017");
        const get13000_1017 = obj13000_1017 ? obj13000_1017["$"] : null;
        const obj13000_4018 = valuesPop?.find(item => item["@area"] === "13000" && item["@cat02"] === "04018");
        const get13000_4018 = obj13000_4018 ? obj13000_4018["$"] : null;

        setTokyoZeroFirst(get13000_1001);
        setTokyoZeroLater(get13000_1002);
        setTokyoOneFirst(get13000_1003);
        setTokyoOneLater(get13000_1004);
        setTokyoTwoFirst(get13000_1005);
        setTokyoTwoLater(get13000_1006);
        setTokyoThreeFirst(get13000_1007);
        setTokyoThreeLater(get13000_1008);
        setTokyoFourFirst(get13000_1009);
        setTokyoFourLater(get13000_1010);
        setTokyoFiveFirst(get13000_1011);
        setTokyoFiveLater(get13000_1012);
        setTokyoSixFirst(get13000_1013);
        setTokyoSixLater(get13000_1014);
        setTokyoSevenFirst(get13000_1015);
        setTokyoSevenLater(get13000_1016);
        setTokyoEightFirst(get13000_1017);
        setTokyoEightLaterOver(get13000_4018);

        //神奈川
        const obj14000_1001 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01001");
        const get14000_1001 = obj14000_1001 ? obj14000_1001["$"] : null;
        const obj14000_1002 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01002");
        const get14000_1002 = obj14000_1002 ? obj14000_1002["$"] : null;
        const obj14000_1003 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01003");
        const get14000_1003 = obj14000_1003 ? obj14000_1003["$"] : null;
        const obj14000_1004 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01004");
        const get14000_1004 = obj14000_1004 ? obj14000_1004["$"] : null;
        const obj14000_1005 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01005");
        const get14000_1005 = obj14000_1005 ? obj14000_1005["$"] : null;
        const obj14000_1006 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01006");
        const get14000_1006 = obj14000_1006 ? obj14000_1006["$"] : null;
        const obj14000_1007 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01007");
        const get14000_1007 = obj14000_1007 ? obj14000_1007["$"] : null;
        const obj14000_1008 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01008");
        const get14000_1008 = obj14000_1008 ? obj14000_1008["$"] : null;
        const obj14000_1009 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01009");
        const get14000_1009 = obj14000_1009 ? obj14000_1009["$"] : null;
        const obj14000_1010 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01010");
        const get14000_1010 = obj14000_1010 ? obj14000_1010["$"] : null;
        const obj14000_1011 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01011");
        const get14000_1011 = obj14000_1011 ? obj14000_1011["$"] : null;
        const obj14000_1012 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01012");
        const get14000_1012 = obj14000_1012 ? obj14000_1012["$"] : null;
        const obj14000_1013 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01013");
        const get14000_1013 = obj14000_1013 ? obj14000_1013["$"] : null;
        const obj14000_1014 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01014");
        const get14000_1014 = obj14000_1014 ? obj14000_1014["$"] : null;
        const obj14000_1015 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01015");
        const get14000_1015 = obj14000_1015 ? obj14000_1015["$"] : null;
        const obj14000_1016 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01016");
        const get14000_1016 = obj14000_1016 ? obj14000_1016["$"] : null;
        const obj14000_1017 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "01017");
        const get14000_1017 = obj14000_1017 ? obj14000_1017["$"] : null;
        const obj14000_4018 = valuesPop?.find(item => item["@area"] === "14000" && item["@cat02"] === "04018");
        const get14000_4018 = obj14000_4018 ? obj14000_4018["$"] : null;

        setKanagawaZeroFirst(get14000_1001);
        setKanagawaZeroLater(get14000_1002);
        setKanagawaOneFirst(get14000_1003);
        setKanagawaOneLater(get14000_1004);
        setKanagawaTwoFirst(get14000_1005);
        setKanagawaTwoLater(get14000_1006);
        setKanagawaThreeFirst(get14000_1007);
        setKanagawaThreeLater(get14000_1008);
        setKanagawaFourFirst(get14000_1009);
        setKanagawaFourLater(get14000_1010);
        setKanagawaFiveFirst(get14000_1011);
        setKanagawaFiveLater(get14000_1012);
        setKanagawaSixFirst(get14000_1013);
        setKanagawaSixLater(get14000_1014);
        setKanagawaSevenFirst(get14000_1015);
        setKanagawaSevenLater(get14000_1016);
        setKanagawaEightFirst(get14000_1017);
        setKanagawaEightLaterOver(get14000_4018);

        //埼玉
        const obj11000_1001 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01001");
        const get11000_1001 = obj11000_1001 ? obj11000_1001["$"] : null;
        const obj11000_1002 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01002");
        const get11000_1002 = obj11000_1002 ? obj11000_1002["$"] : null;
        const obj11000_1003 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01003");
        const get11000_1003 = obj11000_1003 ? obj11000_1003["$"] : null;
        const obj11000_1004 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01004");
        const get11000_1004 = obj11000_1004 ? obj11000_1004["$"] : null;
        const obj11000_1005 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01005");
        const get11000_1005 = obj11000_1005 ? obj11000_1005["$"] : null;
        const obj11000_1006 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01006");
        const get11000_1006 = obj11000_1006 ? obj11000_1006["$"] : null;
        const obj11000_1007 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01007");
        const get11000_1007 = obj11000_1007 ? obj11000_1007["$"] : null;
        const obj11000_1008 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01008");
        const get11000_1008 = obj11000_1008 ? obj11000_1008["$"] : null;
        const obj11000_1009 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01009");
        const get11000_1009 = obj11000_1009 ? obj11000_1009["$"] : null;
        const obj11000_1010 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01010");
        const get11000_1010 = obj11000_1010 ? obj11000_1010["$"] : null;
        const obj11000_1011 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01011");
        const get11000_1011 = obj11000_1011 ? obj11000_1011["$"] : null;
        const obj11000_1012 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01012");
        const get11000_1012 = obj11000_1012 ? obj11000_1012["$"] : null;
        const obj11000_1013 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01013");
        const get11000_1013 = obj11000_1013 ? obj11000_1013["$"] : null;
        const obj11000_1014 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01014");
        const get11000_1014 = obj11000_1014 ? obj11000_1014["$"] : null;
        const obj11000_1015 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01015");
        const get11000_1015 = obj11000_1015 ? obj11000_1015["$"] : null;
        const obj11000_1016 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01016");
        const get11000_1016 = obj11000_1016 ? obj11000_1016["$"] : null;
        const obj11000_1017 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "01017");
        const get11000_1017 = obj11000_1017 ? obj11000_1017["$"] : null;
        const obj11000_4018 = valuesPop?.find(item => item["@area"] === "11000" && item["@cat02"] === "04018");
        const get11000_4018 = obj11000_4018 ? obj11000_4018["$"] : null;

        setSaitamaZeroFirst(get11000_1001);
        setSaitamaZeroLater(get11000_1002);
        setSaitamaOneFirst(get11000_1003);
        setSaitamaOneLater(get11000_1004);
        setSaitamaTwoFirst(get11000_1005);
        setSaitamaTwoLater(get11000_1006);
        setSaitamaThreeFirst(get11000_1007);
        setSaitamaThreeLater(get11000_1008);
        setSaitamaFourFirst(get11000_1009);
        setSaitamaFourLater(get11000_1010);
        setSaitamaFiveFirst(get11000_1011);
        setSaitamaFiveLater(get11000_1012);
        setSaitamaSixFirst(get11000_1013);
        setSaitamaSixLater(get11000_1014);
        setSaitamaSevenFirst(get11000_1015);
        setSaitamaSevenLater(get11000_1016);
        setSaitamaEightFirst(get11000_1017);
        setSaitamaEightLaterOver(get11000_4018);

        //千葉
        const obj12000_1001 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01001");
        const get12000_1001 = obj12000_1001 ? obj12000_1001["$"] : null;
        const obj12000_1002 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01002");
        const get12000_1002 = obj12000_1002 ? obj12000_1002["$"] : null;
        const obj12000_1003 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01003");
        const get12000_1003 = obj12000_1003 ? obj12000_1003["$"] : null;
        const obj12000_1004 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01004");
        const get12000_1004 = obj12000_1004 ? obj12000_1004["$"] : null;
        const obj12000_1005 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01005");
        const get12000_1005 = obj12000_1005 ? obj12000_1005["$"] : null;
        const obj12000_1006 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01006");
        const get12000_1006 = obj12000_1006 ? obj12000_1006["$"] : null;
        const obj12000_1007 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01007");
        const get12000_1007 = obj12000_1007 ? obj12000_1007["$"] : null;
        const obj12000_1008 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01008");
        const get12000_1008 = obj12000_1008 ? obj12000_1008["$"] : null;
        const obj12000_1009 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01009");
        const get12000_1009 = obj12000_1009 ? obj12000_1009["$"] : null;
        const obj12000_1010 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01010");
        const get12000_1010 = obj12000_1010 ? obj12000_1010["$"] : null;
        const obj12000_1011 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01011");
        const get12000_1011 = obj12000_1011 ? obj12000_1011["$"] : null;
        const obj12000_1012 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01012");
        const get12000_1012 = obj12000_1012 ? obj12000_1012["$"] : null;
        const obj12000_1013 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01013");
        const get12000_1013 = obj12000_1013 ? obj12000_1013["$"] : null;
        const obj12000_1014 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01014");
        const get12000_1014 = obj12000_1014 ? obj12000_1014["$"] : null;
        const obj12000_1015 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01015");
        const get12000_1015 = obj12000_1015 ? obj12000_1015["$"] : null;
        const obj12000_1016 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01016");
        const get12000_1016 = obj12000_1016 ? obj12000_1016["$"] : null;
        const obj12000_1017 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "01017");
        const get12000_1017 = obj12000_1017 ? obj12000_1017["$"] : null;
        const obj12000_4018 = valuesPop?.find(item => item["@area"] === "12000" && item["@cat02"] === "04018");
        const get12000_4018 = obj12000_4018 ? obj12000_4018["$"] : null;

        setChibaZeroFirst(get12000_1001);
        setChibaZeroLater(get12000_1002);
        setChibaOneFirst(get12000_1003);
        setChibaOneLater(get12000_1004);
        setChibaTwoFirst(get12000_1005);
        setChibaTwoLater(get12000_1006);
        setChibaThreeFirst(get12000_1007);
        setChibaThreeLater(get12000_1008);
        setChibaFourFirst(get12000_1009);
        setChibaFourLater(get12000_1010);
        setChibaFiveFirst(get12000_1011);
        setChibaFiveLater(get12000_1012);
        setChibaSixFirst(get12000_1013);
        setChibaSixLater(get12000_1014);
        setChibaSevenFirst(get12000_1015);
        setChibaSevenLater(get12000_1016);
        setChibaEightFirst(get12000_1017);
        setChibaEightLaterOver(get12000_4018);

        //茨城
        const obj08000_1001 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01001");
        const get08000_1001 = obj08000_1001 ? obj08000_1001["$"] : null;
        const obj08000_1002 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01002");
        const get08000_1002 = obj08000_1002 ? obj08000_1002["$"] : null;
        const obj08000_1003 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01003");
        const get08000_1003 = obj08000_1003 ? obj08000_1003["$"] : null;
        const obj08000_1004 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01004");
        const get08000_1004 = obj08000_1004 ? obj08000_1004["$"] : null;
        const obj08000_1005 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01005");
        const get08000_1005 = obj08000_1005 ? obj08000_1005["$"] : null;
        const obj08000_1006 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01006");
        const get08000_1006 = obj08000_1006 ? obj08000_1006["$"] : null;
        const obj08000_1007 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01007");
        const get08000_1007 = obj08000_1007 ? obj08000_1007["$"] : null;
        const obj08000_1008 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01008");
        const get08000_1008 = obj08000_1008 ? obj08000_1008["$"] : null;
        const obj08000_1009 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01009");
        const get08000_1009 = obj08000_1009 ? obj08000_1009["$"] : null;
        const obj08000_1010 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01010");
        const get08000_1010 = obj08000_1010 ? obj08000_1010["$"] : null;
        const obj08000_1011 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01011");
        const get08000_1011 = obj08000_1011 ? obj08000_1011["$"] : null;
        const obj08000_1012 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01012");
        const get08000_1012 = obj08000_1012 ? obj08000_1012["$"] : null;
        const obj08000_1013 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01013");
        const get08000_1013 = obj08000_1013 ? obj08000_1013["$"] : null;
        const obj08000_1014 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01014");
        const get08000_1014 = obj08000_1014 ? obj08000_1014["$"] : null;
        const obj08000_1015 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01015");
        const get08000_1015 = obj08000_1015 ? obj08000_1015["$"] : null;
        const obj08000_1016 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01016");
        const get08000_1016 = obj08000_1016 ? obj08000_1016["$"] : null;
        const obj08000_1017 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "01017");
        const get08000_1017 = obj08000_1017 ? obj08000_1017["$"] : null;
        const obj08000_4018 = valuesPop?.find(item => item["@area"] === "08000" && item["@cat02"] === "04018");
        const get08000_4018 = obj08000_4018 ? obj08000_4018["$"] : null;

        setIbarakiZeroFirst(get08000_1001);
        setIbarakiZeroLater(get08000_1002);
        setIbarakiOneFirst(get08000_1003);
        setIbarakiOneLater(get08000_1004);
        setIbarakiTwoFirst(get08000_1005);
        setIbarakiTwoLater(get08000_1006);
        setIbarakiThreeFirst(get08000_1007);
        setIbarakiThreeLater(get08000_1008);
        setIbarakiFourFirst(get08000_1009);
        setIbarakiFourLater(get08000_1010);
        setIbarakiFiveFirst(get08000_1011);
        setIbarakiFiveLater(get08000_1012);
        setIbarakiSixFirst(get08000_1013);
        setIbarakiSixLater(get08000_1014);
        setIbarakiSevenFirst(get08000_1015);
        setIbarakiSevenLater(get08000_1016);
        setIbarakiEightFirst(get08000_1017);
        setIbarakiEightLaterOver(get08000_4018);

        //栃木
        const obj09000_1001 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01001");
        const get09000_1001 = obj09000_1001 ? obj09000_1001["$"] : null;
        const obj09000_1002 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01002");
        const get09000_1002 = obj09000_1002 ? obj09000_1002["$"] : null;
        const obj09000_1003 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01003");
        const get09000_1003 = obj09000_1003 ? obj09000_1003["$"] : null;
        const obj09000_1004 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01004");
        const get09000_1004 = obj09000_1004 ? obj09000_1004["$"] : null;
        const obj09000_1005 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01005");
        const get09000_1005 = obj09000_1005 ? obj09000_1005["$"] : null;
        const obj09000_1006 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01006");
        const get09000_1006 = obj09000_1006 ? obj09000_1006["$"] : null;
        const obj09000_1007 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01007");
        const get09000_1007 = obj09000_1007 ? obj09000_1007["$"] : null;
        const obj09000_1008 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01008");
        const get09000_1008 = obj09000_1008 ? obj09000_1008["$"] : null;
        const obj09000_1009 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01009");
        const get09000_1009 = obj09000_1009 ? obj09000_1009["$"] : null;
        const obj09000_1010 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01010");
        const get09000_1010 = obj09000_1010 ? obj09000_1010["$"] : null;
        const obj09000_1011 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01011");
        const get09000_1011 = obj09000_1011 ? obj09000_1011["$"] : null;
        const obj09000_1012 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01012");
        const get09000_1012 = obj09000_1012 ? obj09000_1012["$"] : null;
        const obj09000_1013 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01013");
        const get09000_1013 = obj09000_1013 ? obj09000_1013["$"] : null;
        const obj09000_1014 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01014");
        const get09000_1014 = obj09000_1014 ? obj09000_1014["$"] : null;
        const obj09000_1015 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01015");
        const get09000_1015 = obj09000_1015 ? obj09000_1015["$"] : null;
        const obj09000_1016 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01016");
        const get09000_1016 = obj09000_1016 ? obj09000_1016["$"] : null;
        const obj09000_1017 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "01017");
        const get09000_1017 = obj09000_1017 ? obj09000_1017["$"] : null;
        const obj09000_4018 = valuesPop?.find(item => item["@area"] === "09000" && item["@cat02"] === "04018");
        const get09000_4018 = obj09000_4018 ? obj09000_4018["$"] : null;

        setTochigiZeroFirst(get09000_1001);
        setTochigiZeroLater(get09000_1002);
        setTochigiOneFirst(get09000_1003);
        setTochigiOneLater(get09000_1004);
        setTochigiTwoFirst(get09000_1005);
        setTochigiTwoLater(get09000_1006);
        setTochigiThreeFirst(get09000_1007);
        setTochigiThreeLater(get09000_1008);
        setTochigiFourFirst(get09000_1009);
        setTochigiFourLater(get09000_1010);
        setTochigiFiveFirst(get09000_1011);
        setTochigiFiveLater(get09000_1012);
        setTochigiSixFirst(get09000_1013);
        setTochigiSixLater(get09000_1014);
        setTochigiSevenFirst(get09000_1015);
        setTochigiSevenLater(get09000_1016);
        setTochigiEightFirst(get09000_1017);
        setTochigiEightLaterOver(get09000_4018);

        //群馬
        const obj10000_1001 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01001");
        const get10000_1001 = obj10000_1001 ? obj10000_1001["$"] : null;
        const obj10000_1002 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01002");
        const get10000_1002 = obj10000_1002 ? obj10000_1002["$"] : null;
        const obj10000_1003 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01003");
        const get10000_1003 = obj10000_1003 ? obj10000_1003["$"] : null;
        const obj10000_1004 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01004");
        const get10000_1004 = obj10000_1004 ? obj10000_1004["$"] : null;
        const obj10000_1005 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01005");
        const get10000_1005 = obj10000_1005 ? obj10000_1005["$"] : null;
        const obj10000_1006 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01006");
        const get10000_1006 = obj10000_1006 ? obj10000_1006["$"] : null;
        const obj10000_1007 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01007");
        const get10000_1007 = obj10000_1007 ? obj10000_1007["$"] : null;
        const obj10000_1008 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01008");
        const get10000_1008 = obj10000_1008 ? obj10000_1008["$"] : null;
        const obj10000_1009 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01009");
        const get10000_1009 = obj10000_1009 ? obj10000_1009["$"] : null;
        const obj10000_1010 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01010");
        const get10000_1010 = obj10000_1010 ? obj10000_1010["$"] : null;
        const obj10000_1011 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01011");
        const get10000_1011 = obj10000_1011 ? obj10000_1011["$"] : null;
        const obj10000_1012 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01012");
        const get10000_1012 = obj10000_1012 ? obj10000_1012["$"] : null;
        const obj10000_1013 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01013");
        const get10000_1013 = obj10000_1013 ? obj10000_1013["$"] : null;
        const obj10000_1014 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01014");
        const get10000_1014 = obj10000_1014 ? obj10000_1014["$"] : null;
        const obj10000_1015 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01015");
        const get10000_1015 = obj10000_1015 ? obj10000_1015["$"] : null;
        const obj10000_1016 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01016");
        const get10000_1016 = obj10000_1016 ? obj10000_1016["$"] : null;
        const obj10000_1017 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "01017");
        const get10000_1017 = obj10000_1017 ? obj10000_1017["$"] : null;
        const obj10000_4018 = valuesPop?.find(item => item["@area"] === "10000" && item["@cat02"] === "04018");
        const get10000_4018 = obj10000_4018 ? obj10000_4018["$"] : null;

        setGunmaZeroFirst(get10000_1001);
        setGunmaZeroLater(get10000_1002);
        setGunmaOneFirst(get10000_1003);
        setGunmaOneLater(get10000_1004);
        setGunmaTwoFirst(get10000_1005);
        setGunmaTwoLater(get10000_1006);
        setGunmaThreeFirst(get10000_1007);
        setGunmaThreeLater(get10000_1008);
        setGunmaFourFirst(get10000_1009);
        setGunmaFourLater(get10000_1010);
        setGunmaFiveFirst(get10000_1011);
        setGunmaFiveLater(get10000_1012);
        setGunmaSixFirst(get10000_1013);
        setGunmaSixLater(get10000_1014);
        setGunmaSevenFirst(get10000_1015);
        setGunmaSevenLater(get10000_1016);
        setGunmaEightFirst(get10000_1017);
        setGunmaEightLaterOver(get10000_4018);

        //山梨
        const obj19000_1001 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01001");
        const get19000_1001 = obj19000_1001 ? obj19000_1001["$"] : null;
        const obj19000_1002 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01002");
        const get19000_1002 = obj19000_1002 ? obj19000_1002["$"] : null;
        const obj19000_1003 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01003");
        const get19000_1003 = obj19000_1003 ? obj19000_1003["$"] : null;
        const obj19000_1004 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01004");
        const get19000_1004 = obj19000_1004 ? obj19000_1004["$"] : null;
        const obj19000_1005 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01005");
        const get19000_1005 = obj19000_1005 ? obj19000_1005["$"] : null;
        const obj19000_1006 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01006");
        const get19000_1006 = obj19000_1006 ? obj19000_1006["$"] : null;
        const obj19000_1007 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01007");
        const get19000_1007 = obj19000_1007 ? obj19000_1007["$"] : null;
        const obj19000_1008 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01008");
        const get19000_1008 = obj19000_1008 ? obj19000_1008["$"] : null;
        const obj19000_1009 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01009");
        const get19000_1009 = obj19000_1009 ? obj19000_1009["$"] : null;
        const obj19000_1010 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01010");
        const get19000_1010 = obj19000_1010 ? obj19000_1010["$"] : null;
        const obj19000_1011 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01011");
        const get19000_1011 = obj19000_1011 ? obj19000_1011["$"] : null;
        const obj19000_1012 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01012");
        const get19000_1012 = obj19000_1012 ? obj19000_1012["$"] : null;
        const obj19000_1013 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01013");
        const get19000_1013 = obj19000_1013 ? obj19000_1013["$"] : null;
        const obj19000_1014 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01014");
        const get19000_1014 = obj19000_1014 ? obj19000_1014["$"] : null;
        const obj19000_1015 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01015");
        const get19000_1015 = obj19000_1015 ? obj19000_1015["$"] : null;
        const obj19000_1016 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01016");
        const get19000_1016 = obj19000_1016 ? obj19000_1016["$"] : null;
        const obj19000_1017 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "01017");
        const get19000_1017 = obj19000_1017 ? obj19000_1017["$"] : null;
        const obj19000_4018 = valuesPop?.find(item => item["@area"] === "19000" && item["@cat02"] === "04018");
        const get19000_4018 = obj19000_4018 ? obj19000_4018["$"] : null;

        setYamanashiZeroFirst(get19000_1001);
        setYamanashiZeroLater(get19000_1002);
        setYamanashiOneFirst(get19000_1003);
        setYamanashiOneLater(get19000_1004);
        setYamanashiTwoFirst(get19000_1005);
        setYamanashiTwoLater(get19000_1006);
        setYamanashiThreeFirst(get19000_1007);
        setYamanashiThreeLater(get19000_1008);
        setYamanashiFourFirst(get19000_1009);
        setYamanashiFourLater(get19000_1010);
        setYamanashiFiveFirst(get19000_1011);
        setYamanashiFiveLater(get19000_1012);
        setYamanashiSixFirst(get19000_1013);
        setYamanashiSixLater(get19000_1014);
        setYamanashiSevenFirst(get19000_1015);
        setYamanashiSevenLater(get19000_1016);
        setYamanashiEightFirst(get19000_1017);
        setYamanashiEightLaterOver(get19000_4018);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    //fetchList();
    fetchData();
  }, []);

  const dataArray = [
    { age: labelEightLaterOver,Tokyo: tokyoEightLaterOver, Kanagawa: kanagawaEightLaterOver, Saitama: saitamaEightLaterOver, Chiba: chibaEightLaterOver, Ibaraki: ibarakiEightLaterOver, Tochigi: tochigiEightLaterOver, Gunma: gunmaEightLaterOver, Yamanashi: yamanashiEightLaterOver},
    { age: labeleightfirst,Tokyo: tokyoeightfirst, Kanagawa: kanagawaeightfirst, Saitama: saitamaeightfirst, Chiba: chibaeightfirst, Ibaraki: ibarakieightfirst, Tochigi: tochigieightfirst, Gunma: gunmaeightfirst, Yamanashi: yamanashieightfirst},
    { age: labelsevenlater,Tokyo: tokyosevenlater, Kanagawa: kanagawasevenlater, Saitama: saitamasevenlater, Chiba: chibasevenlater, Ibaraki: ibarakisevenlater, Tochigi: tochigisevenlater, Gunma: gunmasevenlater, Yamanashi: yamanashisevenlater},
    { age: labelsevenfirst,Tokyo: tokyosevenfirst, Kanagawa: kanagawasevenfirst, Saitama: saitamasevenfirst, Chiba: chibasevenfirst, Ibaraki: ibarakisevenfirst, Tochigi: tochigisevenfirst, Gunma: gunmasevenfirst, Yamanashi: yamanashisevenfirst},
    { age: labelsixlater,Tokyo: tokyosixlater, Kanagawa: kanagawasixlater, Saitama: saitamasixlater, Chiba: chibasixlater, Ibaraki: ibarakisixlater, Tochigi: tochigisixlater, Gunma: gunmasixlater, Yamanashi: yamanashisixlater},
    { age: labelsixfirst,Tokyo: tokyosixfirst, Kanagawa: kanagawasixfirst, Saitama: saitamasixfirst, Chiba: chibasixfirst, Ibaraki: ibarakisixfirst, Tochigi: tochigisixfirst, Gunma: gunmasixfirst, Yamanashi: yamanashisixfirst},
    { age: labelfivelater,Tokyo: tokyofivelater, Kanagawa: kanagawafivelater, Saitama: saitamafivelater, Chiba: chibafivelater, Ibaraki: ibarakifivelater, Tochigi: tochigifivelater, Gunma: gunmafivelater, Yamanashi: yamanashifivelater},
    { age: labelfivefirst,Tokyo: tokyofivefirst, Kanagawa: kanagawafivefirst, Saitama: saitamafivefirst, Chiba: chibafivefirst, Ibaraki: ibarakifivefirst, Tochigi: tochigifivefirst, Gunma: gunmafivefirst, Yamanashi: yamanashifivefirst},
    { age: labelfourlater,Tokyo: tokyofourlater, Kanagawa: kanagawafourlater, Saitama: saitamafourlater, Chiba: chibafourlater, Ibaraki: ibarakifourlater, Tochigi: tochigifourlater, Gunma: gunmafourlater, Yamanashi: yamanashifourlater},
    { age: labelfourfirst,Tokyo: tokyofourfirst, Kanagawa: kanagawafourfirst, Saitama: saitamafourfirst, Chiba: chibafourfirst, Ibaraki: ibarakifourfirst, Tochigi: tochigifourfirst, Gunma: gunmafourfirst, Yamanashi: yamanashifourfirst},
    { age: labelthreelater,Tokyo: tokyothreelater, Kanagawa: kanagawathreelater, Saitama: saitamathreelater, Chiba: chibathreelater, Ibaraki: ibarakithreelater, Tochigi: tochigithreelater, Gunma: gunmathreelater, Yamanashi: yamanashithreelater},
    { age: labelthreefirst,Tokyo: tokyothreefirst, Kanagawa: kanagawathreefirst, Saitama: saitamathreefirst, Chiba: chibathreefirst, Ibaraki: ibarakithreefirst, Tochigi: tochigithreefirst, Gunma: gunmathreefirst, Yamanashi: yamanashithreefirst},
    { age: labeltwolater,Tokyo: tokyotwolater, Kanagawa: kanagawatwolater, Saitama: saitamatwolater, Chiba: chibatwolater, Ibaraki: ibarakitwolater, Tochigi: tochigitwolater, Gunma: gunmatwolater, Yamanashi: yamanashitwolater},
    { age: labeltwofirst,Tokyo: tokyotwofirst, Kanagawa: kanagawatwofirst, Saitama: saitamatwofirst, Chiba: chibatwofirst, Ibaraki: ibarakitwofirst, Tochigi: tochigitwofirst, Gunma: gunmatwofirst, Yamanashi: yamanashitwofirst},
    { age: labelonelater,Tokyo: tokyoonelater, Kanagawa: kanagawaonelater, Saitama: saitamaonelater, Chiba: chibaonelater, Ibaraki: ibarakionelater, Tochigi: tochigionelater, Gunma: gunmaonelater, Yamanashi: yamanashionelater},
    { age: labelonefirst,Tokyo: tokyoonefirst, Kanagawa: kanagawaonefirst, Saitama: saitamaonefirst, Chiba: chibaonefirst, Ibaraki: ibarakionefirst, Tochigi: tochigionefirst, Gunma: gunmaonefirst, Yamanashi: yamanashionefirst},
    { age: labelzerolater,Tokyo: tokyozerolater, Kanagawa: kanagawazerolater, Saitama: saitamazerolater, Chiba: chibazerolater, Ibaraki: ibarakizerolater, Tochigi: tochigizerolater, Gunma: gunmazerolater, Yamanashi: yamanashizerolater },
    { age: labelzerofirst, Tokyo: tokyozerofirst, Kanagawa: kanagawazerofirst, Saitama: saitamazerofirst, Chiba: chibazerofirst, Ibaraki: ibarakizerofirst, Tochigi: tochigizerofirst, Gunma: gunmazerofirst, Yamanashi: yamanashizerofirst },

  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const text = event.target.result;

      
      const scoreMap = parseCSV(text);　//csvからキーを作製　(千葉県_埼玉県:-50)
      //console.log(scoreMap); //ここで複合キー付きのオブジェクトができる
    
      const prefs = ['東京都', '神奈川県', '埼玉県', '千葉県', '茨城県', '栃木県', '群馬県', '山梨県']; //8都県
      let BestGroup  = [0, 0, 0, 0, 0, 0, 0, 0]; // パターンの一例

      // グルーピングパターンを生成
      const generateAllAssignments = (n, groupCount) => {
        const results = [];
  
        const dfs = (index, current) => {
          if (index === n) {
            results.push([...current]);
            return;
          }
          for (let i = 0; i < groupCount; i++) {
            current[index] = i;
            dfs(index + 1, current);
          }
        };
  
        dfs(0, []);
        return results; // パターンの一例 [0, 0, 0, 0, 0, 0, 0, 0];
      };
  
      // グルーピングのスコアを計算（アロー関数版）
      const calcScore = (grouping, prefs, scoreMap) => {
        let score = 0;
        for (let i = 0; i < prefs.length; i++) {
          for (let j = i + 1; j < prefs.length; j++) { //　i=0,j=1…7、i=4,j=5…7
            if (grouping[i] === grouping[j]) { //i番目とj番目のグループが同じなら
              const key = `${prefs[i]}_${prefs[j]}`;
              const altKey = `${prefs[j]}_${prefs[i]}`;
              score += scoreMap[key] ?? scoreMap[altKey] ?? 0; //存在すれば加算
            }
          }
        }
        return score;
      };
  
      // 最適グルーピングを探索（アロー関数版）
      const findBestGrouping = (prefs, scoreMap) => {
        let maxScore = -Infinity;
        let best = null;
  
        for (let groupCount = 1; groupCount <= 3; groupCount++) { //1グループから３グループまで網羅
          const groupings = generateAllAssignments(prefs.length, groupCount); //
          groupings.forEach(grouping => {
            const score = calcScore(grouping, prefs, scoreMap);
            if (score > maxScore) {
              maxScore = score;
              //console.log(best);

              best = grouping;  
              BestGroup = best;
            }
          });
        }
  
        return { bestGrouping: best, score: maxScore };
      };
  
      // ✅ 実行
      const result = findBestGrouping(prefs, scoreMap);
      //console.log(result);


      //
      const groupByLabels = (labels, prefectures) => { //prefsとBestGroupを紐づけ
        const groups = new Map();
      
        labels.forEach((label, i) => {
          const pref = prefectures[i];
          if (!groups.has(label)) {
            groups.set(label, []);
          }
          groups.get(label).push(pref);
        });
      
        return groups;
      };
      
      //
      const grouped = groupByLabels(BestGroup, prefs);

      //console.log(grouped);
            
      setGroupResult([
        grouped.get(0) || [],
        grouped.get(1) || [],
        grouped.get(2) || []
      ]);
    };
  
    reader.readAsText(file);   
  };

  //CSV解析
  const parseCSV = (csvText) => {
    const lines = csvText.trim().split("\n");
    const headers = lines[0].split(",").slice(1).map(h => h.trim()); // 県名部分
    const scoreMap = {};
  
    for (let i = 1; i < lines.length; i++) {
      const cells = lines[i].split(",");
      const from = cells[0];

      for (let j = 1; j < cells.length; j++) {
        const to = headers[j - 1];
        const value = cells[j];
  
        if (value !== "-" && value !== "") {
          const key = [from, to].sort().join("_");
          scoreMap[key] = parseInt(value, 10);
        }
      }
    }
    return scoreMap;
  };

  //色分け
  const setColorize2 = () => {
    if (groupResult[0].includes('東京都')) {
        setTokyoStyle({ color: 'red' });
      } else if (groupResult[1].includes('東京都')) {
        setTokyoStyle({ color: 'blue' });
      } else if (groupResult[2].includes('東京都')) {
        setTokyoStyle({ color: 'green' });
      }else {
        setTokyoStyle({});
      }
        if (groupResult[0].includes('神奈川県')) {
        setKanagawaStyle({ color: 'red' });
      } else if (groupResult[1].includes('神奈川県')) {
        setKanagawaStyle({ color: 'blue' });
      } else if (groupResult[2].includes('神奈川県')) {
        setKanagawaStyle({ color: 'green' });
      }else {
        setKanagawaStyle({});
      }
      if (groupResult[0].includes('埼玉県')) {
        setSaitamaStyle({ color: 'red' });
      } else if (groupResult[1].includes('埼玉県')) {
        setSaitamaStyle({ color: 'blue' });
      } else if (groupResult[2].includes('埼玉県')) {
        setSaitamaStyle({ color: 'green' });
      }else {
        setSaitamaStyle({});
      }
      if (groupResult[0].includes('千葉県')) {
        setChibaStyle({ color: 'red' });
      } else if (groupResult[1].includes('千葉県')) {
        setChibaStyle({ color: 'blue' });
      } else if (groupResult[2].includes('千葉県')) {
        setChibaStyle({ color: 'green' });
      }else {
        setChibaStyle({});
      }
      if (groupResult[0].includes('茨城県')) {
        setIbarakiStyle({ color: 'red' });
      } else if (groupResult[1].includes('茨城県')) {
        setIbarakiStyle({ color: 'blue' });
      } else if (groupResult[2].includes('茨城県')) {
        setIbarakiStyle({ color: 'green' });
      }else {
        setIbarakiStyle({});
      }
      if (groupResult[0].includes('栃木県')) {
        setTochigiStyle({ color: 'red' });
      } else if (groupResult[1].includes('栃木県')) {
        setTochigiStyle({ color: 'blue' });
      } else if (groupResult[2].includes('栃木県')) {
        setTochigiStyle({ color: 'green' });
      }else {
        setTochigiStyle({});
      }
      if (groupResult[0].includes('群馬県')) {
        setGunmaStyle({ color: 'red' });
      } else if (groupResult[1].includes('群馬県')) {
        setGunmaStyle({ color: 'blue' });
      } else if (groupResult[2].includes('群馬県')) {
        setGunmaStyle({ color: 'green' });
      }else {
        setGunmaStyle({});
      }
      if (groupResult[0].includes('山梨県')) {
        setYamanashiStyle({ color: 'red' });
      } else if (groupResult[1].includes('山梨県')) {
        setYamanashiStyle({ color: 'blue' });
      } else if (groupResult[2].includes('山梨県')) {
        setYamanashiStyle({ color: 'green' });
      }else {
        setYamanashiStyle({});
      }
    }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>単位(千人)</th>
            <th style={tokyoStyle}>東京都</th>
            <th style={kanagawaStyle}>神奈川県</th>
            <th style={saitamaStyle}>埼玉県</th>
            <th style={chibaStyle}>千葉県</th>
            <th style={ibarakiStyle}>茨城県</th>          
            <th style={tochigiStyle}>栃木県</th>
            <th style={gunmaStyle}>群馬県</th>
            <th style={yamanashiStyle}>山梨県</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item, index) => (
              <tr key={index}>
              <td>{item.age}</td>
              <td>{item.Tokyo}</td>
              <td>{item.Kanagawa}</td>
              <td>{item.Saitama}</td>
              <td>{item.Chiba}</td>
              <td>{item.Ibaraki}</td>
              <td>{item.Tochigi}</td>
              <td>{item.Gunma}</td>
              <td>{item.Yamanashi}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <input type="file" accept=".csv" onChange={handleCSVUpload} />
      <button onClick={() => setColorize2()}>色をつける</button>  

    </div>
  );

  /*
  <h1>リスト</h1>
  <pre>{JSON.stringify(list, null, 2)}</pre>
  <h1>総人口</h1>
  <pre>{JSON.stringify(data, null, 2)}</pre> 
  */

};

export default StatsData;
