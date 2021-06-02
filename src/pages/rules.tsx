import React, { ReactElement } from 'react';

// next
import Head from 'next/head';

// i18n
import useTranslation from 'next-translate/useTranslation';

// component

interface Props {
  children: ReactElement | string;
}

export default function rules({ children }: Props): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`common:rules`)}</title>
      </Head>
      <div>
        <div>
          <h1 className="text-6xl text-gray-50">{t(`rules:rulesContent`)}</h1>
          {children}

          {/* <h5>廚房</h5>
          <ul>
            <li>請共同⋯⋯</li>
            <li>使用過⋯⋯</li>
          </ul>
          <h5>浴室</h5>
          <ul>
            <li>請及時⋯⋯</li>
            <li>消耗品⋯⋯</li>
          </ul>
          <h5>生活習慣</h5>
          <ul>
            <li>公共曬衣⋯⋯</li>
            <li>開關大門⋯⋯</li>
          </ul>
          <h5>清潔部分</h5>
          <ul>
            <li>垃圾需分類⋯⋯</li>
            <li>請注意⋯⋯</li>
          </ul>
          <h5>備註</h5>
          <ul>
            <li>為維護⋯⋯</li>
            <li>報稅部分⋯⋯</li>
          </ul>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nobis neque esse sunt, inventore necessitatibus voluptates consequuntur
            accusamus at saepe hic quasi veniam voluptatibus illo eveniet dolor. Porro amet odit reprehenderit non, eum nihil a recusandae nisi totam,
            ipsum, magnam aspernatur repellat obcaecati omnis iste beatae adipisci inventore quo repellendus! Dolor, ut? Recusandae voluptate minima,
            voluptatibus iure dolores commodi distinctio quibusdam. Est quo quaerat nisi aliquid quis blanditiis tempora veniam nemo voluptatibus ad
            quos sequi qui iusto expedita repellendus dolor laboriosam ipsam, consectetur officiis. Consequuntur quas nostrum voluptas ipsam debitis
            dignissimos eveniet, libero dicta molestiae cum vero rem illum eum. Sequi at debitis quibusdam assumenda nesciunt, cupiditate
            exercitationem. Numquam eaque necessitatibus debitis facilis quia, quam, pariatur recusandae et architecto delectus ea at placeat cum iste
            temporibus repellendus. Consectetur nemo, et, repellendus, omnis impedit voluptate rem ullam dolorum ex totam autem! Non repellendus quas
            dolorem corrupti unde sed harum assumenda iusto aliquid voluptatem maxime iste nemo ad fugiat ipsum fuga voluptate, nisi tempora. Quisquam
            itaque libero praesentium error, cum voluptas dicta illum saepe minima ipsum adipisci, eveniet incidunt pariatur ea ratione. Officia iste
            laudantium accusamus fugit, dolorum harum sint laborum architecto doloribus similique, labore id ullam iusto asperiores quo excepturi
            facere. Necessitatibus iusto, repellendus adipisci culpa perspiciatis placeat accusantium in vel assumenda eaque minima doloribus
            voluptatem id. Quis amet blanditiis ducimus ipsum culpa tempore delectus pariatur exercitationem rem nobis earum possimus minima
            temporibus quisquam maxime, quam animi aperiam ab asperiores consequatur harum. Unde quia magnam molestiae perspiciatis nihil animi minima
            ipsum ad voluptatibus, suscipit quidem explicabo vitae quis aliquid, eligendi beatae temporibus. Quo quod repudiandae necessitatibus,
            unde, laborum ipsa iste officia sint asperiores nesciunt amet saepe, sed quae non explicabo qui rerum a facere culpa fugit minus eligendi!
            Unde ipsam quis amet iusto earum aliquid officiis autem architecto facilis. Maiores praesentium necessitatibus reiciendis. Ducimus vero
            facere magnam nemo, enim consequatur eaque corrupti? Nobis beatae quaerat, corporis atque culpa repellendus. Repellat eveniet ea, quasi
            provident vero non tempore, ad iste labore accusantium sequi, ipsum minima quidem eum cupiditate dolore. Deserunt voluptatibus officia
            tenetur dolores tempore commodi, eos laborum, magnam odit quasi magni, ut neque dolor harum assumenda ducimus! Optio aut amet nisi ratione
            repellendus placeat hic tempora nobis voluptatum maxime? Dignissimos quod veritatis et expedita consequuntur doloribus obcaecati. Aliquid
            aperiam velit ea rem. Asperiores dolores ipsam laborum optio explicabo inventore harum omnis in! Ex, voluptates nisi! Architecto corrupti
            nulla esse dignissimos maiores. Quasi corrupti recusandae culpa velit magni, atque id non omnis, ipsa officia architecto neque,
            repudiandae sunt! Doloremque dolores ipsam sapiente enim provident modi alias, corrupti mollitia quam quo voluptas soluta consectetur
            itaque numquam iste aspernatur minus cupiditate magni quidem labore eveniet quod, delectus debitis dolore. Illum dolorum ab accusantium
            saepe, itaque soluta! Obcaecati, tenetur, dolorem rerum libero beatae temporibus odio saepe nobis dignissimos cupiditate nisi, nihil
            necessitatibus accusantium natus. Deleniti praesentium eaque dolorem animi quis tempora esse aspernatur quod mollitia adipisci, ipsum
            voluptatibus commodi quam suscipit, corporis expedita. Cupiditate a itaque nostrum expedita ipsum quibusdam dolorem sapiente enim aperiam
            quisquam.
          </p> */}
        </div>
      </div>
    </>
  );
}
