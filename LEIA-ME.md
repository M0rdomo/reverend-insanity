# Reverend Insanity RPG — Foundry 14

Sistema 1.4.0, conferido no Foundry 14.368. Baseado nos seis livros revisados da campanha, com Persuasão e Comércio separados.

## Começar

Nesta máquina, abra o mundo **Reverend Insanity RPG** e entre como Gamemaster. A ficha Shi Gan já está disponível em Actors. Os demais personagens e conteúdos ficam em Compendium Packs; importe personagens ou arraste itens dos compêndios para a ficha.

Para instalar em outra máquina, feche o mundo e extraia a pasta `reverend-insanity` do ZIP para `Data/systems` da pasta de dados do Foundry. Reinicie o Foundry e crie um mundo usando Reverend Insanity RPG. Faça uma cópia de segurança antes de substituir uma instalação existente.

## Ficha

As sete abas usam ícones com o nome ao passar o cursor: Perfil; Atributos e perícias; Abertura; Equipamentos; Mochila; Alquimia/forja; Efeitos. Retrato, vida, essência e Rank permanecem no cabeçalho enquanto o conteúdo rola.

Clique no nome de um atributo ou perícia para abrir o teste com a opção selecionada. Confira o outro componente, a dificuldade/oposição e os modificadores antes de rolar. Cada d10 com resultado 7–10 produz um sucesso; é preciso superar D. Empates em disputas favorecem a defesa.

A Abertura reúne cultivo, Gu, recuperação e alimentação. É possível habilitar uma segunda Abertura e selecionar no cabeçalho qual está em uso. Os custos são pagos mesmo quando o teste falha. Custos especiais devem ser conferidos na descrição e podem ser ajustados antes da rolagem.

Equipar um objeto o move da Mochila para Equipamentos. A Mochila inclui Pedras primordiais e Pedras meio absorvidas, em quantidades inteiras. Alquimia/forja reúne receitas e materiais. Efeitos permite registrar, ativar e suspender condições e seus modificadores.

## Conteúdo

24 compêndios: 12 em português e 12 em inglês, com 3.327 registros por idioma: 782 Gu e variantes de Rank; 1.177 entradas dos livros e regras; 35 equipamentos; 281 materiais; 798 receitas; 161 criaturas; 6 manuais/técnicas; 53 povos/caminhos; 5 personagens; 8 mapas/entradas de atlas; 15 estados; 6 cenas do mundo e das regiões. Os livros preservam texto e tabelas; não reproduzem todas as ilustrações.

## Automação e limites

O sistema calcula reservas e resultados de testes, capacidade de essência, vida máxima, custos de Gu, recuperação e avanço de cultivo. Alterar atributos permanentes preserva o dano já sofrido.

Dano nos alvos, interpretação de efeitos específicos dos Gu, condições contextuais, passagem do tempo e consumo/produção dos ingredientes de receitas dependem do mestre. Registrar uma duração não faz o efeito expirar sozinho. Confira o texto do verbete: o botão de uso não automatiza todas as exceções ou combinações dos livros.

O mundo contém rolagens de verificação e um exemplo de efeito desativado em Shi Gan. Os recursos do personagem foram restaurados após os testes.

## Atualização 1.1.0

A primeira absorção de 1 ponto de essência transforma uma pedra primordial em meio absorvida; a segunda a torna comum e a retira do saldo de moeda. A recuperação usa primeiro as pedras meio absorvidas. A antiga quantidade 3,5 corresponde a 3 inteiras e 1 meio absorvida.

Bestas possuem abas Criatura, Combate, Recursos e despojos e Efeitos, com retrato, Patamar e Vida no cabeçalho. As 161 criaturas do compêndio possuem a ilustração correspondente também no token. Organizações possuem identidade, membros e relações, tesouro e recursos, planos e registros; não exibem Vida, essência ou Abertura de cultivador.

As seis cenas estão na aba Scenes do mundo Reverend Insanity RPG e no compêndio Cenas — Mundo e regiões: Mundo — Cinco Regiões, Fronteira Sul, Planícies do Norte, Deserto Ocidental, Mar Oriental e Continente Central. São mapas de referência sem grade ou visão limitada por token; a escala é ilustrativa. Mundos novos recebem as seis cenas automaticamente no idioma escolhido; também é possível importá-las do compêndio. Cenas já importadas não são duplicadas pela atualização.

## Atualização 1.2.0 — Perfil e estilo do livro

