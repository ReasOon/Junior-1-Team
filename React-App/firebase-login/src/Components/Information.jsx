import React from "react";

export default function Information({ title, imformation_path, content, link_url }) {

    const dummy = {
        results: [
            {
                information_path: "https://cdn.pixabay.com/photo/2022/10/01/21/25/woman-7492273_1280.jpg",
                title: "Non-smoking method",
                content: "╭◉␣◉╮",
                link_url: "https://www.paju.go.kr/www/www_02/health/healthy/healthy_03/healthy_03_04.jsp"
            },
            {

                information_path: "https://cdn.pixabay.com/photo/2023/12/25/14/42/ai-generated-8468683_1280.png",
                title: "Foods to Help Non-Smoking",
                content: "🍑🥬🥛",
                link_url: "https://www.segye.com/newsView/20161230001498"
            },
            {

                information_path: "https://cdn.pixabay.com/photo/2017/10/13/22/31/athlete-2849220_1280.png",
                title: "Exercise to Help Non-Smoking",
                content: "(੭•̀ᴗ•̀)੭",
                link_url: "https://blog.naver.com/nosmokeguide9030/222429943218"
            },
            {

                information_path: "https://cdn.pixabay.com/photo/2017/12/30/07/13/mountain-climbing-3049433_1280.png",
                title: "Hobby",
                content: "⸜(*◉ ᴗ ◉)⸝",
                link_url: "https://sbcs.tistory.com/entry/%EC%9A%B0%EB%A6%AC%EB%82%98%EB%9D%BC%EC%B7%A8%EB%AF%B8%EC%88%9C%EC%9C%84-%EC%97%B0%EB%A0%B9%EB%B3%84%EC%B7%A8%EB%AF%B8%EC%83%9D%ED%99%9C-%EC%B7%A8%EB%AF%B8%EC%A2%85%EB%A5%98-%EC%B6%94%EC%B2%9C"
            },
            {

                information_path: "https://cdn.pixabay.com/photo/2021/08/03/10/28/hospital-6519033_1280.png",
                title: "Public health center Non-smoking clinic",
                content: "🏥",
                link_url: "https://nosmk.khepi.or.kr/nsk/ntcc/subIndex/66.do"
            },

            {

                information_path: "https://cdn.pixabay.com/photo/2014/04/02/17/03/freedom-307791_1280.png",
                title: "Body changes after Non-smoking",
                content: "ദ്ദി(⩌ᴗ⩌)",
                link_url: "https://m.blog.naver.com/PostView.naver?blogId=mohw2016&logNo=221895895699&referrerCode=0&searchKeyword=%EA%B8%88%EC%97%B0"
            },

            {

                information_path: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTVfMTMg%2FMDAxNzA1MjkxNzcyNjMx.frTzL--afOEMzVwct3j6LngXJI4Apr0WDaZlGnOe4Kcg.4aPsriX0mcsqCdlNvz5dZkQlTJtLrkUIO4L0sXVAAOwg.JPEG.hamaskin9286%2FCK_ti013a21904.jpg&type=sc960_832",
                title: "Risk and Health Effects of Smoking",
                content: "ᕙ(⇀‸↼)ᕗ",
                link_url: "https://blog.naver.com/goldenmeercat579/223174683808"
            },
            {
                information_path: "https://cdn.pixabay.com/photo/2021/09/04/04/42/pharmacy-6596996_1280.png",
                title: "A smoking cessation pill",
                content: "💊",
                link_url: "https://blog.naver.com/onyoupharmacy/223324100640"
            },
        ]
    };

    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "slategray"
            }}
        >
            <div //className="app-container" 
                style={{
                    display: " flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}
            >
                {
                    dummy.results.map((item) => {
                        return (
                            <div key={item.title}>
                                <h2>{item.title}</h2>
                                <img src={item.information_path} alt={item.title} />
                                <p>{item.content}</p>
                                <a href={item.link_url}>더 많은 정보 보기</a>
                            </div>
                        )
                    })
                }
            </div>
            <div //clsssName="information-container" 
                style={{
                    width: "150px",
                    margin: "10px",
                    backgroundColor: "skyblue",
                    color: "white",
                    borderRadius: "5px",
                    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)"
                }}
                onClick={() => { window.open(link_url) }}
            >
                <img
                    style={{
                        Width: "100px",
                        padding: "10px",
                        width: "200px"
                    }}
                    src={imformation_path}
                    alt="정보사진"
                />
                <div //className="information-info"
                    style={{
                        display: "flex",
                        padding: "20px",
                        width: "260px",
                        fontSize: "18px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "skyblue",
                        color: "white",
                        borderRadius: "5px",
                        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)"

                    }}
                >
                    <h4
                        style={{
                            margin: "0"
                        }}
                    >
                        {title}
                    </h4>
                    <span
                        style={{
                            marginLeft: "3px",
                            display: "block",
                            textAlign: "center"
                        }}
                    >
                        {content}
                    </span>

                </div>
            </div>
        </div>
    )
}
