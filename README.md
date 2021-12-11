App de galeria de fotos carregado com API da Pexel

Esse projeto foi criado utilizando apenas o framework REACT. Peguei como base um projeto utilizado em curso, fazendo as alterações necessárias para adaptação e uso com a API do site PEXELS. Para estilização e ajustes visuais foi utilizado CSS externo. Não consegui implementar o recurso lazy load (depois de diversas tentativas e pesquisas, meu projeto bugou todo e não rodou mais, tendo que revisar todo e praticamente refazê-lo, o que me fez desistir de implementar). Para o recurso de paginação, de acordo com a documentação da API, este só está disponível quando os recursos NEXT_PAGE e PREVIOUS_PAGE são baixados juntos dos dados no arquivo JSON recuperado, o que no meu caso não ocorreu, me impossibilitando de implementar a paginação pela API.

Esse álbum de fotos está configurado para retornar ao usuário um total de 40 fotos na página, sendo possível configurar no arquivo API.JS para um mínimo de 15 e máximo de 80 fotos. O recurso utilizado da API foi o CURATED, recurso no qual os editores do site escolhem as fotos que irão aparecer, fazendo com que as imagens mudem aleatóriamente de tempos em tempos, no que eu pude perceber, cada dia aparece um conjunto de imagens diferentes.

A rota utilizada nesse projeto foi a GET, puxando o recurso fetchGetAll() para buscar todas as fotos, de acordo com a configuração.

Em sua estrutura é possível visualizar, além das imagens ao centro, um HEADER e um FOOTER, que estão sendo exportados externamente para a página principal.

######################

Projeto criado por Hudson Oliveira Pereira.
Desenvolvedor Jr - Back End Java Script.
Estudante pela Blue EdTech - Módulo 4 (segundo da especialização de back)