O perfil usa cartões vinculados aos itens de povo e Dao. Escolha pelo botão do perfil ou arraste o item do compêndio; o cabeçalho acompanha o povo selecionado e os caminhos presentes. Clicar no cartão abre suas regras. Cada Dao guarda seu próprio attainment e a descoberta que o sustenta. Povo, Dao e attainment não têm mais campos de texto duplicados no perfil; Idiomas foi removido da interface. PD fica em Atributos e perícias. Dados antigos de história, aparência, objetivos e vínculos foram preservados.

O botão Bônus racial permite registrar o bônus de criação uma vez, até o limite 5. Em fichas antigas, a opção inicial indica que o bônus já está incluído, para não somá-lo novamente. O Dao não concede dados automaticamente. Trocar o povo exibido não refaz os pontos de criação: qualquer reconstrução de personagem deve ser conferida com o mestre.

O novo visual usa papel claro, tinta escura, faixas vermelhas e ornamentação da ficha fornecida, preservando os campos editáveis, as abas por ícones e o cabeçalho fixo. Bestas e organizações mantêm suas estruturas próprias.

## Atualização 1.3.0 — mundos novos

A capa ilustrada do sistema aparece automaticamente nos mundos que não tenham uma imagem de fundo personalizada. Uma capa própria definida pelo mestre tem prioridade.

Na primeira entrada de um mestre ativo, o sistema acrescenta seis cenas: Mundo — Cinco Regiões, Fronteira Sul, Planícies do Norte, Deserto Ocidental, Mar Oriental e Continente Central. Nenhuma cena é ativada automaticamente. Cenas já identificadas como parte do atlas são preservadas e não duplicadas. Após a inicialização, cenas removidas pelo mestre não reaparecem; podem ser importadas novamente pelo compêndio de cenas.


## Atualização 1.3.1 — módulos

Integração verificada no Foundry 14.368 com Carousel Combat Tracker 5.0.0, DFreds Droppables 6.2.0, Dice So Nice! 6.2.9 e Performance Optimizer 0.0.3, ativos juntos no mundo Modelo.

O Carousel recebe Vida, Essência da Abertura ativa e Rank como atributos padrão. Bestas mostram Vida e patamar; organizações não mostram reservas de cultivador. Configurações personalizadas do Carousel são preservadas. A iniciativa continua seguindo Corpo, Mente e o desempate em d10 do sistema.

Dice So Nice! recebe os testes e a iniciativa pelo mecanismo normal de rolagens do Foundry, sem disparar animações em duplicidade. DFreds Droppables pode soltar pastas de personagens no mapa. Performance Optimizer conserva o controle das preferências gráficas de cada jogador. Esses módulos são opcionais e devem ser ativados pelo mestre em Module Management em cada mundo; não são distribuídos dentro deste pacote.

Verificação: ficha e teste de Corpo, iniciativa, dados 3D, valores do Carousel e criação de token via pasta do Droppables. O navegador de verificação registrou uma falha de carregamento do áudio dicehit.mp3 do Dice So Nice!; animação e resultados funcionaram. Os arquivos dos módulos não foram modificados.


## Atualização 1.4.0 — português e inglês

Na primeira entrada do mestre ativo, escolha Português (Brasil) ou English. A escolha é salva para o mundo e pode ser alterada em Game Settings → Reverend Insanity RPG → Idioma do RPG / RPG language. Recarregue quando solicitado. Fechar o diálogo inicial deixa a escolha pendente.

O idioma controla as fichas, mensagens do sistema e a edição dos conteúdos usada nas importações. Os compêndios ingleses têm [EN] no nome. A interface do próprio Foundry e os módulos de terceiros têm suas próprias preferências de idioma.

Trocar idioma preserva personagens, itens, mapas e anotações já importados. Para obter um conteúdo na outra língua, importe a edição correspondente. Os seis mapas existentes não são duplicados nem substituídos pela troca de idioma.

Os seis livros ingleses completos são fornecidos separadamente em PDF e DOCX. Os textos dos livros, tabelas, capas, fichas e mapas foram traduzidos; os originais portugueses foram preservados.

A edição 1.4.0 foi testada com os quatro módulos ativos no English Demo: ficha inglesa, teste de Corpo, token criado ao soltar uma pasta pelo Droppables, iniciativa 310,7 e primeira rodada no Carousel. A escolha inicial de português e a troca posterior para inglês também foram verificadas. Os 27 testes automatizados passaram. O navegador de verificação registrou falha de carregamento do som dicehit.mp3 do Dice So Nice; os resultados das rolagens funcionaram, mas o áudio não foi validado nesse navegador.
