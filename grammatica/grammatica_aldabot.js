    const grammar = `

I ::=   "title:    Generatore automatico di aforismi di Alda Merini\\n"
      ^ "author:   Apparire Trascendentale per Superare il Divenire\\n"
      ^ "language: italian\\n"
      ^ "status:   refinable\\n"
      ^ "topic:    Grandi pensatori\\n"
      ^ "comment:  Generatore automatico di aforismi di Alda Merini\\n"
      ^ "warning:  Vogliamo bene ad Alda \\n"
      ^ "created:  02-05-2018"
;


S ::= Frase
;




(*      F R A S E      *)



(* Es. Frase, Frase.1, Frase.(1|3|5) *)




Frase ::= (

      (* Test sull'uso delle preposizioni e shortcut *)
      7:(
        
        X ::=
          NomePrepMF.NomeGen.(PrepSemplice|PrepArticolata).PrepGen.(Det|Indet).(S|P).(Positivo|Negativo);

        \\
        "[Test preposizioni a caso] <br>"
        \\ (X)+  

       ^"."        

  ) |



(*****************************************************)



      (* Frase a tema religioso *)
      6:(

        VerboSing ::= (canta|spiega|predica|sbandiera|insegna|illustra|tramanda|racconta|narra|ricorda|divulga)
        ;

        AstrazioneSpicciola ::=
                ( NomeArtMF ).Det.Astrazione.S.(Positivo|Negativo)
                ( NomePrepMF ).PrepArticolata.Det.Di.(-----------------Animale|Persona|Oggetto).P.(Positivo|Negativo)
        ;

        \\

      ( ( NomeArtMF ).(Det|Indet).Persona.(Positivo|Negativo)
        ( S: VerboSing | P: VerboSing^no )

      ).(S|P)

      AstrazioneSpicciola

      per

      VerboSing^re

      {( NomeArtMF ).Det.Astrazione.S.(Positivo|Negativo)
      ( NomePrepMF ).PrepArticolata.Det.Di.(------------------Animale|+++++++Persona|Oggetto|Psichiatria).P.(Positivo|Negativo)}
      { (
         ( NomePrepMF ).PrepArticolata.Det.A.(----------------Animale|Persona).P.(Positivo|Negativo)
        | ++++++_
        )
      }


       ^"."

  ) |


(*****************************************************)


      5:(

        \\

        (volo|salto|mi arrampico|scrivo|corro|striscio)

      ( NomePrepMF ).PrepArticolata.Det.(Per|In|Su).Luogo.(S|P).Positivo

        con
      ( NomeArtMF ).Indet.(ParteDelCorpoBisex|ParteDelCorpoDonna).S.(Positivo|Negativo)

      ( NomePrepMF ).PrepSemplice.Da.(Animale|Persona).S.Negativo

        e
        (subito|all'improvviso|senza dubbio|finalmente|per una buona volta|per l'ultima volta|per la prima volta|come per magia|magicamente)
        (mi appare|capisco|comprendo|afferro|apprendo|intendo|registro|intuisco|condivido|ascolto|ravviso|imparo|memorizzo|esperisco|invidio|soppeso|considero|calcolo|immagino|biasimo|critico|spergiuro|denuncio)

      ( NomeArtMF ).Det.Astrazione.S.(Positivo|Negativo)
      ( NomePrepMF ).PrepArticolata.Det.Di.(Animale|Persona|Oggetto).P.(Positivo|Negativo)


       ^"."

  ) |


(*****************************************************)



(* BELLA, TENERE *)
(* Es. Fra case di guance e alcove di topi ritrovo il distillato dello squallore.*)

      4:(

        \\

      NomePrepMF.PrepSemplice.(Tra|Fra).(Luogo|Oggetto).P.Positivo
      NomePrepMF.PrepSemplice.Di.(ParteDelCorpoBisex|ParteDelCorpoDonna|ParteDelCorpoUomo).P.(Positivo|Negativo)

       e

      NomeArtMF.Luogo.P.Positivo
      NomePrepMF.PrepSemplice.Di.Animale.P.(Positivo|Negativo)

      (ritrovo|assaporo|guardo|divento|mangio|catturo|imparo|scaccio|ascolto|annuso|tocco)

      NomeArtMF.Det.(Astrazione|Oggetto|Psichiatria).(S|P).Positivo
      NomePrepMF.PrepArticolata.Det.Di.Astrazione.S.Negativo

       ^"."

  ) |


(*****************************************************)


      3:(

        \\

        (cerco|inseguo|rincorro|trovo|ritrovo)

      (   ( Art Nome ).M.(IlI|LGli|LoGli)
        | ( Art Nome ).F.(LLe|LaLe)
       ).Det.Persona.S.Positivo

      (   ( Prep Nome ).M.(IlI|LGli|LoGli)
        | ( Prep Nome ).F.(LLe|LaLe)
       ).PrepArticolata.Det.Di.Religione.(S|P).(Positivo|Negativo)

      (   ( Prep Nome ).M.(IlI|LGli|LoGli)
        | ( Prep Nome ).F.(LLe|LaLe)
       ).PrepSemplice.In.Luogo.P.Negativo

      ( ( Prep Nome ).M.(IlI|LGli|LoGli)
        | ( Prep Nome ).F.(LLe|LaLe)
       ).PrepSemplice.Di.(Psichiatria|Oggetto).P.(Positivo|Negativo)

       ^"."

  ) |



(*****************************************************)

     2:( 

       \\



  ho (amato|adorato|ammirato|accarezzato|fissato)
    (
       un    NomeMS.(IlI|LGli)
    |  uno   NomeMS.LoGli
    |  un'^  NomeFS.LLe
    |  una   NomeFS.LaLe
    ).Animale.(Positivo|Negativo)

    dei
    Nome.Luogo.Negativo.M.P.IlI

    come
    (
      la mia stessa Nome.F.S.(LaLe|LLe)
    | il mio stesso Nome.M.S.(IlI|LoGli|LGli)
    ).Astrazione.(Positivo|Negativo)

    ^"."

  ) |



(*****************************************************)



     1:( 

       \\

    (  l'^
          ( Nome.(Persona|Animale).M.S.LGli.Positivo
          |  Nome.(Persona|Animale).F.S.LLe.Positivo
            )
          {[
            ( dei   Nome.Luogo.M.P.IlI.(Positivo|Negativo)
            | degli Nome.Luogo.M.P.LGli.(Positivo|Negativo)
            | delle Nome.Luogo.F.P.(LaLe|LLe).(Positivo|Negativo)
              )
            ]}
          {(si (riempie|copre|fa scudo|delizia) di|(ricorre|inneggia|si affianca|si appella) ai)
          Nome.(Astrazione|Persona).M.P.IlI.Negativo}
          per (urlare|esplodere|brillare|colmarsi|saziarsi|sapere|puzzare)
          ( di Nome.(Astrazione|Oggetto).F.S.LaLe.Positivo
          | d'^ Nome.(Astrazione|Oggetto).F.S.LLe.Positivo
            )
    )

    ^", ma"

      (  l'^
          ( Nome.(Persona|Animale).M.S.LGli.Negativo
          |  Nome.(Persona|Animale).F.S.LLe.Negativo
            )
          {[dei Nome.Luogo.M.P.IlI.Negativo]}
          {(s'uccide di|(urla|guarda|sospira|si rivolge) ai)
          Nome.(Astrazione|Persona).M.P.IlI.Positivo}
          per (urlare|esplodere|parlare|colmarsi|saziarsi|sapere|puzzare)
          ( di Nome.(Astrazione|Oggetto).F.S.LaLe.Negativo
          | d'^ Nome.(Astrazione|Oggetto).F.S.LLe.Negativo
            )
    )

       ^"."

  )




); (* FRASE  -  FINE *)




















(*       SINTAGMI    *)










(*       NOME        *)



Nome ::= (


      (*    GENERICO     *)       

       
      (* Nome.NomeGen richiama una qualsiasi delle sotto-etichette      *)
      (* quindi produce: Nome.Persona | Nome.Oggetto | Nome.Persona etc *)

       NomeGen:( 
        
          Nome.(Oggetto|Persona|Luogo|Animale|Astrazione|Psichiatria|ParteDelCorpoUomo|ParteDelCorpoDonna|ParteDelCorpoBisex|Religione|Poesia (* |Archetipi|Materia *) )

      )

      |


      (*   OGGETTO     *)


      Oggetto:(

          Positivo:(

              M:(           (* OGGETTO POSITIVO MASCHILE **OGGPM      **OGGMP      *)
                  LoGli:(   (* OGGETTO POSITIVO MASCHILE **OGGPMLOGLI **OGGMPLOGLI *)
                      ( S: sprint             | P: sprint            )
                    | ( S: scafandro          | P: scafandri         )
                    | ( S: scherzo            | P: scherzi           )
                    | ( S: sciabordio         | P: sciabordii        )
                    | ( S: splendore          | P: splendori         )
                    | ( S: strumento          | P: strumenti         )
                    | ( S: zucchero           | P: zuccheri          )

                    )

                |  LGli:(   (* OGGETTO POSITIVO MASCHILE **OGGPMLGLI  **OGGMPLGLI *)
                      ( S: albero             | P: alberi            )
                    | ( S: abbaino            | P: abbaini           )
                    | ( S: abbeveratoio       | P: abbeveratoi       )
                    | ( S: abbonamento        | P: abbonamenti       )
                    | ( S: abitacolo          | P: abitacoli         )
                    | ( S: abito              | P: abiti             )
                    | ( S: accento            | P: accenti           )
                    | ( S: accessorio         | P: accessori         )
                    | ( S: acciaio            | P: acciai            )
                    | ( S: acquarello         | P: acquarelli        )
                    | ( S: aereo              | P: aerei             )
                    | ( S: aeroplano          | P: aeroplani         )
                    | ( S: affettato          | P: affettati         )
                    | ( S: affresco           | P: affreschi         )
                    | ( S: agrume             | P: agrumi            )
                    | ( S: albergo            | P: alberghi          )
                    | ( S: albero             | P: alberi            )
                    | ( S: alimento           | P: alimenti          )
                    | ( S: alloro             | P: allori            )
                    | ( S: altorilievo        | P: altorilievi       )
                    | ( S: ammorbidente       | P: ammorbidenti      )
                    | ( S: amore              | P: amori             )
                    | ( S: amplesso           | P: amplessi          )
                    | ( S: amuleto            | P: amuleti           )
                    | ( S: analgesico         | P: analgesici        )
                    | ( S: aneddoto           | P: aneddoti          )
                    | ( S: anello             | P: anelli            )
                    | ( S: anestetico         | P: anestetici        )
                    | ( S: anticorpo          | P: anticorpo         )
                    | ( S: antidoto           | P: antidoti          )
                    | ( S: antipasto          | P: antipasti         )
                    | ( S: applauso           | P: applausi          )
                    | ( S: approdo            | P: approdi           )
                    | ( S: apribottiglie      | P: apribottiglie     )
                    | ( S: aquilone           | P: aquiloni          )
                    | ( S: arco               | P: archi             )
                    | ( S: arcobaleno         | P: arcobaleni        )
                    | ( S: asso               | P: assi              )
                    | ( S: astro              | P: astri             )
                    | ( S: atlante            | P: atlanti           )
                    | ( S: atomo              | P: atomi             )
                    | ( S: attimo             | P: attimi            )
                    | ( S: avorio             | P: avorii            )
                    | ( S: inchiostro         | P: inchiostri        )
                    | ( S: ordigno            | P: ordigni           )

                    )

                |  IlI:(   (* OGGETTO POSITIVO MASCHILE **OGGPMILI  **OGGMPILI  *)
                      ( S: sole               | P: banani            )  (* solo singolare *)
                    | ( S: baleno             | P: banani            )  (* solo singolare *)
                    | ( S: banano             | P: banani            )
                    | ( S: bosco              | P: boschi            )
                    | ( S: burro              | P: banani            )
                    | ( S: catafalco          | P: catafalchi        )
                    | ( S: catenaccio         | P: catenacci         )
                    | ( S: confine            | P: confini           )
                    | ( S: dolce              | P: dolci             )
                    | ( S: firmamento         | P: firmamenti        )
                    | ( S: frutto             | P: frutti            )
                    | ( S: giardino           | P: giardini          )
                    | ( S: guanto             | P: guanti            )
                    | ( S: miraggio           | P: miraggi           )
                    | ( S: negozio            | P: negozi            )
                    | ( S: sospiro            | P: sospiri           )
                    | ( S: souvenir           | P: souvenir          )
                    | ( S: treno              | P: treni             )
                    | ( S: trofeo             | P: trofei            )
                    | ( S: vino               | P: vini              )
                    )
                )



          |  F:(           (* OGGETTO POSITIVO FEMMINILE **OGGPF     **OGGFP     *)
                  LaLe:(   (* OGGETTO POSITIVO FEMMINILE **OGGPFLALE **OGGFPLALE *)
                      ( S: rugiada            | P: rugiade            )
                    | ( S: barca              | P: barche             )
                    | ( S: barriera           | P: barriere           )
                    | ( S: canottiera         | P: canottiere         )
                    | ( S: carezza            | P: carezze            )
                    | ( S: chiave             | P: chiavi             )
                    | ( S: corda              | P: corde              )
                    | ( S: corona             | P: corone             )
                    | ( S: leccata            | P: leccate            )
                    | ( S: nave               | P: navi               )
                    | ( S: nave               | P: navi               )
                    | ( S: neve               | P: nevi               )
                    | ( S: pietanza           | P: pietanze           )
                    | ( S: popolazione        | P: popolazioni        )
                    | ( S: porta              | P: porte              )
                    | ( S: scacchiera         | P: scacchiere         )
                    | ( S: tavola             | P: tavole             )
                    | ( S: tovaglia           | P: tovaglie           )
                    )

                |  LLe:(   (* OGGETTO POSITIVO FEMMINILE **OGGPFLLE  **OGGFPLLE *)
                      ( S: alba               | P: albe               )
                    | ( S: abbondanza         | P: abbondanze         )
                    | ( S: abbuffata          | P: abbuffate          )
                    | ( S: acconciatura       | P: acconciature       )
                    | ( S: acqua              | P: acque              )
                    | ( S: acquavite          | P: acqueviti          )
                    | ( S: acropoli           | P: acropoli           )
                    | ( S: affettatrice       | P: affettatrici       )
                    | ( S: aiuola             | P: aiuole             )
                    | ( S: albicocca          | P: albicocche         )
                    | ( S: alcova             | P: alcove             )
                    | ( S: amaca              | P: amache             )
                    | ( S: ambrosia           | P: ambrosie           )
                    | ( S: ampolla            | P: ampolle            )
                    | ( S: anfora             | P: anfore             )
                    | ( S: anfora             | P: anfore             )
                    | ( S: arancia            | P: arance             )
                    | ( S: aria               | P: arie               )
                    | ( S: aurora             | P: aurore             )
                    )
                )


            ) (* OGGETTO POSITIVO - FINE *)


        | Negativo:(



              M:(          (* OGGETTO NEGATIVO MASCHILE **OGGNM      **OGGMN      *)
                  LoGli:(  (* OGGETTO NEGATIVO MASCHILE **OGGNMLOGLI **OGGMNLOGLI *)
                      ( S: sbadiglio          | P: sbadigli           )
                    | ( S: scafandro          | P: scafandri          )
                    | ( S: scandalo           | P: scandali           )
                    | ( S: sciabordio         | P: sciabordii         )
                    | ( S: scoglio            | P: scogli             )
                    | ( S: scorno             | P: scorni             )
                    )

                |  LGli:(  (* OGGETTO NEGATIVO MASCHILE **OGGNMLGLI  **OGGMNLGLI  *)
                      ( S: albero             | P: alberi             )
                    | ( S: abbaglio           | P: abbagli            )
                    | ( S: abisso             | P: abissi             )
                    | ( S: aborto             | P: aborti             )
                    | ( S: accampamento       | P: accampamenti       )
                    | ( S: accappatoio        | P: accappatoi         )
                    | ( S: accessorio         | P: accessori          )
                    | ( S: acciacco           | P: acciacchi          )
                    | ( S: aceto              | P: aceti              )
                    | ( S: acido              | P: acidi              )
                    | ( S: acquazzone         | P: acquazzoni         )
                    | ( S: acquitrino         | P: acquitrini         )
                    | ( S: aculeo             | P: aculei             )
                    | ( S: addobbo            | P: addobbi            )
                    | ( S: aggeggio           | P: aggeggi            )
                    | ( S: aggregato          | P: aggregati          )
                    | ( S: ago                | P: aghi               )
                    | ( S: agone              | P: agoni              )
                    | ( S: alcol              | P: alcol              )
                    | ( S: aldil^"&agrave"       | P: aldil^"&agrave"       )
                    | ( S: alone              | P: aloni              )
                    | ( S: altoforno          | P: altoforni          )
                    | ( S: alveare            | P: alveari            )
                    | ( S: appendiabiti       | P: appendiabiti       )
                    | ( S: arsenale           | P: arsenali           )
                    | ( S: aspirapolvere      | P: aspirapolvere      )
                    | ( S: asteroide          | P: asteroidi          )
                    | ( S: attrito            | P: attriti            )
                    | ( S: imbroglio          | P: imbrogli           )
                    | ( S: orlo               | P: orli               )
                    )

                |  IlI:(   (* OGGETTO NEGATIVO MASCHILE **OGGNMILI **OGGMNILI *)
                      ( S: sole               | P: barattoli          )  (* solo singolare *)
                    | ( S: barattolo          | P: barattoli          )
                    | ( S: bastione           | P: bastioni           )
                    | ( S: bastone            | P: bastoni            )
                    | ( S: bestiario          | P: bestiari           )
                    | ( S: bozzolo            | P: bozzoli            )
                    | ( S: brecciolino        | P: brecciolini        )
                    | ( S: buldozer           | P: buldozer           )
                    | ( S: ciarpame           | P: ciarpami           )
                    | ( S: coltello           | P: coltelli           )
                    | ( S: debito             | P: debiti             )
                    | ( S: denaro             | P: denari             )
                    | ( S: disastro           | P: disastri           )
                    | ( S: firmamento         | P: firmamenti         )
                    | ( S: ginepraio          | P: gineprai           )
                    | ( S: letto              | P: letti              )
                    | ( S: nubifragio         | P: nubifragi          )
                    | ( S: prodotto           | P: prodotti           )
                    | ( S: residuo            | P: residui            )
                    | ( S: sandalo            | P: sandali            )
                    | ( S: sangue             | P: fluidi             )
                    | ( S: sasso              | P: sassi              )
                    | ( S: sedimento          | P: sedimenti          )
                    | ( S: troguolo           | P: troguoli           )
                    | ( S: vecchiume          | P: vecchiumi          )
                    | ( S: vetro              | P: vetri              )
                    )
                )



          |  F:(           (* OGGETTO NEGATIVO FEMMINILE **OGGNF     **OGGFN     *)
                  LaLe:(   (* OGGETTO NEGATIVO FEMMINILE **OGGNFLALE **OGGFNLALE *)
                      ( S: frana              | P: frane              )
                    | ( S: buca               | P: buche              )
                    | ( S: catacomba          | P: catacombe          )
                    | ( S: cianfrusaglia      | P: cianfrusaglie      )
                    | ( S: cloaca             | P: cloache            )
                    | ( S: fogna              | P: fogne              )
                    | ( S: ghiaia             | P: ghiaie             )
                    | ( S: nebbia             | P: nebbie             )
                    | ( S: perdita            | P: perdite            )
                    | ( S: pietra             | P: pietre             )
                    | ( S: pistola            | P: pistole            )
                    | ( S: protuberanza       | P: protuberanze       )
                    | ( S: sassaiola          | P: sassaiole          )
                    | ( S: sassata            | P: sassate            )
                    | ( S: scabbia            | P: sassate            ) (* solo singolare *)
                    | ( S: scure              | P: scuri              )
                    | ( S: sottana            | P: sottane            )
                    | ( S: sozzura            | P: sozzure            )
                    | ( S: spina              | P: spine              )
                    | ( S: tormenta           | P: tormente           )
                    | ( S: valanga            | P: valanghe           )
                    | ( S: valvola            | P: valvole            )
                    | ( S: zappa              | P: zappe              )
                    )

                |  LLe:(   (* OGGETTO NEGATIVO FEMMINILE **OGGNFLLE  **OGGFNLLE  *)
                      ( S: arma               | P: armi               )
                    | ( S: abrasione          | P: abrasioni          )
                    | ( S: accetta            | P: accette            )
                    | ( S: acqua              | P: acque              )
                    | ( S: alluvione          | P: alluvioni          )
                    | ( S: ambulanza          | P: ambulanze          )
                    | ( S: ammenda            | P: ammenda            )
                    | ( S: andropausa         | P: andropause         )
                    | ( S: anestesia          | P: anestesie          )
                    | ( S: anticaglia         | P: anticaglie         )
                    | ( S: bomba atomica      | P: bombe atomiche     )
                    | ( S: immondizia         | P: immondizie         )
                    )
                )


            ) (* OGGETTO NEGATIVO - FINE *)



        ) (* OGGETTO - FINE *)




      (*   PERSONA   *)




    | Persona:(

          Positivo:(

              M:(          (* PERSONA POSITIVO MASCHILE **PERPM      **PERMP      *)

                  LoGli:(  (* PERSONA POSITIVO MASCHILE **PERPMLOGLI **PERMPLOGLI *)
                      ( S: specialista        | P: specialisti        )
                    | ( S: scalatore          | P: scalatori          )
                    | ( S: sciamano           | P: sciamani           )
                    | ( S: scultore           | P: scultori           )
                    | ( S: sfidante           | P: sfidanti           )
                    | ( S: spiritoso          | P: spiritosi          )
                    | ( S: zappatore          | P: zappatori          )
                    )

                |  LGli:(  (* PERSONA POSITIVO MASCHILE **PERPMLGLI **PERMPLGLI  *)
                      ( S: abitante           | P: abitanti           )  DiLuogo
                    | ( S: accusato           | P: accusati           )
                    | ( S: acquirente         | P: acquirenti         )
                    | ( S: adolescente        | P: adolescenti        )
                    | ( S: adulto             | P: adulti             )
                    | ( S: affamato           | P: affamati           )
                    | ( S: affittuario        | P: affittuari         )  DiLuogo
                    | ( S: alchimista         | P: alchimisti         )
                    | ( S: alfiere            | P: alfieri            )
                    | ( S: amante             | P: amanti             )
                    | ( S: amico              | P: amici              )
                    | ( S: anestesista        | P: anestesisti        )
                    | ( S: antenato           | P: antenati           )
                    | ( S: assistente         | P: assistenti         )
                    | ( S: astemio            | P: astemi             )
                    | ( S: atleta             | P: atleti             )
                    | ( S: efebo              | P: efebi              )
                    | ( S: eroe               | P: eroi               )
                    | ( S: esperto            | P: esperti            )
                    | ( S: idraulico          | P: idraulici          )
                    | ( S: ingegnere          | P: ingegneri          )
                    | ( S: inquilino          | P: inquilini          )  DiLuogo
                    | ( S: operaio            | P: operai             )
                    | ( S: sveglio            | P: svegli             )
                    )

                |  IlI:(   (* PERSONA POSITIVO MASCHILE **PERPMILI **PERMPILI  *)
                      ( S: poeta              | P: poeti              )
                    | ( S: bambino            | P: bambini            )
                    | ( S: bersagliere        | P: bersaglieri        )
                    | ( S: boscaiolo          | P: boscaioli          )
                    | ( S: campione           | P: campioni           )
                    | ( S: cantante           | P: cantanti           )
                    | ( S: cercatore          | P: cercatori          )
                    | ( S: colosso            | P: colossi            )
                    | ( S: contadino          | P: contadini          )
                    | ( S: corazziere         | P: corazzieri         )
                    | ( S: corteggiatore      | P: corteggiatori      )
                    | ( S: culturista         | P: culturisti         )
                    | ( S: cuoco              | P: cuochi             )
                    | ( S: curato             | P: curati             )
                    | ( S: direttore          | P: direttori          )
                    | ( S: funambolo          | P: funamboli          )
                    | ( S: fuoriclasse        | P: fuoriclasse        )
                    | ( S: furbo              | P: furbi              )
                    | ( S: fusto              | P: fusti              )
                    | ( S: gagliardo          | P: gagliardi          )
                    | ( S: generale           | P: generali           )
                    | ( S: gentiluomo         | P: gentiluomi         )
                    | ( S: giovane            | P: giovani            )
                    | ( S: guardiano          | P: guardiani          )
                    | ( S: maestro            | P: maestri            )
                    | ( S: marcantonio        | P: marcantoni         )
                    | ( S: marito             | P: mariti             )
                    | ( S: maschio            | P: maschi             )
                    | ( S: mediatore          | P: mediatori          )
                    | ( S: palestrato         | P: palestrati         )
                    | ( S: parrucchiere       | P: parrucchieri       )
                    | ( S: pasticciere        | P: pasticcieri        )
                    | ( S: pastore            | P: pastori            )
                    | ( S: pentito            | P: pentiti            )
                    | ( S: perspicace         | P: perspicaci         )
                    | ( S: pilota             | P: piloti             )
                    | ( S: pittore            | P: pittori            )
                    | ( S: portiere           | P: portieri           )
                    | ( S: professionista     | P: professionisti     )
                    | ( S: professore         | P: professori         )
                    | ( S: protettore         | P: protettori         )
                    | ( S: rabdomante         | P: rabdomanti         )
                    | ( S: ricco              | P: ricchi             )
                    | ( S: seminatore         | P: seminatori         )
                    | ( S: sensibile          | P: sensibili          )
                    | ( S: signore            | P: signori            )
                    | ( S: superiore          | P: superiori          )
                    | ( S: taglialegna        | P: taglialegna        )
                    | ( S: tenore             | P: tenori             )
                    | ( S: timorato           | P: timorati           )
                    | ( S: trombaio           | P: trombai            )
                    | ( S: veterano           | P: veterani           )
                    | ( S: veterinario        | P: veterinari         )
                    | ( S: violinista         | P: violinisti         )
                    )
                )


          |  F:(           (* PERSONA POSITIVO FEMMINILE **PERPF     **PERFP     *)

                  LaLe:(   (* PERSONA POSITIVO FEMMINILE **PERPFLALE **PERFPLALE *)
                      ( S: madre              | P: madri              )
                    | ( S: ballerina          | P: ballerine          )
                    | ( S: bambina            | P: bambine            )
                    | ( S: bimba              | P: bimbe              )
                    | ( S: celebrit^"&agrave"    | P: celebrit^"&agrave"    )
                    | ( S: contadina          | P: contadine          )
                    | ( S: debuttante         | P: debuttanti         )
                    | ( S: diva               | P: dive               )
                    | ( S: fanciulla          | P: fanciulle          )
                    | ( S: fata               | P: fate               )
                    | ( S: femminuccia        | P: femminucce         )
                    | ( S: figlia             | P: figlie             )
                    | ( S: maga               | P: maghe              )
                    | ( S: mamma              | P: mamme              )
                    | ( S: rubacuori          | P: rubacuori          )
                    | ( S: santa              | P: sante              )
                    | ( S: seduttrice         | P: seduttrici         )
                    | ( S: sorella            | P: sorelle            )
                    | ( S: sposa              | P: spose              )
                    )

                |  LLe:(   (* PERSONA POSITIVO FEMMINILE **PERPFLLE **PERFPLLE *)
                      ( S: amante             | P: amanti             )
                    | ( S: amata              | P: amate              )
                    | ( S: astrologa          | P: astrologhe         )
                    | ( S: infermiera         | P: infermiere         )
                    | ( S: inserviente        | P: inservienti        )
                    )
                )


            ) (* PERSONA POSITIVO - FINE *)


        | Negativo:(



              M:(          (* PERSONA NEGATIVO MASCHILE **PERNM      **PERMN      *)
                  LoGli:(  (* PERSONA NEGATIVO MASCHILE **PERNMLOGLI **PERMNLOGLI *)
                      ( S: sciocco            | P: sciocchi           )
                    | ( S: iettatore          | P: iettatori          )
                    | ( S: scagnozzo          | P: scagnozzi          )
                    | ( S: scalzo             | P: scalzi             )
                    | ( S: scansafatiche      | P: scansafatiche      )
                    | ( S: scapolo            | P: scapoli            )
                    | ( S: scassinatore       | P: scassinatori       )
                    | ( S: scemo              | P: scemi              )
                    | ( S: scimunito          | P: scimuniti          )
                    | ( S: sfaticato          | P: sfaticati          )
                    | ( S: sfidante           | P: sfidanti           )
                    | ( S: sguattero          | P: sguatteri          )
                    | ( S: sleale             | P: sleali             )
                    | ( S: stalliere          | P: stallieri          )
                    | ( S: stolto             | P: stolti             )
                    | ( S: straniero          | P: stranieri          )
                    )

                |  LGli:(  (* PERSONA NEGATIVO MASCHILE **PERNMLGLI  **PERMNLGLI  *)
                      ( S: affabulatore       | P: affabulatori       )
                    | ( S: accusato           | P: accusati           )
                    | ( S: adulatore          | P: adulatori          )
                    | ( S: adultero           | P: adulteri           )
                    | ( S: affaccendato       | P: affaccendati       )
                    | ( S: affarista          | P: affaristi          )
                    | ( S: affiliato          | P: affiliati          )
                    | ( S: affittacamere      | P: affittacamere      )
                    | ( S: affogato           | P: affogati           )
                    | ( S: aggressore         | P: aggressori         )
                    | ( S: alcolista          | P: alcolisti          )
                    | ( S: ammaliatore        | P: ammaliatori        )
                    | ( S: analfabeta         | P: analfabeti         )
                    | ( S: annegato           | P: annegati           )
                    | ( S: antagonista        | P: antagonisti        )
                    | ( S: antieroe           | P: antieroi           )
                    | ( S: anziano            | P: anziani            )
                    | ( S: attaccabrighe      | P: attaccabrighe      )
                    | ( S: emarginato         | P: emarginati         )
                    | ( S: esorcista          | P: esorcisti          )
                    | ( S: estraneo           | P: estranei           )
                    | ( S: imbrattamuri       | P: imbrattamuri       )
                    | ( S: imputato           | P: imputati           )
                    | ( S: inaffidabile       | P: inaffidabili       )
                    | ( S: indaffarato        | P: indaffarati        )
                    | ( S: indiziato          | P: indiziati          )
                    | ( S: infame             | P: infami             )
                    | ( S: inserviente        | P: inservienti        )
                    | ( S: ipocrita           | P: ipocriti           )
                    | ( S: omaccione          | P: omaccioni          )
                    | ( S: ospite             | P: ospiti             )
                    | ( S: ubriaco            | P: ubriachi           )
                    )

                |  IlI:(   (* PERSONA NEGATIVO MASCHILE **PERNMILI  **PERMNILI *)
                      ( S: boia               | P: boia               )
                    | ( S: baraccato          | P: baraccati          )
                    | ( S: barbone            | P: barboni            )
                    | ( S: beccamorto         | P: beccamorti         )
                    | ( S: bellimbusto        | P: bellimbusti        )
                    | ( S: bevitore           | P: bevitori           )
                    | ( S: bifolco            | P: bifolchi           )
                    | ( S: bigotto            | P: bigotti            )
                    | ( S: bovaro             | P: bovari             )
                    | ( S: brigante           | P: briganti           )
                    | ( S: burattinaio        | P: burattinai         )
                    | ( S: calunniatore       | P: calunniatori       )
                    | ( S: cerchiobottista    | P: cerchiobottisti    )
                    | ( S: ciccione           | P: ciccioni           )
                    | ( S: concorrente        | P: concorrenti        )
                    | ( S: contendente        | P: contendenti        )
                    | ( S: cretino            | P: cretini            )
                    | ( S: damerino           | P: damerini           )
                    | ( S: deficente          | P: deficienti         )
                    | ( S: delatore           | P: delatori           )
                    | ( S: diabetico          | P: diabetici          )
                    | ( S: disertore          | P: disertori          )
                    | ( S: doppiogiochista    | P: doppiogiochisti    )
                    | ( S: facchino           | P: facchini           )
                    | ( S: fattorino          | P: fattorini          )
                    | ( S: fedifrago          | P: fedifraghi         )
                    | ( S: forestiero         | P: forestieri         )
                    | ( S: lampionaio         | P: lampionaio         )
                    | ( S: leccapiedi         | P: leccapiedi         )
                    | ( S: locandiere         | P: locandieri         )
                    | ( S: lustrascarpe       | P: lustrascarpe       )
                    | ( S: marpione           | P: marpioni           )
                    | ( S: mendicante         | P: mendicanti         )
                    | ( S: nano               | P: nani               )
                    | ( S: negoziante         | P: negozianti         )
                    | ( S: nemico             | P: nemici             )
                    | ( S: nomade             | P: nomadi             )
                    | ( S: parassita          | P: parassiti          )
                    | ( S: pendolare          | P: pendolari          )
                    | ( S: persecutore        | P: persecutori        )
                    | ( S: pirata             | P: pirati             ) [della strada]
                    | ( S: protettore         | P: protettori         )
                    | ( S: provinciale        | P: provinciali        )
                    | ( S: rinunciatario      | P: rinunciatari       )
                    | ( S: ritardato          | P: ritardati          )
                    | ( S: rivale             | P: rivali             )
                    | ( S: ruffiano           | P: ruffiani           )
                    | ( S: salumiere          | P: salumieri          )
                    | ( S: senzatetto         | P: senzatetto         )
                    | ( S: sicofante          | P: sicofanti          )
                    | ( S: simulatore         | P: simulatori         )
                    | ( S: traditore          | P: traditori          )
                    | ( S: tuttofare          | P: tuttofare          )
                    | ( S: venditore          | P: venditori          )
                    | ( S: veterinario        | P: veterinari         )
                    | ( S: viscido            | P: viscidi            )
                    )
                )



          |  F:(           (* PERSONA NEGATIVO FEMMINILE **PERNF     **PERFN      *)
                  LaLe:(   (* PERSONA NEGATIVO FEMMINILE **PERNFLALE **PERFNLALE  *)
                      ( S: strega             | P: streghe            )
                    | ( S: befana             | P: befane             )
                    | ( S: cameriera          | P: cameriere          )
                    | ( S: civetta            | P: civette            )
                    | ( S: concubina          | P: concubine          )
                    | ( S: divorziata         | P: divorziate         )
                    | ( S: donna              | P: donne              )
                    | ( S: locandiera         | P: locandiere         )
                    | ( S: maliarda           | P: maliarde           )
                    | ( S: megera             | P: megere             )
                    | ( S: nana               | P: nane               )
                    | ( S: pettegola          | P: pettegole          )
                    | ( S: poco di buono      | P: poco di buono      )
                    | ( S: puttana            | P: puttane            )
                    | ( S: scema              | P: sceme              )
                    | ( S: seduttrice         | P: seduttrici         )
                    | ( S: sfaticata          | P: sfaticate          )
                    | ( S: sguattera          | P: sguattere          )
                    | ( S: sirena             | P: sirene             )
                    | ( S: spia               | P: spie               )
                    | ( S: strega             | P: streghe            )
                    | ( S: vecchia            | P: vecchie            )
                    | ( S: vittima            | P: vittime            )
                    )

                |  LLe:(   (* PERSONA NEGATIVO FEMMINILE **PERNFLLE  **PERFNLLE  *)
                      ( S: arpia              | P: arpie              )
                    | ( S: accattona          | P: accattone          )
                    | ( S: adulatrice         | P: adulatrici         )
                    | ( S: affarista          | P: affariste          )
                    | ( S: ammaliatrice       | P: ammaliatrici       )
                    | ( S: antagonista        | P: antagoniste        )
                    | ( S: assassina          | P: assassine          )
                    | ( S: emarginata         | P: emarginate         )
                    | ( S: handicappata       | P: handicappate       )
                    | ( S: opportunista       | P: opportuniste       )
                    )
                )


            ) (* PERSONA NEGATIVO - FINE *)



        ) (* PERSONA - FINE *)





      (*    LUOGO    *)


    | Luogo:(

          Positivo:(

              M:(          (* LUOGO POSITIVO MASCHILE **LUOPM      **LUOMP       *)
                  LoGli:(  (* LUOGO POSITIVO MASCHILE **LUOPMLOGLI **LUOMPLOGLI  *)
                      ( S: spiazzo            | P: spiazzi            )
                    | ( S: scenario           | P: scenari            )
                    | ( S: slargo             | P: slarghi            )
                    | ( S: stabile            | P: stabili            )
                    )

                |  LGli:(  (* LUOGO POSITIVO MASCHILE **LUOPMLGLI  **LUOMPLGLI  *)
                      ( S: albergo            | P: alberghi           )
                    | ( S: ambiente           | P: ambienti           )
                    | ( S: androne            | P: androni            )
                    | ( S: appartamento       | P: appartamenti       )
                    | ( S: ateneo             | P: atenei             )
                    | ( S: attico             | P: attici             )
                    | ( S: eremo              | P: eremi              )
                    | ( S: ospedale           | P: ospedali           )
                    | ( S: ostello            | P: ostelli            )
                    | ( S: ufficio            | P: uffici             )
                    )

                |  IlI:(   (* LUOGO POSITIVO MASCHILE **LUOPMILI  **LUOMPIL  *)
                      ( S: nido               | P: nidi               )
                    | ( S: balcone            | P: balconi            )
                    | ( S: battistero         | P: battisteri         )
                    | ( S: caseggiato         | P: caseggiati         )
                    | ( S: castello           | P: castelli           )
                    | ( S: declivio           | P: declivi            )
                    | ( S: granaio            | P: granai             )
                    | ( S: lido               | P: lidi               )
                    | ( S: monastero          | P: monasteri          )
                    | ( S: palco              | P: palchi             )
                    | ( S: ponte              | P: ponti              )
                    | ( S: porticato          | P: porticati          )
                    | ( S: rifugio            | P: rifugi             )
                    | ( S: salone             | P: saloni             )
                    | ( S: seminario          | P: seminari           )
                    | ( S: seminterrato       | P: seminterrati       )
                    | ( S: sentiero           | P: sentieri           )
                    )
                )



          |  F:(           (* LUOGO POSITIVO FEMMINILE **LUOPF     **LUOFP     *)
                  LaLe:(   (* LUOGO POSITIVO FEMMINILE **LUOPFLALE **LUOFPLALE *)
                      ( S: casa               | P: case               )
                    | ( S: camera             | P: camere             )
                    | ( S: chiesa             | P: chiese             )
                    | ( S: circoscrizione     | P: circoscrizioni     )
                    | ( S: citt^"&agrave"        | P: citt^"&agrave"        )
                    | ( S: fattoria           | P: fattorie           )
                    | ( S: fiera              | P: fiere              )
                    | ( S: gradinata          | P: gradinate          )
                    | ( S: legnaia            | P: legnaie            )
                    | ( S: malga              | P: malghe             )
                    | ( S: pensione           | P: pensioni           )
                    | ( S: regione            | P: regioni            )
                    | ( S: vetta              | P: vette              )
                    | ( S: zona               | P: zone               )
                    )

                |  LLe:(   (* LUOGO POSITIVO FEMMINILE **LUOPFLLE **LUOFPLLE *)
                      ( S: alcova             | P: alcove             )
                    | ( S: agor^"&agrave"        | P: agor^"&agrave"        )
                    | ( S: ambasciata         | P: ambasciate         )
                    | ( S: anticamera         | P: anticamere         )
                    | ( S: edicola            | P: edicole            )
                    | ( S: osteria            | P: osterie            )
                    )
                )


            ) (* LUOGO POSITIVO - FINE *)


        | Negativo:(



              M:(          (* LUOGO NEGATIVO MASCHILE **LUONM      **LUOMN       *)
                  LoGli:(  (* LUOGO NEGATIVO MASCHILE **LUONMLOGLI **LUOMNLOGLI  *)
                      ( S: stabilimento       | P: stabilimenti       )
                    | ( S: scantinato         | P: scantinati         )
                    | ( S: sgabuzzino         | P: sgabuzzini         )
                    | ( S: stadio             | P: stadi              )
                    | ( S: stagno             | P: stagni             )
                    )

                |  LGli:(  (* LUOGO NEGATIVO MASCHILE **LUONMLGLI **LUOMNLGLI  *)
                      ( S: orfanotrofio       | P: orfanotrofi        )
                    | ( S: angolino           | P: angolini           )
                    | ( S: angolo             | P: angoli             )
                    | ( S: antro              | P: antri              )
                    | ( S: ascensore          | P: ascensori          )
                    )

                |  IlI:(   (* LUOGO NEGATIVO MASCHILE **LUONMILI **LUOMNILI  *)
                      ( S: sottosuolo         | P: sottosuoli         )
                    | ( S: baraccone          | P: baracconi          )
                    | ( S: cimitero           | P: cimiteri           )
                    | ( S: circo              | P: circhi             )
                    | ( S: collegio           | P: collegi            )
                    | ( S: condominio         | P: condomini          )
                    | ( S: cortile            | P: cortili            )
                    | ( S: fabbricato         | P: fabbricati         )
                    | ( S: garage             | P: garage             )
                    | ( S: macello            | P: macelli            )
                    | ( S: magazzino          | P: magazzini          )
                    | ( S: manicomio          | P: manicomi           )
                    | ( S: nosocomio          | P: nosocomi           )
                    | ( S: palazzo            | P: palazzi            )
                    | ( S: parcheggio         | P: parcheggi          )
                    | ( S: quartiere          | P: quartieri          )
                    | ( S: tugurio            | P: tuguri             )
                    )
                )



          |  F:(           (* LUOGO NEGATIVO FEMMINILE **LUONF     **LUOFN     *)
                  LaLe:(   (* LUOGO NEGATIVO FEMMINILE **LUONFLALE **LUOFNLALE *)
                      ( S: pozzanghera        | P: pozzanghere        )
                    | ( S: banca              | P: banche             )
                    | ( S: baracca            | P: baracche           )
                    | ( S: casamatta          | P: casematte          )
                    | ( S: caserma            | P: caserme            )
                    | ( S: caverna            | P: caverne            )
                    | ( S: contrada           | P: contrade           )
                    | ( S: ferrovia           | P: ferrovie           )
                    | ( S: landa              | P: lande              )
                    | ( S: prigione           | P: prigioni           )
                    | ( S: stanberga          | P: stanberghe         )
                    | ( S: strada             | P: strade             )
                    | ( S: strettoia          | P: strettoie          )
                    | ( S: tana               | P: tane               )
                    )

                |  LLe:(   (* LUOGO NEGATIVO FEMMINILE **LUONFLLE **LUOFNLLE *)
                      ( S: industria          | P: industrie          )
                    | ( S: autostrada         | P: autostrade         )
                    )
                )


            ) (* LUOGO NEGATIVO - FINE *)



        ) (* LUOGO - FINE *)





      (*    ANIMALE   *)



    | Animale:(

          Positivo:(

              M:(          (* ANIMALE POSITIVO MASCHILE **ANIPM      **ANIMP      *)
                  LoGli:(  (* ANIMALE POSITIVO MASCHILE **ANIPMLOGLI **ANIMPLOGLI *)
                      ( S: struzzo            | P: struzzi            )
                    | ( S: scarabeo           | P: scarabei           )
                    | ( S: scimmione          | P: scimmioni          )
                    | ( S: scoiattolo         | P: scoiattoli         )
                    | ( S: scricciolo         | P: scriccioli         )
                    | ( S: storione           | P: storioni           )
                    | ( S: storno             | P: storni             )
                    )

                |  LGli:(  (* ANIMALE POSITIVO MASCHILE **ANIPMLGLI **ANIMPLGLI *)
                      ( S: albatros           | P: albatri            )
                    | ( S: agnello            | P: agnelli            )
                    | ( S: airone             | P: aironi             )
                    | ( S: albatro            | P: albatri            )
                    | ( S: alce               | P: alci               )
                    | ( S: alpaca             | P: alpaca             )
                    | ( S: armadillo          | P: armadilli          )
                    | ( S: astore             | P: astori             )
                    | ( S: elefante           | P: elefanti           )
                    | ( S: ibis               | P: ibis                )
                    )

                |  IlI:(   (* ANIMALE POSITIVO MASCHILE **ANIPMILI **ANIMPILI *)
                      ( S: beccaccino         | P: beccaccini          )
                    | ( S: beluga             | P: beluga              )
                    | ( S: bombo              | P: bombi               )
                    | ( S: bruco              | P: bruchi              )
                    | ( S: cacatua            | P: cacatua             )
                    | ( S: camoscio           | P: camosci             )
                    | ( S: camoscio           | P: camosci             )
                    | ( S: canarino           | P: canarini            )
                    | ( S: canarino           | P: canarini            )
                    | ( S: cane               | P: cani                )
                    | ( S: capibara           | P: capibara            )
                    | ( S: capriolo           | P: caprioli            )
                    | ( S: cardellino         | P: cardellini          )
                    | ( S: castoro            | P: castori             )
                    | ( S: cavallo            | P: cavalli             )
                    | ( S: cavallo            | P: cavalli             )
                    | ( S: cavalluccio marino | P: cavallucci marini   )
                    | ( S: cervo              | P: cervi               )
                    | ( S: cigno              | P: cigni               )
                    | ( S: ciuffolotto        | P: ciuffolotti         )
                    | ( S: colibri'           | P: colibri'            )
                    | ( S: condor             | P: condor              )
                    | ( S: coniglio           | P: conigli             )
                    | ( S: cormorano          | P: cormorani           )
                    | ( S: daino              | P: daini               )
                    | ( S: delfino            | P: delfini             )
                    | ( S: delfino            | P: delfino             )
                    | ( S: dugongo            | P: dugonghi            )
                    | ( S: echidna            | P: echidna             )
                    | ( S: ermellino          | P: ermellini           )
                    | ( S: falco              | P: falchi              )
                    | ( S: fenicottero        | P: fenicotteri         )
                    | ( S: fringuello         | P: fringuelli          )
                    | ( S: furetto            | P: furetti             )
                    | ( S: gabbiano           | P: gabbiani            )
                    | ( S: gallo              | P: galli               )
                    | ( S: gatto              | P: gatti               )
                    | ( S: ghepardo           | P: ghepardi            )
                    | ( S: gheppio            | P: gheppi              )
                    | ( S: giaguaro           | P: giaguari            )
                    | ( S: grillo             | P: grilli              )
                    | ( S: grongo             | P: gronghi             )
                    | ( S: kiwi               | P: kiwi                )
                    | ( S: koala              | P: koala               )
                    | ( S: lamantino          | P: lamantini           )
                    | ( S: leone              | P: leoni               )
                    | ( S: leopardo           | P: leopardi            )
                    | ( S: maggiolino         | P: maggiolini          )
                    | ( S: merlo              | P: merli               )
                    | ( S: moscardino         | P: moscardini          )
                    | ( S: nautilo            | P: nautili             )
                    | ( S: nibbio             | P: nibbi               )
                    | ( S: pangolino          | P: pangolini           )
                    | ( S: pappagallo         | P: pappagalli          )
                    | ( S: passero            | P: passeri             )
                    | ( S: pesce luna         | P: pesci luna          )
                    | ( S: pesce rosso        | P: pesci rossi         )
                    | ( S: pesce volante      | P: pescivolante        )
                    | ( S: pettirosso         | P: pettirossi          )
                    | ( S: pulcino            | P: pulcini             )
                    | ( S: rondone            | P: rondonv             )
                    | ( S: suricato           | P: suricati            )
                    | ( S: tucano             | P: tucani              )
                    | ( S: usignolo           | P: usignoli            )
                    | ( S: visone             | P: visoni              )
                    )
                )



          |  F:(           (* ANIMALE POSITIVO FEMMINILE **ANIPF     **ANIFP     *)
                  LaLe:(   (* ANIMALE POSITIVO FEMMINILE **ANIPFLALE **ANIFPLALE *)
                      ( S: capinera           | P: capinere            )
                    | ( S: cavalla            | P: cavalle             )
                    | ( S: chiocciola         | P: chiocciole          )
                    | ( S: cicogna            | P: cicogne             )
                    | ( S: cinciarella        | P: cinciarelle         )
                    | ( S: coccinella         | P: coccinelle          )
                    | ( S: farfalla           | P: farfalle            )
                    | ( S: folaga             | P: folaghe             )
                    | ( S: formica            | P: formiche            )
                    | ( S: gatta              | P: gatte               )
                    | ( S: gazzella           | P: gazzelle            )
                    | ( S: ghiandaia          | P: ghiandaie           )
                    | ( S: giraffa            | P: giraffe             )
                    | ( S: lepre              | P: lepri               )
                    | ( S: lontra             | P: lontre              )
                    | ( S: marmotta           | P: marmotte            )
                    | ( S: martora            | P: martore             )
                    | ( S: moffetta           | P: moffette            )
                    | ( S: pavoncella         | P: pavoncelle          )
                    | ( S: pernice            | P: pernici             )
                    | ( S: poiana             | P: poiane              )
                    | ( S: procavia           | P: procavie            )
                    | ( S: pulce d'acqua      | P: pulci d'acqua       )
                    | ( S: pulcinella di mare | P: pulcinelle di mare  )
                    | ( S: renna              | P: renne               )
                    | ( S: rondine            | P: rondini             )
                    | ( S: stella di mare     | P: stelle di mare      )
                    | ( S: tartaruga          | P: tartarughe          )
                    | ( S: tigre              | P: tigri               )
                    | ( S: tortora            | P: tortore             )
                    | ( S: upupa              | P: upupe               )
                    | ( S: volpe              | P: volpi               )
                    | ( S: zebra              | P: zebre               )
                    )

                |  LLe:(   (* ANIMALE POSITIVO FEMMINILE **ANIPFLLE **ANIFPLLE *)
                      ( S: acciuga            | P: acciughe            )
                    | ( S: aguglia            | P: aguglie             )
                    | ( S: alice              | P: alici               )
                    | ( S: allodola           | P: allodole            )
                    | ( S: allodola           | P: allodole            )
                    | ( S: anatra             | P: anatre              )
                    | ( S: ape                | P: api                 )
                    | ( S: aquila             | P: aquile              )
                    )
                )


            ) (* ANIMALE POSITIVO - FINE *)


        | Negativo:(



              M:(          (* ANIMALE NEGATIVO MASCHILE **ANINM      **ANIMN      *)
                  LoGli:(  (* ANIMALE NEGATIVO MASCHILE **ANINMLOGLI **ANIMNLOGLI *)
                      ( S: sciacallo          | P: sciacalli           )
                    | ( S: scimpanz^"&egrave"    | P: scimpanz^"&egrave"     )
                    | ( S: scorpione          | P: scorpioni           )
                    | ( S: spinarello         | P: spinarelli          )
                    | ( S: squalo             | P: squali              )
                    | ( S: stambecco          | P: stambecchi          )
                    | ( S: storione           | P: storioni            )
                    | ( S: storno             | P: storni              )
                    | ( S: struzzo            | P: struzzi             )
                    | ( S: yak                | P: yak                 )
                    )

                |  LGli:(  (* ANIMALE NEGATIVO MASCHILE **ANINMLGLI **ANIMNLGLI *)
                      ( S: afide              | P: afidi               )
                    | ( S: alligatore         | P: alligatori          )
                    | ( S: allocco            | P: allocchi            )
                    | ( S: anfibio            | P: anfibi              )
                    | ( S: asino              | P: asini               )
                    | ( S: astice             | P: astici              )
                    | ( S: avvoltoio          | P: avvoltoi            )
                    | ( S: impala             | P: impala              )
                    | ( S: insetto            | P: insetti             )
                    | ( S: ippopotamo         | P: ippopotami          )
                    | ( S: istrice            | P: istrici             )
                    | ( S: opossum            | P: opossum             )
                    | ( S: orango             | P: oranghi             )
                    | ( S: ornitorinco        | P: ornitorinchi        )
                    | ( S: orso               | P: orsi                )
                    | ( S: uccello            | P: uccelli             )
                    | ( S: uistit^"&igrave"      | P: uistit^"&igrave"       )
                    )

                |  IlI:(   (* ANIMALE NEGATIVO MASCHILE **ANINMILI **ANIMNILI *)
                      ( S: babbuino           | P: babbuini            )
                    | ( S: barbagianni        | P: barbagianni         )
                    | ( S: barracuda          | P: barracuda           )
                    | ( S: bisonte            | P: bisonti             )
                    | ( S: boa                | P: boa                 )
                    | ( S: bovino             | P: bovini              )
                    | ( S: bradipo            | P: bradipi             )
                    | ( S: bue                | P: buoi                )
                    | ( S: bufalo             | P: bufali              )
                    | ( S: caimano            | P: caimani             )
                    | ( S: calabrone          | P: calabroni           )
                    | ( S: calamaro           | P: calamari            )
                    | ( S: camaleonte         | P: camaleonti          )
                    | ( S: cammello           | P: cammelli            )
                    | ( S: cane               | P: cani                )
                    | ( S: canguro            | P: canguri             )
                    | ( S: capodoglio         | P: capodogli           )
                    | ( S: caprone            | P: caproni             )
                    | ( S: cercopiteco        | P: cercopitechi        )
                    | ( S: cincill^"&agrave"     | P: cincill^"&agrave"      )
                    | ( S: cinghiale          | P: cinghiali           )
                    | ( S: cobra              | P: cobra               )
                    | ( S: coccodrillo        | P: coccodrilli         )
                    | ( S: colombaccio        | P: colombacci          )
                    | ( S: coniglio           | P: conigli             )
                    | ( S: corvo              | P: corvi               )
                    | ( S: coyote             | P: coyote              )
                    | ( S: criceto            | P: criceti             )
                    | ( S: crotalo            | P: crotali             )
                    | ( S: cuculo             | P: cuculi              )
                    | ( S: dattero di mare    | P: datteri di mare     )
                    | ( S: dromedario         | P: dromedari           )
                    | ( S: facocero           | P: facoceri            )
                    | ( S: formichiere        | P: formichieri         )
                    | ( S: gamberetto         | P: gamberetti          )
                    | ( S: ghiottone          | P: ghiottoni           )
                    | ( S: ghiro              | P: ghiri               )
                    | ( S: gibbone            | P: gibboni             )
                    | ( S: gnu                | P: gnu                 )
                    | ( S: gorilla            | P: gorilla             )
                    | ( S: granchio           | P: granchi             )
                    | ( S: grifone            | P: grifoni             )
                    | ( S: gru                | P: gru                 )
                    | ( S: gruccione          | P: gruccioni           )
                    | ( S: guanaco            | P: guanachi            )
                    | ( S: gufo               | P: gufi                )
                    | ( S: lama               | P: lama                )
                    | ( S: lemming            | P: lemming             )
                    | ( S: lombrico           | P: lombrichi           )
                    | ( S: luccio             | P: lucci               )
                    | ( S: lupo               | P: lupi                )
                    | ( S: macaco             | P: macachi             )
                    | ( S: maiale             | P: maiale              )
                    | ( S: maki               | P: maki                )
                    | ( S: mamba              | P: mamba               )
                    | ( S: mandrillo          | P: mandrilli           )
                    | ( S: manta              | P: mante               )
                    | ( S: mostro             | P: mostri              )
                    | ( S: muflone            | P: mufloni             )
                    | ( S: mulo               | P: muli                )
                    | ( S: nasello            | P: naselli             )
                    | ( S: paguro             | P: paguri              )
                    | ( S: panda              | P: panda               )
                    | ( S: pavone             | P: pavoni              )
                    | ( S: pellicano          | P: pellicani           )
                    | ( S: pesce              | P: pesci               )
                    | ( S: pesce gatto        | P: pesci gatto         ) 
                    | ( S: pesce istrice      | P: pesci istrice       )
                    | ( S: pesce martello     | P: pesci martello      )
                    | ( S: pesce pagliaccio   | P: pesci pagliaccio    )
                    | ( S: pesce palla        | P: pesci palla         )
                    | ( S: pesce pappagallo   | P: pesci pappagallo    )
                    | ( S: pesce pilota       | P: pesci pilota        )
                    | ( S: pesce spada        | P: pesci spada         )
                    | ( S: picchio            | P: picchi              )
                    | ( S: pinguino           | P: pinguini            )
                    | ( S: pipistrello        | P: pipistrelli         )
                    | ( S: pipistrello        | P: pipistrelli         )
                    | ( S: piranha            | P: piranha             )
                    | ( S: pitone             | P: pitoni              )
                    | ( S: polpo              | P: polpi               )
                    | ( S: porco              | P: porci               )
                    | ( S: porcospino         | P: porcospini          )
                    | ( S: procione           | P: procioni            )
                    | ( S: proteo             | P: protei              )
                    | ( S: puma               | P: puma                )
                    | ( S: ragno              | P: ragni               )
                    | ( S: ragno              | P: ragni               )
                    | ( S: ramarro            | P: ramarri             )
                    | ( S: riccio             | P: ricci               )
                    | ( S: rinoceronte        | P: rinoceronti         )
                    | ( S: rospo              | P: rospi               )
                    | ( S: salmone            | P: salmoni             )
                    | ( S: serpente           | P: serpenti            )
                    | ( S: succiacapre        | P: succiacapre         )
                    | ( S: tacchino           | P: tacchini            )
                    | ( S: tapiro             | P: tapiri              )
                    | ( S: tasso              | P: tassi               )
                    | ( S: tonno              | P: tonni               )
                    | ( S: topo               | P: topi                )
                    | ( S: vampiro            | P: vampiri             )
                    | ( S: varano             | P: varani              )
                    | ( S: vombato            | P: vombati             )
                    )
                )



          |  F:(           (* ANIMALE NEGATIVO FEMMINILE **ANINF     **ANIFN     *)
                  LaLe:(   (* ANIMALE NEGATIVO FEMMINILE **ANINFLALE **ANIFNLALE *)
                      ( S: balena             | P: balene              )
                    | ( S: balenottera        | P: balenottere         )
                    | ( S: belva              | P: belve               )
                    | ( S: bertuccia          | P: bertucce            )
                    | ( S: bestia             | P: bestie              )
                    | ( S: cagna              | P: cagne               )
                    | ( S: canocchia          | P: canocchie           )
                    | ( S: capra              | P: capre               )
                    | ( S: carpa              | P: carpe               )
                    | ( S: cavalletta         | P: cavallette          )
                    | ( S: cavia              | P: cavie               )
                    | ( S: cavia              | P: cavie               )
                    | ( S: cernia             | P: cernie              )
                    | ( S: chimera            | P: chimere             )
                    | ( S: cicala             | P: cicale              )
                    | ( S: civetta            | P: civette             )
                    | ( S: cornacchia         | P: cornacchie          )
                    | ( S: donnola            | P: donnole             )
                    | ( S: faina              | P: faine               )
                    | ( S: faina              | P: faine               )
                    | ( S: faraona            | P: faraone             )
                    | ( S: fiera              | P: fiere               )
                    | ( S: foca               | P: foche               )
                    | ( S: gazza              | P: gazze               )
                    | ( S: gracula            | P: gracule             )
                    | ( S: iena               | P: iene                )
                    | ( S: iena               | P: iene                )
                    | ( S: lepre              | P: lepri               )
                    | ( S: lince              | P: linci               )
                    | ( S: locusta            | P: locuste             )
                    | ( S: lucciola           | P: lucciole            )
                    | ( S: lucertola          | P: lucertole           )
                    | ( S: lumaca             | P: lumache             )
                    | ( S: mammola            | P: mammole             )
                    | ( S: mangusta           | P: manguste            )
                    | ( S: mantide            | P: mantidi             )
                    | ( S: medusa             | P: meduse              )
                    | ( S: megattera          | P: megattere           )
                    | ( S: mosca              | P: mosche              )
                    | ( S: mucca              | P: mucche              )
                    | ( S: murena             | P: murene              )
                    | ( S: nutria             | P: nutrie              )
                    | ( S: pantera            | P: pantere             )
                    | ( S: patella            | P: patelle             )
                    | ( S: pecora             | P: pecore              )
                    | ( S: quaglia            | P: quaglie             )
                    | ( S: rana               | P: rane                )
                    | ( S: razza              | P: razze               )
                    | ( S: salamandra         | P: salamandre          )
                    | ( S: scimmia            | P: scimmie             )
                    | ( S: scrofa             | P: scrofe              )
                    | ( S: seppia             | P: seppie              )
                    | ( S: sogliola           | P: sogliole            )
                    | ( S: talpa              | P: talpe               )
                    | ( S: talpa              | P: talpe               )
                    | ( S: tarantola          | P: tarantole           )
                    | ( S: testuggine         | P: testuggini          )
                    | ( S: tigre              | P: tigri               )
                    | ( S: trota              | P: trote               )
                    | ( S: vacca              | P: vacche              )
                    | ( S: vedova nera        | P: vedove nere         )
                    | ( S: vespa              | P: vespe               )
                    | ( S: vipera             | P: vipere              )
                    | ( S: volpe              | P: volpi               )
                    | ( S: zanzara            | P: zanzare             )
                    )

                |  LLe:(   (* ANIMALE NEGATIVO FEMMINILE **ANINFLLE **ANIFNLLE *)
                      ( S: anatra             | P: anatre              )
                    | ( S: anaconda           | P: anaconde            )
                    | ( S: anguilla           | P: anguille            )
                    | ( S: antilocapra        | P: antilocapre         )
                    | ( S: aragosta           | P: aragoste            )
                    | ( S: arvicola           | P: arvicole            )
                    | ( S: biscia             | P: bisce               )
                    | ( S: iguana             | P: iguane              )
                    | ( S: oca                | P: oche                )
                    | ( S: orata              | P: orate               )
                    | ( S: orca               | P: orche               )
                    | ( S: ostrica            | P: ostriche            )
                    | ( S: otaria             | P: otarie              )
                    )
                )


            ) (* ANIMALE NEGATIVO - FINE *)



        ) (* ANIMALE - FINE *)



      (*     ASTRAZIONE    *)



    | Astrazione: (

          Positivo: (

              M: (         (* ASTRAZIONE POSITIVO MASCHILE **ASTPM      **ASTMP      *)
                  LoGli: ( (* ASTRAZIONE POSITIVO MASCHILE **ASTPMLOGLI **ASTMPLOGLI *)
                      ( S: struggimento       | P: struggimenti       )
                    | ( S: stile              | P: stili              )
                    | ( S: sbarco             | P: sbarchi            )
                    )

                |  LGli: ( (* ASTRAZIONE POSITIVO MASCHILE **ASTPMLGLI  **ASTMPLGLI  *)
                      ( S: affiatamento       | P: affiatamento       )
                    | ( S: abbigliamento      | P: abbigliamenti      )
                    | ( S: accorgimento       | P: accorgimenti       )
                    | ( S: accrescimento      | P: accrescimenti      )
                    | ( S: accudimento        | P: accudimenti        )
                    | ( S: addestramento      | P: addestramenti      )
                    | ( S: affetto            | P: affetti            )
                    | ( S: affiatamento       | P: affiatamenti       )
                    | ( S: affrancamento      | P: affrancamenti      )
                    | ( S: aggiornamento      | P: aggiornamenti      )
                    | ( S: allargamento       | P: allargamenti       )
                    | ( S: allattamento       | P: allattamenti       )
                    | ( S: allenamento        | P: allenamenti        )
                    | ( S: atteggiamento      | P: atteggiamenti      )
                    | ( S: avvenimento        | P: avvenimenti        )
                    | ( S: imperativo         | P: imperativi         )
                    | ( S: insegnamento       | P: insegnamenti       )
                    )

                |  IlI:(   (* ASTRAZIONE POSITIVO MASCHILE **ASTPMILI **ASTMPILI *)
                      ( S: sapere             | P: saperi             )
                    | ( S: buonsenso          | P: buonsensi          )
                    | ( S: carisma            | P: fascini            ) (* solo singolare *)
                    | ( S: chiarimento        | P: chiarimenti        )
                    | ( S: commento           | P: commenti           )
                    | ( S: destino            | P: destini            )
                    | ( S: fascino            | P: fascini            )
                    | ( S: messaggio          | P: messaggi           )
                    | ( S: mistero            | P: misteri            )
                    | ( S: mito               | P: miti               )
                    | ( S: pensiero           | P: pensieri           )
                    | ( S: principio          | P: principi           )
                    | ( S: progetto           | P: progetti           )
                    | ( S: regalo             | P: regali             )
                    | ( S: responso           | P: responsi           )
                    | ( S: ritrovamento       | P: ritrovamenti       )
                    | ( S: sapere             | P: saperi             )
                    | ( S: senno              | P: trionfi            ) (* solo singolare *)
                    | ( S: sentimento         | P: sentimenti         )
                    | ( S: sogno              | P: sogni              )
                    | ( S: trionfo            | P: trionfi            )
                    )
                )



          |  F:(           (* ASTRAZIONE POSITIVO FEMMINILE **ASTPF     **ASTFP     *)
                  LaLe:(   (* ASTRAZIONE POSITIVO FEMMINILE **ASTPFLALE **ASTFPLALE *)
                      ( S: rivalsa            | P: rivalse            )
                    | ( S: baldanza           | P: baldanze           )
                    | ( S: bellezza           | P: bellezze           )
                    | ( S: bianchezza         | P: bianchezze         )
                    | ( S: bont^"&agrave"        | P: bont^"&agrave"        )
                    | ( S: brillantezza       | P: brillantezze       )
                    | ( S: certezza           | P: certezze           )
                    | ( S: chiarezza          | P: chiarezze          )
                    | ( S: circospezione      | P: circospezioni      )
                    | ( S: civilt^"&agrave"      | P: civilt^"&agrave"      )
                    | ( S: compattezza        | P: compattezze        )
                    | ( S: compiutezza        | P: compiutezze        )
                    | ( S: completezza        | P: completezze        )
                    | ( S: compostezza        | P: compostezze        )
                    | ( S: concordanza        | P: concordanze        )
                    | ( S: concretezza        | P: concretezze        )
                    | ( S: consapevolezza     | P: consapevolezze     )
                    | ( S: consideratezza     | P: consideratezze     )
                    | ( S: consonanza         | P: consonanze         )
                    | ( S: contentezza        | P: contentezze        )
                    | ( S: contenutezza       | P: contenutezze       )
                    | ( S: correttezza        | P: correttezze        )
                    | ( S: costanza           | P: costanze           )
                    | ( S: croccantezza       | P: croccantezze       )
                    | ( S: danza              | P: danze              )
                    | ( S: delicatezza        | P: delicatezze        )
                    | ( S: destrezza          | P: destrezze          )
                    | ( S: determinatezza     | P: determinatezze     )
                    | ( S: determinazione     | P: determinazioni     )
                    | ( S: dimestichezza      | P: dimestichezze      )
                    | ( S: discrezione        | P: discrezioni        )
                    | ( S: dolcezza           | P: dolcezze           )
                    | ( S: durevolezza        | P: durevolezze        )
                    | ( S: fede               | P: finezze            ) (* solo singolare *)
                    | ( S: fermezza           | P: fermezze           )
                    | ( S: fertilit^"&agrave"    | P: fertilit^"&agrave"    )
                    | ( S: fierezza           | P: fierezze           )
                    | ( S: filosofia          | P: filosofie          )
                    | ( S: finezza            | P: finezze            )
                    | ( S: fragranza          | P: fragranze          )
                    | ( S: franchezza         | P: franchezze         )
                    | ( S: fratellanza        | P: fratellanze        )
                    | ( S: freschezza         | P: freschezze         )
                    | ( S: frugalit^"&agrave"    | P: frugalit^"&agrave"    )
                    | ( S: gentilezza         | P: gentilezze         )
                    | ( S: gestione           | P: gestione           )
                    | ( S: giovinezza         | P: giovinezze         )
                    | ( S: giustizia          | P: giustizie          )
                    | ( S: grandezza          | P: grandezze          )
                    | ( S: legge              | P: leggi              )
                    | ( S: libert^"&agrave"      | P: libert^"&agrave"      )
                    | ( S: lungimiranza       | P: lungimiranze       )
                    | ( S: maggioranza        | P: maggioranze        )
                    | ( S: maternit^"&agrave"    | P: maternit^"&agrave"    )
                    | ( S: moderazione        | P: moderazioni        )
                    | ( S: nobilt^"&agrave"      | P: nobilt^"&agrave"      )
                    | ( S: nudit^"&agrave"       | P: nudit^"&agrave"       )
                    | ( S: padronanza         | P: padronanze         )
                    | ( S: parsimonia         | P: parsimonie         )
                    | ( S: passione           | P: passioni           )
                    | ( S: pazienza           | P: pazienze           )
                    | ( S: perseveranza       | P: perseveranze       )
                    | ( S: preponderanza      | P: preponderanze      )
                    | ( S: previdenza         | P: previdenze         )
                    | ( S: produzione         | P: produzioni         )
                    | ( S: promessa           | P: promesse           )
                    | ( S: propriet^"&agrave"    | P: propriet^"&agrave"    )
                    | ( S: prudenza           | P: prudenze           )
                    | ( S: rappresentanza     | P: rappresentanze     )
                    | ( S: rilevanza          | P: rilevanze          )
                    | ( S: rinomanza          | P: rinomanze          )
                    | ( S: risonanza          | P: risonanze          )
                    | ( S: risposta           | P: risposte           )
                    | ( S: rivincita          | P: rivincitee         )
                    | ( S: scappatella        | P: scappatelle        )
                    | ( S: sensibilit^"&agrave"  | P: sensibilit^"&agrave"  )
                    | ( S: sicurezza          | P: sicurezze          )
                    | ( S: sobriet^"&agrave"     | P: sobriet^"&agrave"     )
                    | ( S: societ^"&agrave"      | P: societ^"&agrave"      )
                    | ( S: solidit^"&agrave"     | P: solidit^"&agrave"     )
                    | ( S: soluzione          | P: soluzioni          )
                    | ( S: somiglianza        | P: somiglianze        )
                    | ( S: spiegazione        | P: spiegazioni        )
                    | ( S: virt^"&ugrave"        | P: virt^"&ugrave"        )
                    | ( S: vita               | P: vite               )
                    )

                |  LLe:(   (* ASTRAZIONE POSITIVO FEMMINILE **ASTPFLLE **ASTFPLLE *)
                      ( S: abitudine             | P: abitudini             )
                    | ( S: abilit^"&agrave"         | P: abilit^"&agrave"         )
                    | ( S: accademia             | P: accademie             )
                    | ( S: accelerazione         | P: accelerazioni         )
                    | ( S: acclamazione          | P: acclamazioni          )
                    | ( S: accoglienza           | P: accortezze            ) (* solo singolare *)
                    | ( S: accortezza            | P: accortezze            )
                    | ( S: accuratezza           | P: accuratezze           )
                    | ( S: acutezza              | P: acutezze              )
                    | ( S: adeguatezza           | P: adeguatezze           )
                    | ( S: adorazione            | P: adorazioni            )
                    | ( S: adozione              | P: adozioni              )
                    | ( S: adunanza              | P: adunanze              )
                    | ( S: affermazione          | P: affermazioni          )
                    | ( S: affettivit^"&agrave"     | P: affettivit^"&agrave"     )
                    | ( S: affettuosit^"&agrave"    | P: affettuosit^"&agrave"    )
                    | ( S: affezione             | P: affezioni             )
                    | ( S: agevolazione          | P: agevolazioni          )
                    | ( S: aggregazione          | P: aggregazioni          )
                    | ( S: alimentazione         | P: alimentazioni         )
                    | ( S: alleanza              | P: alleanze              )
                    | ( S: alternanza            | P: alternanza            )
                    | ( S: altezza               | P: altezze               )
                    | ( S: ambizione             | P: ambizioni             )
                    | ( S: amichevolezza         | P: amichevolezze         )
                    | ( S: amorevolezza          | P: amorevolezze          )
                    | ( S: ampiezza              | P: ampiezze              )
                    | ( S: antichit^"&agrave"       | P: antichit^"&agrave"       )
                    | ( S: anticipazione         | P: anticipazioni         )
                    | ( S: antropologia          | P: antropologie          )
                    | ( S: applicazione          | P: applicazioni          )
                    | ( S: approvazione          | P: approvazioni          )
                    | ( S: argomentazione        | P: argomentazioni        )
                    | ( S: arte                  | P: arti                  )
                    | ( S: assennatezza          | P: assennatezze          )
                    | ( S: assolutezza           | P: assolutezze           )
                    | ( S: autorevolezza         | P: autorevolezze         )
                    | ( S: avvedutezza           | P: avvedutezze           )
                    | ( S: ebrezza               | P: ebrezze               )
                    | ( S: eclatanza             | P: eclatanze             )
                    | ( S: economia              | P: economie              )
                    | ( S: eguaglianza           | P: eguaglianze           )
                    | ( S: elaboratezza          | P: elaboratezze          )
                    | ( S: eleganza              | P: eleganze              )
                    | ( S: esperienza            | P: esperienzae           )
                    | ( S: essenza               | P: essenze               )
                    | ( S: esuberanza            | P: esuberanze            )
                    | ( S: esultanza             | P: esultanze             )
                    | ( S: illibatezza           | P: illibatezze           )
                    | ( S: illimitatezza         | P: illimitatezze         )
                    | ( S: immediatezza          | P: immediatezze          )
                    | ( S: immunit^"&agrave"        | P: immunit^"&agrave"        )
                    | ( S: incolpevolezza        | P: incolpevolezze        )
                    | ( S: infallibilit^"&agrave"   | P: infallibilit^"&agrave"   )
                    | ( S: invincibilit^"&agrave"   | P: invincibilit^"&agrave"   )
                    | ( S: inviolabilit^"&agrave"   | P: inviolabilit^"&agrave"   )
                    | ( S: invulnerabilit^"&agrave" | P: invulnerabilit^"&agrave" )
                    | ( S: onest^"&agrave"          | P: onest^"&agrave"          )
                    | ( S: osservanza            | P: osservanze            )
                    | ( S: umilt^"&agrave"          | P: umilt^"&agrave"          )
                    )
                )


            ) (* ASTRAZIONE POSITIVO - FINE *)


        | Negativo:(



              M:(          (* ASTRAZIONE NEGATIVO MASCHILE **ASTNM      **ASTMN      *)
                  LoGli:(  (* ASTRAZIONE NEGATIVO MASCHILE **ASTNMLOGLI **ASTMNLOGLI *)
                      ( S: scorno             | P: scorno             )
                    | ( S: sbaglio            | P: sbagli             )
                    | ( S: sbandamento        | P: sbandamenti        )
                    | ( S: scandalo           | P: scandali           )
                    | ( S: scherzo            | P: scherzi            )
                    | ( S: sdegno             | P: sdegni             )
                    | ( S: smarrimento        | P: smarrimenti        )
                    | ( S: spregio            | P: pregi              )
                    | ( S: squallore          | P: squallore          )
                    )

                |  LGli:(  (* ASTRAZIONE NEGATIVO MASCHILE **ASTNMLGLI **ASTMNLGLI *)
                      ( S: accanimento        | P: accanimenti        )
                    | ( S: abbandono          | P: abbandoni          )
                    | ( S: abbassamento       | P: abbassamenti       )
                    | ( S: abbattimento       | P: abbattimenti       )
                    | ( S: abbruttimento      | P: abbruttimenti      )
                    | ( S: abominio           | P: abomini            )
                    | ( S: accantonamento     | P: accantonamenti     )
                    | ( S: accaparramento     | P: accaparramenti     )
                    | ( S: accecamento        | P: accecamenti        )
                    | ( S: accidente          | P: accidenti          )
                    | ( S: accoppiamento      | P: accoppiamenti      )
                    | ( S: affannamento       | P: affannamenti       )
                    | ( S: affanno            | P: affanni            )
                    | ( S: affaticamento      | P: affaticamenti      )
                    | ( S: affaticamento      | P: affaticamenti      )
                    | ( S: affollamento       | P: affollamenti       )
                    | ( S: affronto           | P: affronti           )
                    | ( S: affumicamento      | P: affumicamenti      )
                    | ( S: aggrovigliamento   | P: aggrovigliamenti   )
                    | ( S: aldil^"&agrave"       | P: aldil^"&agrave"       )
                    | ( S: allagamento        | P: allagamenti        )
                    | ( S: allarme            | P: allarmi            )
                    | ( S: allentamento       | P: allentamenti       )
                    | ( S: anonimato          | P: anonimati          )
                    | ( S: assillo            | P: assilli            )
                    | ( S: errore             | P: errori             )
                    | ( S: obbrobrio          | P: obbrobri           )
                    | ( S: odio               | P: odii               )
                    )

                |  IlI:(   (* ASTRAZIONE NEGATIVO MASCHILE **ASTNMILI **ASTMNILI *)
                      ( S: fanatismo          | P: fanatismi          )
                    | ( S: baratto            | P: baratti            )
                    | ( S: bisogno            | P: bisogni            )
                    | ( S: cinismo            | P: cinismi            )
                    | ( S: commercio          | P: commerci           )
                    | ( S: cruccio            | P: crucci             )
                    | ( S: delirio            | P: deliri             )
                    | ( S: delitto            | P: delitti            )
                    | ( S: disgusto           | P: disgusti           )
                    | ( S: disincanto         | P: disincanti         )
                    | ( S: disonore           | P: disonori           )
                    | ( S: dolore             | P: dolori             )
                    | ( S: fastidio           | P: fastidi            )
                    | ( S: feticismo          | P: feticismi          )
                    | ( S: marchio            | P: marchi             )
                    | ( S: potere             | P: poteri             )
                    | ( S: razzismo           | P: razzismi           )
                    | ( S: reato              | P: reati              )
                    | ( S: risentimento       | P: risentimenti       )
                    | ( S: supplizio          | P: supplizi           )
                    | ( S: tormento           | P: tormenti           )
                    | ( S: tradimento         | P: tradimenti         )
                    | ( S: travaglio          | P: travagli           )
                    | ( S: vilipendio         | P: vilipendi          )
                    | ( S: vuoto              | P: vuoti              )
                    )
                )



          |  F:(           (* ASTRAZIONE NEGATIVO FEMMINILE **ASTNF     **ASTFN     *)
                  LaLe:(   (* ASTRAZIONE NEGATIVO FEMMINILE **ASTNFLALE **ASTFNLALE *)
                      ( S: chiusura           | P: chiusure           )
                    | ( S: bassezza           | P: bassezze           )
                    | ( S: belligeranza       | P: belligeranze       )
                    | ( S: brevit^"&agrave"      | P: brevit^"&agrave"      )
                    | ( S: bruschezza         | P: bruschezze         )
                    | ( S: bruttezza          | P: bruttezze          )
                    | ( S: bruttura           | P: brutture           )
                    | ( S: caduta             | P: cadute             )
                    | ( S: calamit^"&agrave"     | P: calamit^"&agrave"     )
                    | ( S: cattiveria         | P: cattiverie         )
                    | ( S: claustrofobia      | P: claustrofobie      )
                    | ( S: claustrofobia      | P: condoglianze       ) (* solo plurale *)
                    | ( S: colpevolezza       | P: colpevolezze       )
                    | ( S: complicatezza      | P: complicatezze      )
                    | ( S: complicazione      | P: complicazioni      )
                    | ( S: confusione         | P: confusioni         )
                    | ( S: consunzione        | P: consunzioni        )
                    | ( S: crudelt^"&agrave"     | P: crudelt^"&agrave"     )
                    | ( S: crudezza           | P: crudezze           )
                    | ( S: cupezza            | P: cupezze            )
                    | ( S: debolezza          | P: debolezze          )
                    | ( S: depravazione       | P: depravazioni       )
                    | ( S: devianza           | P: devianze           )
                    | ( S: dimenticanza       | P: dimenticanze       )
                    | ( S: discrepanza        | P: discrepanze        )
                    | ( S: disfatta           | P: disfatte           )
                    | ( S: dissipatezza       | P: dissipatezze       )
                    | ( S: dissolutezza       | P: dissolutezze       )
                    | ( S: dissonanza         | P: dissonanze         )
                    | ( S: distanza           | P: distanze           )
                    | ( S: distruzione        | P: distruzioni        )
                    | ( S: domanda            | P: domande            )
                    | ( S: doppiezza          | P: doppiezze          )
                    | ( S: durezza            | P: durezze            )
                    | ( S: fanciullezza       | P: fanciullezze       )
                    | ( S: fiacchezza         | P: fiacchezze         )
                    | ( S: finitezza          | P: finitezze          )
                    | ( S: flagranza          | P: flagranze          )
                    | ( S: follia             | P: follie             )
                    | ( S: freddezza          | P: freddezze          )
                    | ( S: fretta             | P: dissipatezze       ) (*solo singolare *)
                    | ( S: frivolezza         | P: frivolezze         )
                    | ( S: fuga               | P: fughe              )
                    | ( S: fuggevolezza       | P: fuggevolezze       )
                    | ( S: grassezza          | P: grassezze          )
                    | ( S: grossezza          | P: grossezze          )
                    | ( S: guerra             | P: guerre             )
                    | ( S: latitanza          | P: latitanze          )
                    | ( S: lontananza         | P: lontananze         )
                    | ( S: maledizione        | P: maledizioni        )
                    | ( S: malvagit^"&agrave"    | P: malvagit^"&agrave"    )
                    | ( S: mancanza           | P: mancanze           )
                    | ( S: militanza          | P: militanze          )
                    | ( S: minoranza          | P: minoranze          )
                    | ( S: miseria            | P: miserie            )
                    | ( S: morte              | P: morti              )
                    | ( S: noncuranza         | P: noncuranze         )
                    | ( S: paturnia           | P: paturnie           )
                    | ( S: petulanza          | P: petulanze          )
                    | ( S: polemica           | P: polemiche          )
                    | ( S: povert^"&agrave"      | P: povert^"&agrave"      )
                    | ( S: preoccupazione     | P: preoccupazioni     )
                    | ( S: presunzione        | P: presunzioni        )
                    | ( S: riluttanza         | P: riluttanze         )
                    | ( S: rimostranza        | P: rimostranze        )
                    | ( S: ripugnanza         | P: ripugnanze         )
                    | ( S: rivalit^"&agrave"     | P: rivalit^"&agrave"     )
                    | ( S: rovina             | P: rovine             )
                    | ( S: sconfitta          | P: sconfitte          )
                    | ( S: sete               | P: stravaganze        ) (* solo singolare *)
                    | ( S: stravaganza        | P: stravaganze        )
                    | ( S: stupidit^"&agrave"    | P: stupidit^"&agrave"    )
                    | ( S: tortura            | P: torture            )
                    | ( S: tribolazione       | P: tribolazioni       )
                    | ( S: vaghezza           | P: vaghezze           )
                    | ( S: vendetta           | P: vendette           )
                    | ( S: vilt^"&agrave"        | P: vilt^"&agrave"        )
                    | ( S: violenza           | P: violenze           )
                    )

                |  LLe:(   (* ASTRAZIONE NEGATIVO FEMMINILE **ASTNFLLE **ASTFNLLE *)
                      ( S: aberrazione        | P: aberrazioni         )
                    | ( S: abiezione          | P: abiezioni           )
                    | ( S: abluzione          | P: abluzioni           )
                    | ( S: abrogazione        | P: abrogazioni         )
                    | ( S: accumulazione      | P: accumulazioni       )
                    | ( S: accusa             | P: accuse              )
                    | ( S: acquiescenza       | P: acquiescenze        )
                    | ( S: acquisizione       | P: acquisizioni        )
                    | ( S: acrimonia          | P: acrimonie           )
                    | ( S: adulazione         | P: adulazioni          )
                    | ( S: affettazione       | P: affettazioni        )
                    | ( S: affiliazione       | P: affiliazioni        )
                    | ( S: afflizione         | P: afflizioni          )
                    | ( S: afonia             | P: afonie              )
                    | ( S: agitazione         | P: agitazioni          )
                    | ( S: agitazione         | P: agitazioni          )
                    | ( S: amarezza           | P: amarezze            )
                    | ( S: antipatia          | P: antipatie           )
                    | ( S: approssimazione    | P: approssimazioni     )
                    | ( S: arroganza          | P: arroganze           )
                    | ( S: asciuttezza        | P: asciuttezze         )
                    | ( S: asprezza           | P: asprezze            )
                    | ( S: astrattezza        | P: astrattezze         )
                    | ( S: astrazione         | P: astrazuibu          )
                    | ( S: avventatezza       | P: avventatezze        )
                    | ( S: efferatezza        | P: efferatezze         )
                    | ( S: elevatezza         | P: elevatezze          )
                    | ( S: esattezza          | P: esattezze           )
                    | ( S: esorbitanza        | P: esorbitanze         )
                    | ( S: ignoranza          | P: ignoranze           )
                    | ( S: impazienza         | P: impazienze          )
                    | ( S: incivilt^"&agrave"    | P: incivilt^"&agrave"     )
                    | ( S: incompiutezza      | P: incompiutezze       )
                    | ( S: incostanza         | P: incostanze          )
                    | ( S: incuranza          | P: incuranza           )
                    | ( S: infamia            | P: infamie             )
                    | ( S: infedelt^"&agrave"    | P: infedelt^"&agrave"     )
                    | ( S: insensibilit^"&agrave"| P: insensibilit^"&agrave" )
                    | ( S: intolleranza       | P: intolleranze        )
                    | ( S: ironia             | P: ironie              )
                    | ( S: irrilevanza        | P: irrilevanze         )
                    | ( S: oscenit^"&agrave"     | P: oscenit^"&agrave"      )
                    | ( S: ostilit^"&agrave"     | P: ostilit^"&agrave"      )
                    )
                )


            ) (* ASTRAZIONE NEGATIVO - FINE *)



        ) (* ASTRAZIONE - FINE *)





      (*   PSICHIATRIA     *)






    | Psichiatria:(

          Positivo:(

              M:(          (* PSICHIATRIA POSITIVO MASCHILE **PSIPM      **PSIMP      *)
                  LoGli:(  (* PSICHIATRIA POSITIVO MASCHILE **PSIPMLOGLI **PSIMPLOGLI *)
                      ( S: stimolante         | P: stimolanti         )
                    | ( S: sconforto          | P: sconforti          )
                    )

                |  LGli:(  (* PSICHIATRIA POSITIVO MASCHILE **PSIPMLGLI **PSIMPLGLI *)
                      ( S: impiastro          | P: impiastri          )
                    | ( S: anestesista        | P: anestesisti        )
                    | ( S: antidepressivo     | P: antidepressivi     )
                    | ( S: antidolorifico     | P: antidolorifici     )
                    | ( S: antidoto           | P: antidoti           )
                    | ( S: antinfiammatorio   | P: antinfiammatori    )
                    | ( S: antisettico        | P: antisettici        )
                    | ( S: antispastico       | P: antispastici       )
                    | ( S: antistaminico      | P: antistaminici      )
                    | ( S: unguento           | P: unguenti           )
                    )

                |  IlI:(   (* PSICHIATRIA POSITIVO MASCHILE **PSIPMILI **PSIMPILI *)
                      ( S: sedativo           | P: sedativi           )
                    | ( S: decotto            | P: decotti            )
                    | ( S: distillato         | P: distillati         )
                    | ( S: farmaco            | P: farmaci            )
                    | ( S: lenimento          | P: lenimenti          )
                    | ( S: lenitivo           | P: lenitivi           )
                    | ( S: rianimatore        | P: rianimatori        )
                    | ( S: toccasana          | P: toccasana          )
                    )
                )



          |  F:(           (* PSICHIATRIA POSITIVO FEMMINILE **PSIPF     **PSIFP     *)
                  LaLe:(   (* PSICHIATRIA POSITIVO FEMMINILE **PSIPFLALE **PSIFPLALE *)
                      ( S: panacea            | P: panacee            )
                    | ( S: cura               | P: cure               )
                    | ( S: droga              | P: droghe             )
                    | ( S: nevrosi            | P: nevrosi            )
                    | ( S: parafilia          | P: parafilie          )
                    | ( S: peretta            | P: perette            )
                    | ( S: personalit^"&agrave"  | P: personalit^"&agrave"  )
                    | ( S: pillola            | P: pillole            )
                    | ( S: pozione            | P: pozioni            )
                    | ( S: supposta           | P: supposte           )
                    | ( S: zoofilia           | P: zoofilie           )
                    )

                |  LLe:(   (* PSICHIATRIA POSITIVO FEMMINILE **PSIPFLLE **PSIFPLLE *)
                      ( S: iniezione          | P: iniezioni          )
                    | ( S: allucinazione      | P: allucinazioni      )
                    | ( S: antitetanica       | P: antitetaniche      )
                    )
                )


            ) (* PSICHIATRIA POSITIVO - FINE *)


        | Negativo:(



              M:(          (* PSICHIATRIA NEGATIVO MASCHILE **PSINM      **PSIMN      *)
                  LoGli:(  (* PSICHIATRIA NEGATIVO MASCHILE **PSINMLOGLI **PSIMNLOGLI *)
                      ( S: psicofarmaco       | P: psicofarmaci       )
                    | ( S: sconforto          | P: sconforti          )
                    | ( S: sgomento           | P: sgomenti           )
                    | ( S: stupro             | P: stupri             )
                    )

                |  LGli:(  (* PSICHIATRIA NEGATIVO MASCHILE **PSINMLGLI **PSIMNLGLI *)
                      ( S: obnubilamento      | P: obnubilamenti      )
                    | ( S: abulia             | P: abulie             )
                    | ( S: abuso              | P: abusi              )
                    | ( S: accesso            | P: accessi            )
                    | ( S: alienato           | P: alienati           )
                    | ( S: alieno             | P: alieni             )
                    | ( S: aneurisma          | P: aneurismi          )
                    | ( S: arbitrio           | P: arbitrii           )
                    | ( S: attacco di panico  | P: attacchi di panico )
                    | ( S: elettroshock       | P: elettroshock       )
                    | ( S: esibizionismo      | P: esibizionismi      )
                    )

                |  IlI:(   (* PSICHIATRIA NEGATIVO MASCHILE **PSINMILI **PSIMNILI *)
                      ( S: cataplasma         | P: cataplasmi         )
                    | ( S: clistere           | P: clisteri           )
                    | ( S: delirio            | P: deliri             )
                    | ( S: masochismo         | P: masochismi         )
                    | ( S: nervo              | P: nervi              )
                    | ( S: panico             | P: panici             )
                    | ( S: pazzo              | P: pazzi              )
                    | ( S: senso di colpa     | P: sensi di colpa     )
                    | ( S: tremore            | P: tremori            )
                    )
                )



          |  F:(           (* PSICHIATRIA NEGATIVO FEMMINILE **PSINF     **PSIFN     *)
                  LaLe:(   (* PSICHIATRIA NEGATIVO FEMMINILE **PSINFLALE **PSIFNLALE *)
                      ( S: flebo                   | P: flebo                   )
                    | ( S: camicia di forza        | P: camicie di forza        )
                    | ( S: convulsione             | P: convulsioni             )
                    | ( S: crisi d'^identit^"&agrave" | P: crisi d'^identit^"&agrave" )
                    | ( S: crisi di nervi          | P: crisi di nervi          )
                    | ( S: depressione             | P: depressioni             )
                    | ( S: devastazione            | P: devastazioni            )
                    | ( S: dipendenza              | P: dipendenze              )
                    | ( S: disperazione            | P: disperazioni            )
                    | ( S: dissociazione           | P: dissociazioni           )
                    | ( S: febbre                  | P: febbri                  )
                    | ( S: gravidanza              | P: gravidanze              )
                    | ( S: lobotomia               | P: lobotomie               )
                    | ( S: menopausa               | P: menopause               )
                    | ( S: pazzia                  | P: pazzie                  )
                    | ( S: sindrome                | P: sindromi                )
                    | ( S: tensione                | P: tensioni                )
                    | ( S: violenza carnale        | P: violenze carnali        )
                    | ( S: vivisezione             | P: vivisezioni             )
                    )

                |  LLe:(   (* PSICHIATRIA NEGATIVO FEMMINILE **PSINFLLE **PSIFNLLE *)
                      ( S: afasia             | P: afasie             )
                    | ( S: alienazione        | P: alienazioni        )
                    | ( S: allucinazione      | P: allucinazioni      )
                    | ( S: alterazione        | P: alterazioni        )
                    | ( S: amputazione        | P: amputazioni        )
                    | ( S: ansia              | P: ansie              )
                    | ( S: apatia             | P: apatie             )
                    | ( S: asportazione       | P: asportazioni       )
                    | ( S: elettrocuzione     | P: elettrocuzioni     )
                    | ( S: infermit^"&agrave"    | P: infermit^"&agrave"    )
                    | ( S: instabilit^"&agrave"  | P: instabilit^"&agrave"  )
                    | ( S: invalidit^"&agrave"   | P: invalidit^"&agrave"   )
                    | ( S: oppressione        | P: oppressioni        )
                    | ( S: ossessione         | P: ossessioni         )
                    )
                )


            ) (* PSICHIATRIA NEGATIVO - FINE *)



        ) (* PSICHIATRIA - FINE *)



      (*   PARTE DEL CORPO UOMO    *)


      (* Parti del corpo esclusive dell'uomo  *)



    | ParteDelCorpoUomo:(

          Positivo:(

              M:(          (* PARTEDELCORPO-UOMO POSITIVO MASCHILE **CORPM      **CORMP      *)
                  LoGli:(  (* PARTEDELCORPO-UOMO POSITIVO MASCHILE **CORPMLOGLI **CORMPLOGLI *)
                      ( S: scroto             | P: scroti             )
                    | ( S: scroto             | P: scroti             )
                    )

                |  LGli:(  (* PARTEDELCORPO-UOMO POSITIVO MASCHILE **CORPMLGLI **CORMPLGLI *)
                      ( S: occhio             | P: occhi              )
                    | ( S: addome             | P: addomi             )
                    | ( S: anulare            | P: anulari            )
                    | ( S: avambraccio        | P: avambracci         )
                    )

                |  IlI:(   (* PARTEDELCORPO-UOMO POSITIVO MASCHILE **CORPMILI **CORMPILI *)
                      ( S: petto              | P: petti              )
                    | ( S: pene               | P: peni               )
                    )
                )



          |  F:(           (* PARTEDELCORPO-UOMO POSITIVO FEMMINILE **CORPF     **CORFP     *)
                  LaLe:(   (* PARTEDELCORPO-UOMO POSITIVO FEMMINILE **CORPFLALE **CORFPLALE *)
                      ( S: schiena            | P: schiene            )
                    | ( S: faccia             | P: facce              )
                    )

                |  LLe:(
                      ( S: anca               | P: anche              )
                    | ( S: anca               | P: anche              )
                    )
                )


            ) (* PARTEDELCORPO-UOMO POSITIVO - FINE *)


        | Negativo:(



              M:(          (* PARTEDELCORPO-UOMO NEGATIVO MASCHILE **CORNM      **CORMN      *)
                  LoGli:(  (* PARTEDELCORPO-UOMO NEGATIVO MASCHILE **CORNMLOGLI **CORMNLOGLI *)
                      ( S: scroto             | P: scroti             )
                    | ( S: scroto             | P: scroti             )
                    )

                |  LGli:(  (* PARTEDELCORPO-UOMO NEGATIVO MASCHILE **CORNMLGLI **CORMNLGLI *)
                      ( S: occhio             | P: occhi              )
                    | ( S: uccello            | P: uccelli            )
                    )

                |  IlI:(   (* PARTEDELCORPO-UOMO NEGATIVO MASCHILE **CORNMILI **CORMNILI *)
                      ( S: tronco             | P: tronchi            )
                    | ( S: glande             | P: glandi             )
                    | ( S: testicolo          | P: testicoli          )
                    | ( S: fallo              | P: falli              )
                    | ( S: muso               | P: musi               )
                    | ( S: grugno             | P: grugni             )
                    | ( S: membro             | P: membri             )
                    )
                )



          |  F:(           (* PARTEDELCORPO-UOMO NEGATIVO FEMMINILE **CORNF     **CORFN     *)
                  LaLe:(   (* PARTEDELCORPO-UOMO NEGATIVO FEMMINILE **CORNFLALE **CORFNLALE *)
                      ( S: pelle              | P: pelli              )
                    | ( S: prostata           | P: prostate           )
                    )

                |  LLe:(   (* PARTEDELCORPO-UOMO NEGATIVO FEMMINILE **CORNFLLE **CORFNLLE *)
                      ( S: adenoide           | P: adenoidi           )
                    | ( S: pancia             | P: pance              )
                    )
                )


            ) (* PARTEDELCORPO-UOMO NEGATIVO - FINE *)



        ) (* PARTEDELCORPO-UOMO - FINE *)







      (*   PARTE DEL CORPO DONNA    *)


      (* Parti del corpo esclusive della donna  *)


    | ParteDelCorpoDonna:(

          Positivo:(

              M:(          (* PARTEDELCORPO-DONNA POSITIVO MASCHILE **CORPM      **CORMP      *)
                  LoGli:(  (* PARTEDELCORPO-DONNA POSITIVO MASCHILE **CORPMLOGLI **CORMPLOGLI *)
                      ( S: stomaco            | P: stomaci            )
                    | ( S: stomaco            | P: stomaci            )
                    )

                |  LGli:(  (* PARTEDELCORPO-DONNA POSITIVO MASCHILE **CORPMLGLI **CORMPLGLI *)
                      ( S: utero              | P: uteri              )
                    | ( S: utero              | P: uteri              )
                    )

                |  IlI:(   (* PARTEDELCORPO-DONNA POSITIVO MASCHILE **CORPMILI **CORMPILI *)
                      ( S: clitoride          | P: clitoridi          )
                    | ( S: seno               | P: seni               )
                    | ( S: pube               | P: pubi               )
                    | ( S: ventre             | P: ventri             )
                    )
                )



          |  F:(           (* PARTEDELCORPO-DONNA POSITIVO FEMMINILE **CORPF     **CORFP     *)
                  LaLe:(   (* PARTEDELCORPO-DONNA POSITIVO FEMMINILE **CORPFLALE **CORFPLALE *)
                      ( S: mammella           | P: mammelle           )
                    | ( S: mammella           | P: pubenda            ) (* solo plurale *)
                    | ( S: vagina             | P: vagine             )
                    )

                |  LLe:(   (* PARTEDELCORPO-DONNA POSITIVO FEMMINILE **CORPFLLE **CORFPLLE *)
                      ( S: utero              | P: uteri              )
                    | ( S: utero              | P: uteri              )
                    )
                )


            ) (* PARTEDELCORPO-DONNA POSITIVO - FINE *)


        | Negativo:(



              M:(          (* PARTEDELCORPO-DONNA NEGATIVO MASCHILE **CORNM      **CORMN      *)
                  LoGli:(  (* PARTEDELCORPO-DONNA NEGATIVO MASCHILE **CORNMLOGLI **CORMNLOGLI *)
                      ( S: stomaco            | P: stomaci            )
                    | ( S: stomaco            | P: stomaci            )
                    )

                |  LGli:(  (* PARTEDELCORPO-DONNA NEGATIVO MASCHILE **CORNMLGLI **CORMNLGLI *)
                      ( S: utero              | P: uteri              )
                    | ( S: utero              | P: uteri              )
                    )

                |  IlI:(   (* PARTEDELCORPO-DONNA NEGATIVO MASCHILE **CORNMILI **CORMNILI *)
                      ( S: clitoride          | P: clitoridi          )
                    | ( S: clitoride          | P: clitoridi          )
                    )
                )



          |  F:(           (* PARTEDELCORPO-DONNA NEGATIVO FEMMINILE **CORNF     **CORFN     *)
                  LaLe:(   (* PARTEDELCORPO-DONNA NEGATIVO FEMMINILE **CORNFLALE **CORFNLALE *)
                      ( S: mammella           | P: mammelle           )
                    | ( S: tetta              | P: tette              )
                    )

                |  LLe:(   (* PARTEDELCORPO-DONNA NEGATIVO FEMMINILE **CORNFLLE **CORFNLLE *)
                      ( S: adenoide           | P: adenoidi           )
                    | ( S: utero              | P: uteri              )
                    )
                )


            ) (* PARTEDELCORPO-DONNA NEGATIVO - FINE *)



        ) (* PARTEDELCORPO-DONNA - FINE *)










      (*   PARTE DEL CORPO BISEX                                         *)
      (*                                                                 *)
      (*                                                                 *)
      (*  Parti del corpo comuni a uomo e donna                          *)
      (*                                                                 *)
      (*                                                                 *)



    | ParteDelCorpoBisex:(

          Positivo:(

              M:(          (* PARTEDELCORPO-BISEX POSITIVO MASCHILE **CORPM      **CORMP      *)
                  LoGli:(  (* PARTEDELCORPO-BISEX POSITIVO MASCHILE **CORPMLOGLI **CORMPLOGLI *)
                      ( S: sterno             | P: sterni             )
                    | ( S: stomaco            | P: stomaci            )
                    )

                |  LGli:(  (* PARTEDELCORPO-BISEX POSITIVO MASCHILE **CORPMLGLI **CORMPLGLI *)
                      ( S: ombelico           | P: ombelichi          )
                    | ( S: addome             | P: addomi             )
                    | ( S: occhio             | P: occhi              )
                    )

                |  IlI:(   (* PARTEDELCORPO-BISEX POSITIVO MASCHILE **CORPMILI **CORMPILI *)
                      ( S: dorso              | P: dorsi              )
                    | ( S: braccio            | P: bracci             )
                    | ( S: busto              | P: busti              )
                    | ( S: capello            | P: capelli            )
                    | ( S: cervello           | P: cervelli           )
                    | ( S: cuore              | P: cuori              )
                    | ( S: gomito             | P: gomiti             )
                    | ( S: lombo              | P: lombi              )
                    | ( S: mento              | P: menti              )
                    | ( S: muscolo            | P: muscoli            )
                    | ( S: naso               | P: nasi               )
                    | ( S: piede              | P: piedi              )
                    | ( S: torace             | P: toraci             )
                    | ( S: viso               | P: visi               )
                    | ( S: volto              | P: volti              )
                    )
                )



          |  F:(           (* PARTEDELCORPO-BISEX POSITIVO FEMMINILE **CORPF     **CORFP     *)
                  LaLe:(   (* PARTEDELCORPO-BISEX POSITIVO FEMMINILE **CORPFLALE **CORFPLALE *)
                      ( S: testa              | P: teste              )
                    | ( S: faccia             | P: facce              )
                    | ( S: fronte             | P: fronti             )
                    | ( S: guancia            | P: guance             )
                    | ( S: mano               | P: mani               )
                    | ( S: nuca               | P: nuche              )
                    | ( S: spalla             | P: spalle             )
                    )

                |  LLe:(   (* PARTEDELCORPO-BISEX POSITIVO FEMMINILE **CORPFLLE **CORFPLLE *)
                      ( S: anca               | P: anche              )
                    | ( S: ugola              | P: ugole              )
                    )
                )


            ) (* PARTEDELCORPO-BISEX POSITIVO - FINE *)


        | Negativo:(



              M:(          (* PARTEDELCORPO-BISEX NEGATIVO MASCHILE **CORNM      **CORMN      *)
                  LoGli:(  (* PARTEDELCORPO-BISEX NEGATIVO MASCHILE **CORNMLOGLI **CORMNLOGLI *)
                      ( S: scheletro          | P: scheletri          )
                    | ( S: stomaco            | P: stomaci            )
                    )

                |  LGli:(  (* PARTEDELCORPO-BISEX NEGATIVO MASCHILE **CORNMLGLI **CORMNLGLI *)
                      ( S: ombelico           | P: ombelichi          )
                    | ( S: alluce             | P: alluci             )
                    | ( S: intestino          | P: intestini          )
                    | ( S: esofago            | P: esofagi            )
                    )

                |  IlI:(   (* PARTEDELCORPO-BISEX NEGATIVO MASCHILE **CORNMILI **CORMNILI *)
                      ( S: sedere             | P: sederi             )
                    | ( S: collo              | P: colli              )
                    | ( S: cranio             | P: crani              )
                    | ( S: culo               | P: culi               )
                    | ( S: dente              | P: denti              )
                    | ( S: fegato             | P: fegati             )
                    | ( S: femore             | P: femori             )
                    | ( S: gluteo             | P: glutei             )
                    | ( S: mignolo            | P: mignoli            )
                    | ( S: nervo              | P: nervi              )
                    | ( S: pollice            | P: pollici            )
                    | ( S: polmone            | P: polmoni            )
                    | ( S: polpaccio          | P: polpaccio          )
                    | ( S: pube               | P: pubi               )
                    | ( S: tallone            | P: talloni            )
                    | ( S: tendine            | P: tendini            )
                    )
                )



          |  F:(           (* PARTEDELCORPO-BISEX NEGATIVO FEMMINILE **CORNF     **CORFN     *)
                  LaLe:(   (* PARTEDELCORPO-BISEX NEGATIVO FEMMINILE **CORNFLALE **CORFNLALE *)
                      ( S: gola               | P: gole               )
                    | ( S: cistifellea        | P: cistifellee        )
                    | ( S: clavicola          | P: clavicole          )
                    | ( S: costola            | P: costole            )
                    | ( S: falange            | P: falangi            )
                    | ( S: fauce              | P: fauci              )
                    | ( S: mandibola          | P: mandibole          )
                    | ( S: mascella           | P: mascelle           )
                    | ( S: milza              | P: milze              )
                    | ( S: rotula             | P: rotule             )
                    | ( S: vena               | P: vene               )
                    | ( S: vescica            | P: vesciche           )
                    )

                |  LLe:(   (* PARTEDELCORPO-BISEX NEGATIVO FEMMINILE **CORNFLLE **CORFNLLE *)
                      ( S: adenoide           | P: adenoidi           )
                    | ( S: ascella            | P: ascelle            )
                    | ( S: arteria            | P: arterie            )
                    )
                )


            ) (* PARTEDELCORPO-BISEX NEGATIVO - FINE *)



        ) (* PARTEDELCORPO-BISEX - FINE *)










      (*   RELIGIONE    *)


    | Religione:(

          Positivo:(

              M:(          (* RELIGIONE POSITIVO MASCHILE **RELPM      **RELMP      *)
                  LoGli:(  (* RELIGIONE POSITIVO MASCHILE **RELPMLOGLI **RELMPLOGLI *)
                      ( S: spirito            | P: spiriti            )
                    | ( S: sciamano           | P: sciamani           )
                    )

                |  LGli:(  (* RELIGIONE POSITIVO MASCHILE **RELPMLGLI **RELMPLGLI *)
                      ( S: abate              | P: abati              )
                    | ( S: adepto             | P: adepti             )
                    | ( S: angelo             | P: angeli             )
                    | arci^(
                          S: prete|vescovo|diacono|papa
                        | P: preti|vescovi|diaconi|papi
                      )
                    | ( S: incantesimo        | P: incantesimi        )
                    | ( S: obolo              | P: oboli              )
                    | ( S: oratorio           | P: oratori            )
                    )

                |  IlI:(   (* RELIGIONE POSITIVO MASCHILE **RELPMILI **RELMPILI *)
                      ( S: santino            | P: santini            )
                    | ( S: \\creato            | P: paradisi           )
                    | ( S: \\vangelo           | P: \\vangeli           )
                    | ( S: battesimo          | P: battesimi          )
                    | ( S: canonico           | P: canonici           )
                    | ( S: cappellano         | P: cappellani         )
                    | ( S: cardinale          | P: cardinali          )
                    | ( S: catechismo         | P: catechismi         )
                    | ( S: celibato           | P: celibati           )
                    | ( S: chierico           | P: chierici           )
                    | ( S: convento           | P: conventi           )
                    | ( S: culto              | P: culti              )
                    | ( S: curato             | P: curati             )
                    | ( S: decano             | P: decani             )
                    | ( S: divino             | P: cappellani         ) (* solo singolare *)
                    | ( S: dono               | P: doni               )
                    | ( S: fedele             | P: fedeli             )
                    | ( S: frate              | P: frati              )
                    | ( S: matrimonio         | P: matrimoni          )
                    | ( S: monaco             | P: monaci             )
                    | ( S: monastero          | P: monasteri          )
                    | ( S: novizio            | P: novizi             )
                    | ( S: patriarca          | P: patriarchi         )
                    | ( S: presbitero         | P: presbiteri         )
                    | ( S: prete              | P: preti              )
                    | ( S: profeta            | P: profeti            )
                    | ( S: religioso          | P: religiosi          )
                    | ( S: rito               | P: riti               )
                    | ( S: rosario            | P: rosari             )
                    | ( S: sacerdote          | P: sacerdoti          )
                    | ( S: sacerdozio         | P: sacerdozi          )
                    | ( S: sacramento         | P: sacramenti         )
                    | ( S: santo              | P: santi              )
                    | ( S: seminario          | P: seminari           )
                    | ( S: sepolcro           | P: sepolcri           )
                    | ( S: tempio             | P: templi             )
                    )
                )



          |  F:(           (* RELIGIONE POSITIVO FEMMINILE **RELPF     **RELFP     *)
                  LaLe:(   (* RELIGIONE POSITIVO FEMMINILE **RELPFLALE **RELFPLALE *)
                      ( S: reliquia           | P: reliquie           )
                    | ( S: \\bibbia            | P: bibbie             )
                    | ( S: \\creazione         | P: creazioni          )
                    | ( S: \\madonna           | P: madonne            )
                    | ( S: \\messa             | P: messe              )
                    | ( S: \\provvidenza       | P: \\provvidenze       )
                    | ( S: badessa            | P: badesse            )
                    | ( S: beatitudine        | P: beatitudini        )
                    | ( S: beneficenza        | P: beneficenze        )
                    | ( S: cappella           | P: cappelle           )
                    | ( S: carit^"&agrave"       | P: carit^"&agrave"       )
                    | ( S: chiesa             | P: chiese             )
                    | ( S: comunione          | P: comunioni          )
                    | ( S: confraternita      | P: confraternite      )
                    | ( S: corona             | P: corone             )
                    | ( S: cresima            | P: cresime            )
                    | ( S: dottrina           | P: dottrine           )
                    | ( S: fede               | P: badesse            ) (* solo singolare *)
                    | ( S: festa              | P: feste              )
                    | ( S: festivit^"&agrave"    | P: festivit^"&agrave"    )
                    | ( S: grazia             | P: grazie             )
                    | ( S: laicit^"&agrave"      | P: laicit^"&agrave"      )
                    | ( S: lettura            | P: letture            )
                    | ( S: monaca             | P: monache            )
                    | ( S: piet^"&agrave"        | P: monache            ) (* solo singolare *)
                    | ( S: preghiera          | P: preghiere          )
                    | ( S: profezia           | P: profezie           )
                    | ( S: purificazione      | P: purificazioni      )
                    | ( S: religione          | P: religioni          )
                    | ( S: salvezza           | P: salvezze           )
                    | ( S: santit^"&agrave"      | P: santit^"&agrave"      )
                    | ( S: suora              | P: suore              )
                    | ( S: virtu'             | P: virtu'             )
                    )

                |  LLe:(   (* RELIGIONE POSITIVO FEMMINILE **RELPFLLE **RELFPLLE *)
                      ( S: ara                | P: are                )
                    | ( S: \\assuzione         | P: \\assuzioni         )
                    | ( S: abbazia            | P: abbazie            )
                    | ( S: abside             | P: absidi             )
                    | ( S: acquasanta         | P: acquasante         )
                    | ( S: acquasantiera      | P: acquasantiere      )
                    | ( S: adorazione         | P: adorazioni         )
                    | ( S: annunciazione      | P: annunciazioni      )
                    | ( S: apparizione        | P: apparizioni        )
                    | ( S: elemosina          | P: elemosine          )
                    | ( S: estasi             | P: estasi             )
                    | ( S: offerta            | P: offerte            )
                    | ( S: osservanza         | P: osservanze         )
                    )
                )


            ) (* Religione Positivo - fine *)


        | Negativo:(



              M:(          (* RELIGIONE NEGATIVO MASCHILE **RELNM      **RELMN      *)
                  LoGli:(  (* RELIGIONE NEGATIVO MASCHILE **RELNMLOGLI **RELMNLOGLI *)
                      ( S: scomunicato        | P: scomunicati        )
                    | ( S: spretato           | P: spretato           )
                    )

                |  LGli:(  (* RELIGIONE NEGATIVO MASCHILE **RELNMLGLI **RELMNLGLI *)
                      ( S: \\ade               | P: infedeli           ) (* solo singolare *)
                    | ( S: \\anticristo        | P: anticristi         )
                    | ( S: adulterio          | P: adulterii          )
                    | ( S: esorcismo          | P: esorcismi          )
                    | ( S: esorcista          | P: esorcisti          )
                    | ( S: idolatra           | P: idolatri           )
                    | ( S: infedele           | P: infedeli           )
                    )

                |  IlI:(   (* RELIGIONE NEGATIVO MASCHILE **RELNMILI **RELMNILI *)
                      ( S: clero              | P: demoni             ) (* solo singolare *)
                    | ( S: \\demonio           | P: demoni             )
                    | ( S: \\diavolo           | P: diavoli            )
                    | ( S: demone             | P: demoni             )
                    | ( S: dogma              | P: dogmi              )
                    | ( S: fanatico           | P: fanatici           )
                    | ( S: feticcio           | P: feticci            )
                    | ( S: funerale           | P: funerali           )
                    | ( S: mangiapreti        | P: mangiapreti        )
                    | ( S: martire            | P: martiri            )
                    | ( S: martirio           | P: martirii           )
                    | ( S: pagano             | P: pagani             )
                    | ( S: peccato            | P: peccati            )
                    | ( S: pellegrinaggio     | P: pellegrinaggi      )
                    | ( S: refettorio         | P: refettori          )
                    | ( S: sacrificio         | P: sacrifici          )
                    | ( S: sacrilegio         | P: sacrilegi          )
                    | ( S: sermone            | P: sermoni            )
                    | ( S: vescovo            | P: vescovi            )
                    )
                )



          |  F:(           (* RELIGIONE NEGATIVO FEMMINILE **RELNF     **RELFN     *)
                  LaLe:(   (* RELIGIONE NEGATIVO FEMMINILE **RELNFLALE **RELFNLALE *)
                      ( S: bestemmia          | P: bestemmie          )
                    | ( S: catacomba          | P: catacombe          )
                    | ( S: clausura           | P: clausure           )
                    | ( S: confessione        | P: confessioni        )
                    | ( S: crocefissione      | P: crocefissioni      )
                    | ( S: magia              | P: magie              )
                    | ( S: martire            | P: martiri            )
                    | ( S: passione           | P: passioni           )
                    | ( S: penitenza          | P: penitenze          )
                    | ( S: perdizione         | P: perdizioni         )
                    | ( S: processione        | P: processioni        )
                    | ( S: profanazione       | P: profanazioni       )
                    | ( S: setta              | P: sette              )
                    | ( S: strega             | P: streghe            )
                    | ( S: superstizione      | P: superstizioni      )
                    | ( S: tentazione         | P: tentazioni         )
                    | ( S: tomba              | P: tombe              )
                    )

                |  LLe:(   (* RELIGIONE NEGATIVO FEMMINILE **RELNFLLE **RELFNLLE *)
                      ( S: ostia              | P: ostie              )
                    | ( S: abside             | P: absidi             )
                    | ( S: elemosina          | P: elemosine          )
                    | ( S: empiet^"&agrave"      | P: empiet^"&agrave"      )
                    | ( S: eresia             | P: eresie             )
                    )
                )


            ) (* RELIGIONE NEGATIVO - FINE *)



        ) (* RELIGIONE - FINE *)










       (*   POESIA     *)



    | Poesia:(

          Positivo:(

              M:(          (* POESIA POSITIVO MASCHILE **POEPM      **POEMP      *)
                  LoGli:(  (* POESIA POSITIVO MASCHILE **POEPMLOGLI **POEMPLOGLI *)
                      ( S: stile              | P: stili              )
                    | ( S: stornello          | P: stornelli          )
                    )

                |  LGli:(  (* POESIA POSITIVO MASCHILE **POEPMLGLI **POEMPLGLI *)
                      ( S: ottonario          | P: ottonari           )
                    | ( S: autore             | P: autori             )
                    | ( S: aforisma           | P: aforismi           )
                    | ( S: estro              | P: estri              )
                    | ( S: inchiostro         | P: inchiostri         )
                    | ( S: inno               | P: inni               )
                    )

                |  IlI:(   (* POESIA POSITIVO MASCHILE **POEPMILI **POEMPILI *)
                      ( S: poeta              | P: poeti              )
                    | ( S: canto              | P: canti              )
                    | ( S: componimento       | P: componimenti       )
                    | ( S: genio              | P: geni               )
                    | ( S: libro              | P: libri              )
                    | ( S: metro              | P: metri              )
                    | ( S: quaderno           | P: quaderni           )
                    | ( S: racconto           | P: racconti           )
                    | ( S: romanzo            | P: romanzi            )
                    | ( S: taccuino           | P: taccuini           )
                    | ( S: verso              | P: versi              )
                    )
                )



          |  F:(           (* POESIA POSITIVO FEMMINILE **POEPF     **POEFP     *)
                  LaLe:(   (* POESIA POSITIVO FEMMINILE **POEPFLALE **POEFPLALE *)
                      ( S: poesia             | P: poesie             )
                    | ( S: \\musa              | P: \\muse              )
                    | ( S: canzone            | P: canzoni            )
                    | ( S: carta              | P: carte              )
                    | ( S: carta da lettere   | P: carte da lettere   )
                    | ( S: lettera            | P: lettere            )
                    | ( S: letteratura        | P: letterature        )
                    | ( S: lettura            | P: letture            )
                    | ( S: lirica             | P: liriche            )
                    | ( S: metrica            | P: metriche           )
                    | ( S: musica             | P: musiche            )
                    | ( S: narrativa          | P: narrative          )
                    | ( S: pagina             | P: pagine             )
                    | ( S: penna              | P: penne              )
                    | ( S: poetessa           | P: poetesse           )
                    | ( S: recitazione        | P: recitazioni        )
                    | ( S: riga               | P: righe              )
                    | ( S: rima               | P: rime               )
                    | ( S: stanza             | P: stanze             )
                    | ( S: strofa             | P: strofe             )
                    | ( S: trama              | P: trame              )
                    )

                |  LLe:(   (* POESIA POSITIVO FEMMINILE **POEPFLLE **POEFPLLE *)
                      ( S: ispirazione        | P: ispirazioni        )
                    | ( S: agenda             | P: agende             )
                    | ( S: arte               | P: arti               )
                    | ( S: artista            | P: artiste            )
                    | ( S: autrice            | P: autrici            )
                    | ( S: ode                | P: odi                )
                    )
                )


            ) (* POESIA Positivo - fine *)


        | Negativo:(


                  (* Tutto i nomi, qui, sono inseriti solo come riempitivo: esistono nomi negativi riguardanti la poesia? Forse no. *)

              M:(          (* POESIA NEGATIVO MASCHILE **POENM      **POENM      *)
                  LoGli:(  (* POESIA NEGATIVO MASCHILE **POENMLOGLI **POENMLOGLI *)
                      ( S: stile              | P: stili              )
                    | ( S: iato               | P: iati               )
                    | ( S: stornello          | P: stornelli          )
                    | ( S: stridore           | P: stridori           )
                    )

                |  LGli:(  (* POESIA NEGATIVO MASCHILE **POENMLGLI **POENMLGLI *)
                      ( S: ottonario          | P: ottonari           )
                    | ( S: autore             | P: autori             )
                    )

                |  IlI:(   (* POESIA NEGATIVO MASCHILE **POENMILI **POENMILI *)
                      ( S: poeta              | P: poeti              )
                    | ( S: canto              | P: canti              )
                    )
                )



          |  F:(           (* POESIA NEGATIVO FEMMINILE **POENF     **POEFN     *)
                  LaLe:(   (* POESIA NEGATIVO FEMMINILE **POENFLALE **POEFNLALE *)
                      ( S: poesia             | P: poesie             )
                    | ( S: cacofonia          | P: cacofonie          )
                    | ( S: censura            | P: censure            )
                    | ( S: letteratura        | P: letterature        )
                    | ( S: lettura            | P: letture            )
                    )

                |  LLe:(   (* POESIA NEGATIVO FEMMINILE **POENFLLE **POEFNLLE *)
                      ( S: ispirazione        | P: ispirazioni        )
                    | ( S: ode                | P: odi                )
                    )
                )


            ) (* POESIA NEGATIVO - FINE *)



        ) (* POESIA - FINE *)






       (*     ARCHETIPI   *)




    | Archetipi:(

          Positivo:(

              M:(          (* ARCHETIPI POSITIVO MASCHILE **ARCPM      **ARCMP      *)
                  LoGli:(  (* ARCHETIPI POSITIVO MASCHILE **ARCPMLOGLI **ARCMPLOGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx              )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LGli:(  (* ARCHETIPI POSITIVO MASCHILE **ARCPMLGLI **ARCMPLGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )

                    )

                |  IlI:(   (* ARCHETIPI POSITIVO MASCHILE **ARCPMILI **ARCMPILI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )

                    )
                )



          |  F:(           (* ARCHETIPI POSITIVO FEMMINILE **ARCPF     **ARCFP     *)
                  LaLe:(   (* ARCHETIPI POSITIVO FEMMINILE **ARCPFLALE **ARCFPLALE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LLe:(   (* ARCHETIPI POSITIVO FEMMINILE **ARCPFLLE **ARCFPLLE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )
                )


            ) (* ARCHETIPI Positivo - fine *)


        | Negativo:(



              M:(          (* ARCHETIPI NEGATIVO MASCHILE **ARCNM      **ARCNM      *)
                  LoGli:(  (* ARCHETIPI NEGATIVO MASCHILE **ARCNMLOGLI **ARCNMLOGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LGli:(  (* ARCHETIPI NEGATIVO MASCHILE **ARCNMLGLI **ARCNMLGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  IlI:(   (* ARCHETIPI NEGATIVO MASCHILE **ARCNMILI **ARCNMILI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )
                )



          |  F:(           (* ARCHETIPI NEGATIVO FEMMINILE **ARCNF     **ARCFN     *)
                  LaLe:(   (* ARCHETIPI NEGATIVO FEMMINILE **ARCNFLALE **ARCFNLALE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LLe:(   (* ARCHETIPI NEGATIVO FEMMINILE **ARCNFLLE **ARCFNLLE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )
                )


            ) (* ARCHETIPI NEGATIVO - FINE *)



        ) (* ARCHETIPI - FINE *)







       (*   MATERIA      *)





    | Materia:(

          Positivo:(

              M:(          (* MATERIA POSITIVO MASCHILE **MATPM      **MATMP      *)
                  LoGli:(  (* MATERIA POSITIVO MASCHILE **MATPMLOGLI **MATMPLOGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LGli:(  (* MATERIA POSITIVO MASCHILE **MATPMLGLI **MATMPLGLI *)
                      ( S: argento            | P: argenti            )
                    | ( S: oro                | P: ori                )

                    )

                |  IlI:(   (* MATERIA POSITIVO MASCHILE **MATPMILI **MATMPILI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )

                    )
                )



          |  F:(           (* MATERIA POSITIVO FEMMINILE **MATPF     **MATFP     *)
                  LaLe:(   (* MATERIA POSITIVO FEMMINILE **MATPFLALE **MATFPLALE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LLe:(   (* MATERIA POSITIVO FEMMINILE **MATPFLLE **MATFPLLE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )
                )


            ) (* MATERIA Positivo - fine *)


        | Negativo:(



              M:(          (* MATERIA NEGATIVO MASCHILE **MATNM      **MATNM      *)
                  LoGli:(  (* MATERIA NEGATIVO MASCHILE **MATNMLOGLI **MATNMLOGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LGli:(  (* MATERIA NEGATIVO MASCHILE **MATNMLGLI **MATNMLGLI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  IlI:(   (* MATERIA NEGATIVO MASCHILE **MATNMILI **MATNMILI *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )
                )



          |  F:(           (* MATERIA NEGATIVO FEMMINILE **MATNF     **MATFN     *)
                  LaLe:(   (* MATERIA NEGATIVO FEMMINILE **MATNFLALE **MATFNLALE *)
                      ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )

                |  LLe:(   (* MATERIA NEGATIVO FEMMINILE **MATNFLLE **MATFNLLE *)
                      ( S: amalgama           | P: amalgame           )
                    | ( S: xxxxxxxxx          | P: xxxxxxxxx          )
                    )
                )


            ) (* MATERIA NEGATIVO - FINE *)



        ) (* MATERIA - FINE *)










  ); (* NOME - FINE *)



























(*              AGGETTIVI                 *)




(*              AVVERBI                 *)



(*              GLOBALI                 *)






(* Abbreviazioni generali per i casi più utilizzati *)

NomePrepMF ::= (
    ( Prep Nome ).M.(IlI|LGli|--------------LoGli)
  | ( Prep Nome ).F.(LLe|++++++++LaLe)
  );

NomeArtMF ::= (
    ( Art Nome ).M.(IlI|LGli|--------------LoGli)
  | ( Art Nome ).F.(LLe|++++++++LaLe)
  );

NomeMF ::= (
    (   Nome   ).M.(IlI|LGli|--------------LoGli)
  | (   Nome   ).F.(LLe|++++++++LaLe)
  );





DiLuogo ::= (
      NomePrepMF.PrepArticolata.Det.Di.Luogo.(S|P).(Positivo|Negativo).
  );




(* usati in Frase.2                                 *)
(* da sistemare: mettere in globali o non servono?  *)

NomeMS ::= (
    Nome.M.S
  );

NomeFS ::= (
    Nome.F.S
  );






(*              ARTICOLI                 *)



Art ::= (

    Det: ( (* Articolo Determinativo *)
          S:(
              M:( LoGli: lo  | LGli: l'^ | IlI: il )
            | F:( LaLe:  la  | LLe:  l'^           )
            )
        | P: (
              M:( LoGli: gli | LGli: gli | IlI: i  )
            | F:( LaLe:  le  | LLe:  le            )
            )
      )

  | Indet: ( (* Articolo Indeterminativo *)
          S:(
              M:( LoGli: uno  | LGli: un | IlI: un )
            | F:( LaLe:  una  | LLe:  un'^         )
            )
        (* plurale di un Articolo Indeterminativo = Articolo Partitivo *)
        | P: Art.(Part)
      )

    (* Da sistemare:                                          *)
    (* Articolo Partitivo = a Preposizione PrepArticolata Di + il *)
  | Part: ( (* Articolo Partitivo *)
          S:(
              M:( LoGli: dello  | LGli: dell'^ | IlI: del )
            | F:( LaLe:  della  | LLe:  dell'^            )
            )
        | P: (
              M:( LoGli: degli  | LGli: degli | IlI: dei  )
            | F:( LaLe:  delle  | LLe:  delle             )
            )
      )

  );






(*              PREPOSIZIONI                 *)

(*  

  Prep.PrepSemplice.(Di|A|Da|In|Con|Su|Per|Tra|Fra)                                   
  Prep.PrepArticolata.(Det|Indet).(Di|A|Da|In|Con|Su|Per|Tra|Fra) 

  L'etichetta PrepGen seleziona una preposizione a caso, articolata o semplice.
  es: Prep.(PrepSemplice|PrepArticolata).PrepGen

  NB: Per comodità d'utilizzo anche le preposizioni articolate possono essere "indeterminative" anche se cio' non ha riscontro, cioe' non sono affatto "preposizioni articolate" perchè non c'è alcuna unione tra preposizione e articolo. È però molto comodo per passare da Det a Indet liberamente.

*)



Prep ::= (

    PrepArticolata: (

      PrepGenArticolata ::= Prep.PrepArticolata.(Di|A|Da|In|Con|Su|Per|Tra|Fra);

      Det: ( (*PREPOSIZIONE ARTICOLATA DET*)


          PrepGen: PrepGenArticolata
      
        |

          Di: (
                S:(
                    M:( LoGli: dello  | LGli: dell'^ | IlI: del )
                  | F:( LaLe:  della  | LLe:  dell'^            )
                  )
              | P: (
                    M:( LoGli: degli  | LGli: degli | IlI: dei  )
                  | F:( LaLe:  delle  | LLe:  delle             )
                  )
            )
      
        | A: (
                S:(
                    M:( LoGli: allo   | LGli: all'^ | IlI: al   )
                  | F:( LaLe:  alla   | LLe:  all'^             )
                  )
              | P: (
                    M:( LoGli: agli   | LGli: agli  | IlI: ai   )
                  | F:( LaLe:  alle   | LLe:  alle              )
                  )
            )
      
        | Da: (
                S:(
                    M:( LoGli: dallo  | LGli: dall'^ | IlI: dal )
                  | F:( LaLe:  dalla  | LLe:  dall'^            )
                  )
              | P: (
                    M:( LoGli: dagli  | LGli: dagli | IlI: dai  )
                  | F:( LaLe:  dalle  | LLe:  dalle             )
                  )
            )
      
        | In: (
                S:(
                    M:( LoGli: nello  | LGli: nell'^ | IlI: nel    )
                  | F:( LaLe:  nella  | LLe:  nell'^               )
                  )
              | P: (
                    M:( LoGli: negli  | LGli: negli | IlI: nei     )
                  | F:( LaLe:  nelle  | LLe:  nelle                )
                  )
            )
      
        | Con: (
              (* Scelta casuale tra versione staccata e "univerbata"(?) *)
              (* entrambe sono ugualmente corrette *)
      
              (* Versione staccata *)
      
              ( S:(
                    M:( LoGli: con lo | LGli: con l'^ | IlI: con il)
                  | F:( LaLe:  con la | LLe:  con l'^              )
                  )
              | P: (
                    M:( LoGli: con gli| LGli: con gli | IlI: con i )
                  | F:( LaLe:  con le | LLe:  con le               )
                  )
              )
      
              |
      
              (* Versione "univerbata"(?), meno probabile *)
              ------------
              ( S:(
                    M:( LoGli: collo  | LGli: con l'^ | IlI: col   )
                  | F:( LaLe:  colla  | LLe:  con l'^              )
                  )
              | P: (
                    M:( LoGli: cogli  | LGli: cogli   | IlI: coi   )
                  | F:( LaLe:  colle  | LLe:  colle                )
                  )
              )
      
            )
      
        | Su: (
                S:(
                    M:( LoGli: sullo  | LGli: sull'^ | IlI: sul    )
                  | F:( LaLe:  sulla  | LLe:  sull'^               )
                  )
              | P: (
                    M:( LoGli: sugli  | LGli: sugli  | IlI: sui    )
                  | F:( LaLe:  sulle  | LLe:  sulle                )
                  )
            )
      
        | Per: (
                S:(
                    M:( LoGli: per lo | LGli: per l'^| IlI: per il )
                  | F:( LaLe:  per la | LLe:  per l'^              )
                  )
              | P: (
                    M:( LoGli: per gli| LGli: per gli| IlI: per i  )
                  | F:( LaLe:  per le | LLe:  per le               )
                  )
            )
      
        | Tra: (
                S:(
                    M:( LoGli: tra lo | LGli: tra l'^| IlI: tra il )
                  | F:( LaLe:  tra la | LLe:  tra l'^              )
                  )
              | P: (
                    M:( LoGli: tra gli| LGli: tra gli| IlI: tra i  )
                  | F:( LaLe:  tra le | LLe:  tra le               )
                  )
            )
      
        | Fra: (
                S:(
                    M:( LoGli: fra lo | LGli: fra l'^| IlI: fra il )
                  | F:( LaLe:  fra la | LLe:  fra l'^              )
                  )
              | P: (
                    M:( LoGli: fra gli| LGli: fra gli| IlI: fra i )
                  | F:( LaLe:  fra le | LLe:  fra le              )
                  )
            ) 

        ) (*FINE PREPOSIZIONE ARTICOLATA DET*)
        
        |             

         
      Indet: (  (*PREPOSIZIONE ARTICOLATA INDET*)


          PrepGen: PrepGenArticolata

                             (* "di dei, di delle" sarebbe scorretto *)
                             (* controllare per event. soluzione migliore *) 
        | Di:   (S: di  Art | P: di  (M: alcuni | F: alcune) )       
        | A:    (S: a   Art | P: a   Art                     )      
        | Da:   (S: da  Art | P: da  Art                     )       
        | In:   (S: in  Art | P: in  Art                     )       
        | Con:  (S: con Art | P: con Art                     )        
        | Su:   (S: su  Art | P: su  Art                     )       
        | Per:  (S: per Art | P: per Art                     )        
        | Tra:  (S: tra Art | P: tra Art                     )        
        | Fra:  (S: fra Art | P: fra Art                     )        



        )  (*FINE PREPOSIZIONE ARTICOLATA INDET*)


    ) (*FINE PREPOSIZIONE ARTICOLATA*)
      
  | PrepSemplice: (

      PrepGenSemplice ::= di|a|da|in|con|su|per|tra|fra;

             PrepGen: PrepGenSemplice
           | Di:  di
           | A:   a
           | Da:  da
           | In:  in
           | Con: con
           | Su:  su
           | Per: per
           | Tra: tra
           | Fra: fra

    ) (*FINE PREPOSIZIONE SEMPLICE*)


); (*FINE PREPOSIZIONE*)

















(*          NOTE                 *)


(********************************************

Note

  *** Caratteri speciali ***
  Non si possono inserire direttamente ma vanno sostituite dal codice ASCII così precedute da carattere di escape backslash \\ e tra virgolette quando indicato:
  à = "&agrave"
  è = "&egrave"
  é = "&eacute"
  ò = "&ograve"
  ì = "&igrave"
  ù = "&ugrave"

  es.
  S ::= "La mela &eacute sul tavolo";

  manuale polygen: http://goo.gl/5zL1GZ
  tabella caratteri ASCII: http://goo.gl/Ktkm2a

  *** ESEMPIO FRASE SEMPLICE ***
  S ::= (\\Frase ^".");

********************************************************)

      `