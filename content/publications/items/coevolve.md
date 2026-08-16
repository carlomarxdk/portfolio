---
title: "Belief Coevolution in a Social Network of Generalist and Specialist Large Language Models"
date: 2026-07-30
publishDate: 2026-07-30
authors: [Germans Savcisens, Samantha Dies, Courtney Maynard, Tina Eliassi-Rad]
publication_type: 3
hidden: true
highlight: true
create_page: true
venue: "arXiv:2607.27512"
abstract: "Large language models (LLMs) are increasingly deployed in multi-agent environments. However, the processes by which beliefs form and propagate among interacting LLMs remain poorly understood. We introduce CoevolveSim, a framework for studying belief diffusion within networked LLM populations. CoevolveSim allows us to isolate and study three factors: domain specialization, social-role assignment, and social network structure. Within this framework, generalist and specialist LLM agents exchange and revise beliefs. In each round, an LLM agent observes a summary of its neighbors' beliefs before updating its own. We run 1,280 controlled simulations spanning four scenarios, two network structures, and 20 medical-indication statements. We find that persona-style role assignment and network structure reshape individual belief revision but have minimal effect on population-level consensus. In contrast, introducing (finetuned) specialist LLMs more than doubles the shift in consensus and gives rise to consistent asymmetries in exerted influence. We further show that simple persistence-based opinion-dynamics models reproduce collective outcomes in all-generalist LLM populations, whereas heterogeneous LLM populations require population-level belief composition to reproduce consensus and agent identity to predict individual belief transitions. Our results indicate that realistic simulation of belief diffusion in multi-agent LLM systems requires a diverse set of underlying LLMs, not persona prompting alone."
pub_link: https://arxiv.org/abs/2607.27512
versions:
  - label: "arXiv"
    link: https://arxiv.org/abs/2607.27512
    date: 2026-07-30

talks:
  - talk: 202606_netsci
  - talk: 202608_nemi


resources:
  - name: ArXiv
    link: https://arxiv.org/abs/2607.27512
    on-card: true
    on-page: false
  - name: Code
    link: https://github.com/carlomarxdk/coevolve-sim
    on-card: true
    on-page: true
  - name: "(Poster) NEMI"
    link: https://zenodo.org/records/21878347
    on-card: true
    on-page: true
  - name: "(Poster) NetSci"
    link: https://doi.org/10.5281/zenodo.20482271
    on-card: true
    on-page: true
---
