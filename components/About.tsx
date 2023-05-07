import React from 'react';
import {Trans, useTranslation} from "react-i18next";

function About() {
    const {t, i18n} = useTranslation();
    return (
        <div
            className='pt-20 pb-40 text-center md:text-left md:flex-row max-w-7xl  justify-evenly border-b-2 border-gray-500'>
            <div className='mb-10'>
                <h1 className='mb-2 text-4xl font-extrabold leading-tight  '><Trans t={t}>about_me</Trans></h1>
                <span className='text-xl'>my story</span>
            </div>
            <span>Tapasztalt fejlesztő vagyok és előző munkahelyeim révén széles spektrumú ismeretekkel rendelkezem különböző technológiákról és módszerekről. Számos projektet készítettem, amelyek közül sokat a mai napig használnak. Mindig készen állok új módszerek és technológiák elsajátítására. Szeretek csapatban dolgozni, de az se okoz gondot, ha önállóan kell egy kihívással megküzdenem. Proaktív személynek gondolom magam, egy projekt megbeszélés alkalmával merem feldobni az ötletemet a csapatnak. Kíváncsi vagyok az új dolgokra és szeretek tanulni. Szeretem fejleszteni magam. Ezért is van annyiféle végzettség az önéletrajzomban. Szabadidőmbe szeretek olvasni, de nincs kifejezett célzott érdeklődésem, érdekel minden. Legutóbb Index által kiadott Ma is tanultam valamit könyvet olvastam, de előtte Almási Kitti könyveit olvastam. illetve még szabadidőmben a fotózásnak is áldozok mindenféle témakörben (portré, természetfotó). Díjazott képem is vannak, talán a legkiemelkedőbb absztrakt témakörben.</span>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div><strong>Születési idő:</strong> 1987.10.27</div>
                <div><strong>Telefonszám:</strong> 0620/2686853</div>
                <div><strong>Cím:</strong> 9022 Győr, Liszt Ferenc utca 36.</div>
                <div><strong>E-mail:</strong> alcsutia@gmail.com</div>
            </div>
        </div>
    );
}

export default About;
