(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),s("p",[t._v("L'application Spring PetClinic est une application Spring Boot classique avec une architecture SOA (Service Oriented Architecture).")]),t._v(" "),s("p",[s("img",{attrs:{src:"architecture.png",alt:"Architecture SOA&"}})]),t._v(" "),s("p",[t._v("Les classes se terminant par "),s("code",[t._v("*Controller")]),t._v(" sont des endpoints HTTP exposant des services permettant de manipuler les entités.")]),t._v(" "),s("p",[t._v("On retrouve par exemple les classes "),s("code",[t._v("PetController")]),t._v(", "),s("code",[t._v("OwnerController")]),t._v(", "),s("code",[t._v("VetController")]),t._v(", etc.")]),t._v(" "),s("p",[t._v("Ces derniers font appel à la couche DAO qui est responsable de communiquer avec la base de données.")]),t._v(" "),s("p",[t._v("La couche DAO est ici représentée par les interfaces se terminant par "),s("code",[t._v("*Repository")]),t._v(".")]),t._v(" "),s("p",[t._v("Ce sont des interfaces qui étendent l'interface "),s("code",[t._v("org.springframework.data.repository.Repository")]),t._v(". Le composant "),s("a",{attrs:{href:"https://spring.io/projects/spring-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Data"),s("OutboundLink")],1),t._v(" fournira l'implémentation au runtime.")]),t._v(" "),s("p",[t._v("Attention à ne pas les confondre avec l'annotation "),s("code",[t._v("org.springframework.stereotype.Repository")]),t._v(".")]),t._v(" "),s("p",[t._v("Par contre, il est également possible d'ajouter ces propres méthodes d'accès à la base de données grâce à l'annotation "),s("code",[t._v("@Query")]),t._v(".")]),t._v(" "),s("p",[t._v("Un exemple de cette utilisation se trouve par exemple dans la classe "),s("code",[t._v("OwnerRepository")]),t._v(" :")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT DISTINCT owner FROM Owner owner left join fetch owner.pets WHERE owner.lastName LIKE :lastName%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("readOnly "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collection")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Owner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByLastName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lastName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" lastName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Ces méthodes de requêtages sont testées dans les classes de tests se terminant par "),s("code",[t._v("*RepositoryTests")]),t._v(". Par exemple "),s("code",[t._v("OwnerRepositoryTests")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"tests-initiaux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tests-initiaux","aria-hidden":"true"}},[t._v("#")]),t._v(" Tests initiaux")]),t._v(" "),s("p",[t._v("Actuellement l'ensemble des tests "),s("code",[t._v("*RepositoryTests")]),t._v(" étendent une classe commune nommée "),s("code",[t._v("AbstractRepositoryTest")]),t._v(".")]),t._v(" "),s("p",[t._v("Cette classe permet un chargement allégé du context Spring\navec uniquement les interfaces des repositories et la base de donnée Inmemory par défaut fournit par "),s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-testing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot Test"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Pour bien démarrer, vous pouvez lancer la suite de test et mesurez le temps d'exécution.")]),t._v(" "),s("h2",{attrs:{id:"amelioration-des-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amelioration-des-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Amélioration des Tests")]),t._v(" "),s("blockquote",[s("p",[t._v("L'objectif de cette partie est d'utiliser une base de donnée similaire à celle utilisée en production par l'application."),s("br"),t._v("\nPour cet atelier nous allons utiliser le SGBD MYSQL.")])]),t._v(" "),s("p",[t._v("Afin de commencer la migration vers des tests utilisant une base de données MySQL, il vous faut tout d'abord ajouter la dépendance vers le driver Mysql :")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql-connector-java"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("runtime"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Puis dans un second temps afin de prévoir l'interopérabilité avec Testcontainers il faut ajouter la librairie "),s("code",[t._v("org.testcontainers:testcontainers")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.testcontainers"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("testcontainers"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.11.2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Ensuite il vous faut modifier la configuration pour utiliser la nouvelle base de donnée. Ceci ce déroule en trois étapes :")]),t._v(" "),s("ul",[s("li",[t._v("Modification des properties de configuration de la datasource de l'application")]),t._v(" "),s("li",[t._v("Modification de la classe commune "),s("code",[t._v("AbstractRepositoryTest")]),t._v(" pour utiliser la Datasource nouvellement configuré")]),t._v(" "),s("li",[t._v("Ajouter une première version de "),s("code",[t._v("GenericContainer")]),t._v(" (objet java fourni par la librairie Testcontainers représentant un conteneur docker)")])]),t._v(" "),s("h3",{attrs:{id:"modification-des-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-des-properties","aria-hidden":"true"}},[t._v("#")]),t._v(" Modification des properties")]),t._v(" "),s("p",[t._v("Afin de configurer les tests pour qu'ils utilisent la datasource MySQL, vous devez faire en sorte d'ajouter ces nouvelles propriétés de configuration :")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://localhost/petclinic")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("petclinic")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("petclinic")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.jpa.database-platform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("org.hibernate.dialect.MySQLDialect")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("Il existe plusieurs manières de surcharger des propriétés de configuration, aussi bien par fichier que par annotation.")])]),t._v(" "),s("details",[s("summary",[t._v("Afficher la réponse")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DataJpaTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    properties "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.datasource.url=jdbc:mysql://localhost/petclinic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.datasource.username=petclinic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.datasource.password=petclinic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    includeFilters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FilterType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ASSIGNABLE_TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" classes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractRepositoryTests")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"utilisation-de-la-nouvelle-datasource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utilisation-de-la-nouvelle-datasource","aria-hidden":"true"}},[t._v("#")]),t._v(" Utilisation de la nouvelle dataSource")]),t._v(" "),s("p",[t._v("Par ailleurs, l'annotation "),s("code",[t._v("@DataJpaTest")]),t._v(" de la dépendance Spring Boot Test se charge de créer tout le nécessaire pour avoir un contexte de test unitaire opérationnel.\nC'est-à-dire qu'elle va notamment créer une base de données en mémoire (cf : ligne 12 ci-dessous).")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RUNTIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inherited")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@BootstrapWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataJpaTestContextBootstrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExtendWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringExtension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@OverrideAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@TypeExcludeFilters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataJpaTypeExcludeFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureCache")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureDataJpa")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureTestDatabase")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureTestEntityManager")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ImportAutoConfiguration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataJpaTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... TRUNCATED ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Vous devez donc faire en sorte de surcharger ce comportement pour ne pas avoir de base de données en mémoire.")]),t._v(" "),s("details",[s("summary",[t._v("Afficher la réponse")]),t._v(" "),s("p",[t._v("Pour cela ajouter l'annotation suivante :")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@AutoConfigureTestDatabase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("replace "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AutoConfigureTestDatabase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NONE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("Cette annotation permet de dire à SpringBoot Test de ne surcharger aucune datasource lors des tests")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verification","aria-hidden":"true"}},[t._v("#")]),t._v(" Vérification")]),t._v(" "),s("p",[t._v("Lancez les tests ! S'ils échouent avec une belle exception")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Connexion refusée")]),t._v(" "),s("p",[t._v("Caused by: java.net.ConnectException: Connexion refusée (Connection refused)")])]),t._v(" "),s("p",[t._v("c'est que la base de données en mémoire a bien été désactivé au profit de la base Mysql. Plus aucun des tests de repository ne fonctionnent ! 😃")])])}),[],!1,null,null,null);a.default=n.exports}}]);