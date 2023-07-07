const form = {
    //Insere o ano analisado em tela
    title1: () => document.getElementById("title1"),

    //Gerencia configurações gerais da página
    main: () => document.getElementById("main"),
    border: () => document.getElementById("border"),

    //Coluna 2 da tabela resultados gerais
    c2_l2: () => document.getElementById("c2_l2"),
    c2_l3: () => document.getElementById("c2_l3"),
    c2_l4: () => document.getElementById("c2_l4"),
    c2_l5: () => document.getElementById("c2_l5"),
    c2_l6: () => document.getElementById("c2_l6"),
    c2_l7: () => document.getElementById("c2_l7"),
    c2_l8: () => document.getElementById("c2_l8"),
    c2_l9: () => document.getElementById("c2_l9"),
    c2_l10: () => document.getElementById("c2_l10"),
    c2_l11: () => document.getElementById("c2_l11"),
    c2_l12: () => document.getElementById("c2_l12"),
    c2_l13: () => document.getElementById("c2_l13"),

    //Coluna 3 da tabela resultados gerais
    c3_l2: () => document.getElementById("c3_l2"),
    c3_l3: () => document.getElementById("c3_l3"),
    c3_l4: () => document.getElementById("c3_l4"),
    c3_l5: () => document.getElementById("c3_l5"),
    c3_l6: () => document.getElementById("c3_l6"),
    c3_l7: () => document.getElementById("c3_l7"),
    c3_l8: () => document.getElementById("c3_l8"),
    c3_l9: () => document.getElementById("c3_l9"),
    c3_l10: () => document.getElementById("c3_l10"),
    c3_l11: () => document.getElementById("c3_l11"),
    c3_l12: () => document.getElementById("c3_l12"),
    c3_l13: () => document.getElementById("c3_l13"),

    //gráfico de OKR
    gf1_1: () => document.getElementById("gf1_1"),
    gf1_2: () => document.getElementById("gf1_2"),
    gf1_3: () => document.getElementById("gf1_3"),
    gf1_4: () => document.getElementById("gf1_4"),
    gf1_5: () => document.getElementById("gf1_5"),
    gf1_6: () => document.getElementById("gf1_6"),
    tgf1_1: () => document.getElementById("tgf1_1"),
    tgf1_2: () => document.getElementById("tgf1_2"),
    tgf1_3: () => document.getElementById("tgf1_3"),
    tgf1_4: () => document.getElementById("tgf1_4"),
    tgf1_5: () => document.getElementById("tgf1_5"),
    tgf1_6: () => document.getElementById("tgf1_6"),

    //gráfico de ações concluídas
    gf2_1: () => document.getElementById("gf2_1"),
    gf2_2: () => document.getElementById("gf2_2"),
    gf2_3: () => document.getElementById("gf2_3"),
    gf2_4: () => document.getElementById("gf2_4"),
    gf2_5: () => document.getElementById("gf2_5"),
    gf2_6: () => document.getElementById("gf2_6"),
    tgf2_1: () => document.getElementById("tgf1_1"),
    tgf2_2: () => document.getElementById("tgf2_2"),
    tgf2_3: () => document.getElementById("tgf2_3"),
    tgf2_4: () => document.getElementById("tgf2_4"),
    tgf2_5: () => document.getElementById("tgf2_5"),
    tgf2_6: () => document.getElementById("tgf2_6"),

    //gráfico do Bem-Estar
    gf3_1: () => document.getElementById("gf3_1"),
    gf3_2: () => document.getElementById("gf3_2"),
    gf3_3: () => document.getElementById("gf3_3"),
    gf3_4: () => document.getElementById("gf3_4"),
    gf3_5: () => document.getElementById("gf3_5"),
    gf3_6: () => document.getElementById("gf3_6"),
    tgf3_1: () => document.getElementById("tgf3_1"),
    tgf3_2: () => document.getElementById("tgf3_2"),
    tgf3_3: () => document.getElementById("tgf3_3"),
    tgf3_4: () => document.getElementById("tgf3_4"),
    tgf3_5: () => document.getElementById("tgf3_5"),
    tgf3_6: () => document.getElementById("tgf3_6"),

    //gráfico do Comprometimento
    gf4_1: () => document.getElementById("gf4_1"),
    gf4_2: () => document.getElementById("gf4_2"),
    gf4_3: () => document.getElementById("gf4_3"),
    gf4_4: () => document.getElementById("gf4_4"),
    gf4_5: () => document.getElementById("gf4_5"),
    gf4_6: () => document.getElementById("gf4_6"),
    tgf4_1: () => document.getElementById("tgf4_1"),
    tgf4_2: () => document.getElementById("tgf4_2"),
    tgf4_3: () => document.getElementById("tgf4_3"),
    tgf4_4: () => document.getElementById("tgf4_4"),
    tgf4_5: () => document.getElementById("tgf4_5"),
    tgf4_6: () => document.getElementById("tgf4_6"),
    ctgf4_1: () => document.getElementById("ctgf4_1"),
    ctgf4_2: () => document.getElementById("ctgf4_2"),
    ctgf4_3: () => document.getElementById("ctgf4_3"),
    ctgf4_4: () => document.getElementById("ctgf4_4"),
    ctgf4_5: () => document.getElementById("ctgf4_5"),
    ctgf4_6: () => document.getElementById("ctgf4_6"),

    //Relatório
    bim: () => document.getElementById("bim"),
    relatorio: () => document.getElementById("Relatorio"),
    generator: () => document.getElementById("generator"),
    creat_form: () => document.getElementById("creat_form"),

    //Problemas Recorrentes
    p1_1: () => document.getElementById("p1_1"),
    p1_2: () => document.getElementById("p1_2"),
    p1_3: () => document.getElementById("p1_3"),
    p1_4: () => document.getElementById("p1_4"),
    p1_5: () => document.getElementById("p1_5"),
    p1_6: () => document.getElementById("p1_6"),
    p1_7: () => document.getElementById("p1_7"),
    pp1_1: () => document.getElementById("pp1_1"),
    pp1_2: () => document.getElementById("pp1_2"),
    pp1_3: () => document.getElementById("pp1_3"),
    pp1_4: () => document.getElementById("pp1_4"),
    pp1_5: () => document.getElementById("pp1_5"),
    pp1_6: () => document.getElementById("pp1_6"),
    pp1_7: () => document.getElementById("pp1_7"),

    //Níveis de Satisfação médio do diretor:
    p2_1: () => document.getElementById("p2_1"),
    p2_2: () => document.getElementById("p2_2"),
    p2_3: () => document.getElementById("p2_3"),
    p2_4: () => document.getElementById("p2_4"),
    p2_5: () => document.getElementById("p2_5"),
    pp2_1: () => document.getElementById("pp2_1"),
    pp2_2: () => document.getElementById("pp2_2"),
    pp2_3: () => document.getElementById("pp2_3"),
    pp2_4: () => document.getElementById("pp2_4"),
    pp2_5: () => document.getElementById("pp2_5"),
    
    //Desenvolvimento Geral dos membros:
    p3_1: () => document.getElementById("p3_1"),
    pp3_1: () => document.getElementById("pp3_1"),

    //Ações Concluídas
    p4_1: () => document.getElementById("p4_1"),
    pp4_1: () => document.getElementById("pp4_1"),

    //Indicadores
    p5_1: () => document.getElementById("p5_1"),
    pp5_1: () => document.getElementById("pp5_1"),
    p5_2: () => document.getElementById("p5_2"),
    pp5_2: () => document.getElementById("pp5_2"),
    p5_3: () => document.getElementById("p5_3"),
    pp5_3: () => document.getElementById("pp5_3"), 
    p5_4: () => document.getElementById("p5_4"),
    pp5_4: () => document.getElementById("pp5_4"),    

    //Indicador do gráfico redondo
    p6_1: () => document.getElementById("p6_1"),
    pp6_1: () => document.getElementById("pp6_1"),

    v_compart: () => document.getElementById("v_compart"),
    barra_progress: () => document.getElementById("barra_progress"),
}