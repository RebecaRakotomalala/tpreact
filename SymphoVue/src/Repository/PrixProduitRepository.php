<?php
    // N'oublie pas d'ajouter use pour QueryBuilder et DateTimeInterface
    namespace App\Repository;

    use App\Entity\PrixProduit;
    use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
    use Doctrine\Persistence\ManagerRegistry;

    class PrixProduitRepository extends ServiceEntityRepository
    {
        public function __construct(ManagerRegistry $registry)
        {
            parent::__construct($registry, PrixProduit::class);
        }

        public function findHaussesBetweenDates(?string $start, ?string $end): array
        {
            $qb = $this->createQueryBuilder('p');

            if ($start) {
                $qb->andWhere('p.date_prix >= :start')
                ->setParameter('start', new \DateTime($start));
            }

            if ($end) {
                $qb->andWhere('p.date_prix <= :end')
                ->setParameter('end', new \DateTime($end));
            }

            return $qb
                ->orderBy('p.date_prix', 'ASC')
                ->getQuery()
                ->getResult();
        }
    }
