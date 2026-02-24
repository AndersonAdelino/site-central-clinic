# PRD - Landing Page da Central Clinic Jucurutu

## 1. Visão Geral do Projeto
Desenvolver uma landing page moderna, responsiva e profissional para a Central Clinic Jucurutu em **Next.js**. O site substituirá a versão antiga, focando em conversão via WhatsApp, clareza na apresentação dos serviços e uma identidade visual limpa e confiável.

## 2. Identidade Visual e Estilo
Baseado na imagem de referência fornecida pelo cliente:
- **Cores Principais:** Azul/Verde-água (`#00AEEF` ou similar) e Verde Vibrante (`#32D7A8`) para CTAs.
- **Fundo:** Branco (`#FFFFFF`) com elementos gráficos em tons de azul suave.
- **Tipografia:** Moderna e sem serifa (ex: Poppins, Inter ou Montserrat).
- **Estética:** Clean, profissional, com cantos arredondados e ícones minimalistas.

## 3. Estrutura do Site (Single Page + Páginas de Serviço)

### 3.1. Header (Fixo)
- Logo à esquerda.
- Menu: Home, Sobre Nós, Serviços, Convênios, Localização.
- Botão CTA: "Agendar Consulta" (Link para WhatsApp).

### 3.2. Página Principal (Home - `/`)
1.  **Hero Section:** Título impactante, descrição curta e botão de agendamento via WhatsApp.
2.  **Sobre Nós:** Texto institucional extraído do site antigo sobre o compromisso com a saúde integral em Jucurutu.
3.  **Nossos Serviços (Grid):** Cards com ícones e nomes das especialidades. Cada card leva à sua página específica.
    - *Especialidades:* Odontologia, Ortopedia, Ginecologia, Obstetrícia, Pediatria, Mastologia, Psicologia, Fisioterapia, Nutrição, Estética Íntima.
4.  **Corpo Clínico (Destaque):**
    - **Dr. Luiz Fernando Schuh** (Ortopedia)
    - **Dra. Amélia Amaral** (Ginecologia e Obstetrícia)
    - **Dr. Pedro Nunes** (Pediatria)
5.  **Convênios:** Seção com logotipos dos planos aceitos:
    - Clini Med, UNIPLAN, LifePlan, BR Saúde, Multiplano +.
6.  **Localização e Horários:**
    - **Endereço:** Rua: Otávio Lamartine, 138b, Centro - Jucurutu/RN.
    - **Horários:** 
        - Seg a Sex: 07:30 - 11:30 | 13:30 - 17:30
        - Sábado: 07:30 - 11:30.
    - Mapa integrado (Google Maps).

### 3.3. Páginas de Serviço (`/servicos/[slug]`)
Cada especialidade terá sua própria página contendo:
- Descrição detalhada do serviço.
- Médico responsável (quando aplicável).
- Botão de WhatsApp direto para agendamento daquela especialidade.

## 4. Requisitos Funcionais
- **Conversão:** Botão flutuante de WhatsApp em todas as páginas.
- **Navegação:** Smooth scroll na Home para as seções principais.
- **SEO:** Meta tags otimizadas para "Clínica em Jucurutu", "Central Clinic", e especialidades médicas.
- **Performance:** Imagens otimizadas (WebP) e carregamento rápido via Next.js.

## 5. Conteúdo para Migração (Resumo)
- **Contato:** (84) 9 9818-3636 | centralclinicjucurutu@gmail.com
- **Descrição Geral:** Clínica multidisciplinar com foco em atendimento humanizado e excelência em Jucurutu.
