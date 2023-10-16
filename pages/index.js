import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{

    var testStorage = sessionStorage.getItem('assessmentState');
    if(testStorage == null){
      // Initialise variables to keep track of user state across pages
      console.log('defualts set');
      var assessmentStateData = new Map();
      initialiseAssessmentState(assessmentStateData)
      sessionStorage.setItem('assessmentState', JSON.stringify(assessmentStateData));
      var userState = {};
      var page = 'page';
      var page_boolean = 'has_switched_page';
      var currentPageName = 'homePage';
      userState[page] = currentPageName;
      userState[page_boolean] = true;
      var navbarState = 'Governance';
      sessionStorage.setItem('userState', JSON.stringify(userState));
      sessionStorage.setItem('navbarState', navbarState);
    } else{
      var uState = JSON.parse(sessionStorage.getItem('userState'));
      uState['has_switched_page'] = true;
      uState['page'] = 'homePage';
      sessionStorage.setItem('userState', JSON.stringify(uState));
    } 
  })
  
  
  function initialiseAssessmentState(statePointer){
    //Fill assessment state as 0 (all qs are initially empty)
    for(let i = 1; i < 91; i++){
        var key_name = 'question' + i;
        statePointer[key_name] = null;
    }
    statePointer['Company Name'] = null;
    statePointer['Project name'] = null;
    statePointer['Description of Project'] = null;
  }
  
  return (
    <>
    <Head>
      <title>Maturitäts Check | Home </title>
      <meta name = "keywords" content = "owassp-calc"/>
    </Head>
<div>
  <h1 className = {styles.title}>SAMMWise</h1>
  <p className = {styles.paragraph}>SAMMwise bietet eine benutzerfreundliche, browserbasierte Schnittstelle zur Erfassung von SAMM-Bewertungsantworten. Mit diesem Tool können Benutzer:</p>
      <li className = {styles.paragraph}>Antworten für eine einzelne Bewertung eingeben</li>
      <li className = {styles.paragraph}>Die Reifeergebnisse auf Grundlage der eingegebenen Antworten visualisieren</li>
      <li className = {styles.paragraph}>Reifeergebnisse mit denen einer vorherigen Bewertung vergleichen</li>
      <p className = {styles.paragraph}>Bewertungsantworten können auf dem lokalen Computer des Benutzers in einer im JSON-Format formatierten Textdatei gespeichert werden. Antworten werden nur auf dem lokalen System aufbewahrt und werden nicht mit einem anderen System oder Personen geteilt.</p>

  <h1 className = {styles.title}>Über SAMM</h1>
  <p className = {styles.paragraph}>Das Software Assurance Maturity Model (OWASP SAMM) des Open Web Application Security Project ist ein offenes Framework, das Organisationen dabei hilft, eine Strategie für die Software-Sicherheit zu formulieren und umzusetzen, die auf die spezifischen Risiken der Organisation zugeschnitten ist.</p>
  <p className = {styles.paragraph}>Die von SAMM bereitgestellten Ressourcen (einschließlich dieses Tools) sollen helfen bei:</p>
      <li className = {styles.paragraph}>Bewertung der bestehenden Software-Sicherheitspraktiken einer Organisation;</li>
      <li className = {styles.paragraph}>Aufbau eines ausgewogenen Software-Sicherheitsprogramms in gut definierten Iterationen;</li>
      <li className = {styles.paragraph}>Demonstration konkreter Verbesserungen in einem Sicherheitsprogramm;</li>
      <li className = {styles.paragraph}>Definition und Messung sicherheitsrelevanter Aktivitäten in einer Organisation.</li>
  <p className = {styles.paragraph}>SAMM wurde definiert, so dass es von kleinen, mittleren und großen Organisationen mit jeder Art von Entwicklung genutzt werden kann. Darüber hinaus kann dieses Modell unternehmensweit, für einen einzelnen Geschäftsbereich oder sogar für ein einzelnes Projekt angewendet werden.</p>
</div>
    
    
    </>
  )
}
