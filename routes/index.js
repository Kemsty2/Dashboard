const Router = require('express');
var router = Router();

/* GET dasboard page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dashboard ASCEFCA', page_dashboard: true });
});

router.get('/number_user_per_day', (req, res) => {
  try {
    /*
    C'est ici que tu ecris la fonction pour récupérer le nombre d'utilisateur
    pour tous les jours sous forme de tableau
    Ex : [2,2,4,14,45,12,5] où index 0 représente Lundi et ainsi de suite
    Tu envois les infos avec la fonction res.json
    */
  } catch (error) {
    console.error(error);
  }
});

router.get('/number_user_per_month', (req, res) => {
  try {
    /*
    C'est ici que tu ecris la fonction pour récupérer le nombre d'utilisateur
    pour tous les jours sous forme de tableau
    Ex : [2,2,4,14,45,12,5, 4,2,1,2,1] où index 0 représente
    Lundi et ainsi de suite
    Tu envois les infos avec la fonction res.json
    */
  } catch (error) {
    console.error(error);
  }
});

//  Récupère la liste des aliments ainsi que la liste des groupes
router.get('/aliments', (req, res) => {
  try {
    res.render('aliments', { title: 'Aliments ASCEFCA', page_aliments: true });
  } catch (error) {
    console.error(error);
  }
});

router.get('/aliment/:idAliment', (req, res) => {
  try {
    res.render('detailsAliment', {
      title: 'Details Aliment : Nom Aliment',
      page_aliments: true,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get('/conseils_hygiene', (req, res) => {
  try {
    res.render('conseilsHygiène', {
      title: "Conseils D'Hygiene ASCEFCA",
      page_conseils: true,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get('/calendrier', (req, res) => {
  try {
    res.render('calendrier', {
      title: 'Calendrier',
      page_calendrier: true,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get('/notion_de_formation', (req, res) => {
  try {
    res.render('notionFormation', {
      title: 'Notion De Formation',
      page_notion_formation: true,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get('/forum', (req, res) => {
  try {
    res.render('forum', {
      title: 'Forum',
      page_forum: true,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get('/faq', (req, res) => {
  try {
    res.render('faq', {
      title: 'FAQ',
      page_faq: true,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
