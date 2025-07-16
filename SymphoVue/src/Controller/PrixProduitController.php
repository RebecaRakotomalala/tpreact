<?php
namespace App\Controller;

use App\Repository\PrixProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class PrixProduitController extends AbstractController
{
    #[Route('/api/hausses', name: 'api_hausses', methods: ['GET'])]
    public function getHaussesEntreDates(Request $request, PrixProduitRepository $repo): JsonResponse
    {
        $start = $request->query->get('start_date');
        $end = $request->query->get('end_date');

        $hausses = $repo->findHaussesBetweenDates($start, $end);

        $data = array_map(function($h) {
            return [
                'id_prix' => $h->getIdPrix(),
                'prix_unitaire' => $h->getPrixUnitaire(),
                'date_prix' => $h->getDatePrix()->format('Y-m-d'),
                'id_produit' => $h->getProduit()?->getIdProduit(),
            ];
        }, $hausses);

        return $this->json($data);
    }
}
