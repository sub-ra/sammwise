import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect } from 'react'

const About = () => {
    
    useEffect(()=> {
        var userState = JSON.parse(sessionStorage.getItem('userState'));
        userState['page'] = "aboutPage";
        userState['has_switched_page'] = true;
        sessionStorage.setItem('userState', JSON.stringify(userState));
    })
    
    return ( 
        <>
            <Head>
                <title>SAMMWise | About </title>
                <meta name = "keywords" content = "owassp-calc"/>

            </Head>
<div>

  <h2 className = {styles.title}>Über dieses Tool</h2>
  <p className = {styles.paragraph}>Mit Hilfe mehrerer Open-Source-JavaScript-Frameworks bietet die SAMMwise-Anwendung einen intuitiven, seitenorientierten Workflow zur Durchführung einer SAMM-Bewertung, gekoppelt mit dynamischen Grafiken zur Visualisierung der Bewertungsergebnisse.</p>

  <h2 className = {styles.title}>Aktuelle Fähigkeiten</h2>  
  <li className = {styles.paragraph}>Bewertung der bestehenden Software-Sicherheitspraktiken einer Organisation;</li>
  <li className = {styles.paragraph}>Aufbau eines ausgewogenen Software-Sicherheitsprogramms in gut definierten Iterationen;</li>
  <li className = {styles.paragraph}>Demonstration konkreter Verbesserungen in einem Sicherheitsprogramm;</li>
  <li className = {styles.paragraph}>Definition und Messung sicherheitsrelevanter Aktivitäten in einer Organisation.</li>

  <h2 className = {styles.title}>Zukünftige Erweiterungen</h2>
  <li className = {styles.paragraph}>Mehrphasige Fahrpläne - Basisversion plus bis zu 5 Implementierungsphasen</li>
  <li className = {styles.paragraph}>Vergleich mit mehreren vorherigen Bewertungen</li>
  <li className = {styles.paragraph}>Vergleich mit SAMM-Benchmark-Daten</li>
  <li className = {styles.paragraph}>Beitrag von anonymisierten Bewertungsergebnissen zum SAMM Benchmark Projekt</li>

  <h2 className = {styles.title}>Versionshistorie</h2>
  <div style={{float:"right"}}>
      <Image src="/DatacomLogo.png" width={321} height={61}/>
  </div>
  <p className = {styles.paragraph}>Version 1.0 - Die erste Version von SAMMwise wurde im Juli bis Oktober 2021 vom Application Security Services Team bei Datacom Neuseeland entwickelt. Das Tool wurde als Open-Source-Projekt veröffentlicht und dem OWASP SAMM-Projekt gespendet.</p>
</div>
        );
}
 
export default About;
