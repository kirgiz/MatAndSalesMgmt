package kirgiz.stockandsalesmanagement.app.repository;

import kirgiz.stockandsalesmanagement.app.domain.Company;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Company entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}
