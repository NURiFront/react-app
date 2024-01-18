import { Card } from "../ul/Cards/Cards";
import { Button } from "../ul/button/Button";
import { useState } from "react";
import "./Main.css";

const data = [
	{
		name: "Sinister",
		photo:
			"https://m.media-amazon.com/images/I/81mfiTrZsFL._AC_UF894,1000_QL80_.jpg",
		nameG: "Horor",
		id: 1
	},
	{
		name: "Заклятие",
		photo:
			"https://upload.wikimedia.org/wikipedia/ru/9/9b/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%97%D0%B0%D0%BA%D0%BB%D1%8F%D1%82%D0%B8%D0%B5%C2%BB.jpg",
		nameG: "Horor",
		id: 2
	},
	{
		name: "Поворот не туда",
		photo:
			"https://upload.wikimedia.org/wikipedia/ru/thumb/4/42/%D0%9F%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%82_%D0%BD%D0%B5_%D1%82%D1%83%D0%B4%D0%B0_3.jpg/216px-%D0%9F%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%82_%D0%BD%D0%B5_%D1%82%D1%83%D0%B4%D0%B0_3.jpg",
		nameG: "Horor",
		id: 3
	},
	{
		name: "Крампус",
		photo:
			"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/e6bf531d-14cf-4a25-b9b1-f93352beb485/600x900",
		nameG: "Horor",
		id: 4
	},
	{
		name: "Черное рождество",
		photo:
			"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/322b20d5-632e-419d-a428-f03eb3b8d213/600x900",
		nameG: "Horor",
		id: 5
	},
	{
		name: "Замёрзшие",
		photo:
			"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/a881d9f8-2621-4f87-ad0b-fd90834326c7/600x900",
		nameG: "Horor",
		id:6
	},
	{
		name: "Кибер Краш",
		photo:
			"https://thumbs.dfs.ivi.ru/storage33/contents/7/d/cbd54f8424d24f1ce3edec2f42063a.jpg/162x248/?q=85",
		nameG: "Korean Movie",
		id:7

	},
	{
		name: "Истинная красота",
		photo:
			"https://thumbs.dfs.ivi.ru/storage30/contents/7/a/25cdd2d2a911a6952105caef84ef6e.jpg",
		nameG: "Korean Movie",
		id:8
	},
	{
		name: "Демон",
		photo:
			"https://thumbs.dfs.ivi.ru/storage6/contents/5/a/6df7e1b660c9ee0314628404adc365.jpg",
		nameG: "Korean Movie",
		id:9
	},
	{
		name: "Силачка До Бон Су",
		photo: "https://dddkursk.ru/image/lenta/077583.1b.jpg?s79wx3",
		nameG: "Korean Movie",
		id:10
	},
	{
		name: "Я знаю, но",
		photo: "https://doramy.club/wp-content/uploads/2021/06/ya-znayu-no.jpg",
		nameG: "Korean Movie",
		id:11
	},
	{
		name: "Наследники",
		photo: "https://i.otzovik.com/objects/b/210000/203254.png",
		nameG: "Korean Movie",
		id:12
	},
	{
		name: "Элементарно",
		photo:
			"https://n1s1.hsmedia.ru/5b/88/10/5b8810800181f88705307da7ee2b4439/600x600_1_8813a5bc554a6e3c1b2c70031dbce21c@1036x1036_0xac120004_464440591685275251.jpeg",
		nameG: "Cartoon",
		id:13
	},
	{
		name: "Аватар",
		photo: "https://static.tvtropes.org/pmwiki/pub/images/avatar_poster_4.png",
		nameG: "Cartoon",
		id:14
	},
	{
		name: "Simpsons",
		photo:
			"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1200/675/1c1efe99-the-simpsons-660-ap.jpg?ve=1&tl=1",
		nameG: "Cartoon",
		id:15
	},
	{
		name: "Tom & Jerry",
		photo:
			"https://images.caxton.co.za/wp-content/uploads/sites/35/2018/03/OnlineCartoonsTom_12731.jpg",
		nameG: "Cartoon",
		id:16
	},
	{
		name: "Dori",
		photo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrngNS2XmT4KT9F7wChnGRZMqzL7b4Shvfgw&usqp=CAU",
		nameG: "Cartoon",
		id:17
	},
	{
		name: "Moana",
		photo:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbC0dr9Hb6xFJVF-NgyCNMPzppRJvMGzMvA&usqp=CAU",
		nameG: "Cartoon",
		id:18
	},

	{
		name: "Так близко к горизонту",
		photo:
			"https://upload.wikimedia.org/wikipedia/ru/b/b4/%D0%A2%D0%B0%D0%BA_%D0%B1%D0%BB%D0%B8%D0%B7%D0%BA%D0%BE_%D0%BA_%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D1%83.jpg",
		nameG: "Romantic",
		id:19
	},
	{
		name: "После",
		photo:
			"https://thumbs.dfs.ivi.ru/storage6/contents/8/5/23af7e249abd09deff78afd792d471.jpg",
		nameG: "Romantic",
		id:20
	},
	{
		name: "Время между нами",
		photo:
			"https://images.thevoicemag.ru/upload/img_cache/938/938be36ef98a8d0320c9b02911c97861_cropped_666x952.jpg",
		nameG: "Romantic",
		id:21
	},
	{
		name: "Город Ангелов",
		photo:
			"https://s1.afisha.ru/mediastorage/f0/e2/a49e3987b1e94e51adabc41ae2f0.jpg",
		nameG: "Romantic",
		id:22
	},
	{
		name: "Три метра над уровнем неба",
		photo:
			"https://n1s2.hsmedia.ru/eb/34/6e/eb346ed32b65f1fdbdf8569b87b801db/562x800_0xac120003_19984846791609977893.jpg",
		nameG: "Romantic",
		id:23
	},
	{
		name: "Титаник",
		photo:
			"https://www.film.ru/sites/default/files/images/MV5BMjI3NjcxNTAyM15BMl5BanBnXkFtZTcwMDkwNDUzNw@@__V1_SX1366_CR0,0,1366,919_AL_.jpg",
		nameG: "Romantic",
		id:24
	},
];

const Main = () => {
	const [stateResult1, setStateResult1] = useState(data);
	const [stateresult, setStateResult] = useState("");
	function getCards(stateresult) {
		const result = data.filter((item) => item.nameG === stateresult);
		setStateResult1(result);
		console.log(result);
	}
	function resultGet(e) {
		setStateResult(e.target.innerText);
		getCards(e.target.innerText);
	}

	function AllCards() {
		setStateResult1(data);
	}
	return (
		<div>
			<div>
				<div className="allButtons">
					<Button text="Horor" className="button1" onClick={resultGet} />
					<Button text="Cartoon" className="button1" onClick={resultGet} />
					<Button text="Korean Movie" className="button1" onClick={resultGet} />
					<Button text="Romantic" className="button1" onClick={resultGet} />
					<Button text="All Genres" className="button1" onClick={AllCards} />
				</div>
				<div className="cards">
					<Card start={stateresult} data={stateResult1} />
				</div>
			</div>
		</div>
	);
};

export default Main;
