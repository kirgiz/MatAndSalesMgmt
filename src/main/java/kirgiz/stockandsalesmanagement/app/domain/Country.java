package kirgiz.stockandsalesmanagement.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Country.
 */
@Entity
@Table(name = "country")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "country")
public class Country implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(max = 3)
    @Column(name = "i_so_code", length = 3, nullable = false)
    private String iSOCode;

    @NotNull
    @Size(max = 60)
    @Column(name = "name", length = 60, nullable = false)
    private String name;

    @OneToMany(mappedBy = "country1")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Address> addresscs = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getiSOCode() {
        return iSOCode;
    }

    public Country iSOCode(String iSOCode) {
        this.iSOCode = iSOCode;
        return this;
    }

    public void setiSOCode(String iSOCode) {
        this.iSOCode = iSOCode;
    }

    public String getName() {
        return name;
    }

    public Country name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Address> getAddresscs() {
        return addresscs;
    }

    public Country addresscs(Set<Address> addresses) {
        this.addresscs = addresses;
        return this;
    }

    public Country addAddressc(Address address) {
        this.addresscs.add(address);
        address.setCountry1(this);
        return this;
    }

    public Country removeAddressc(Address address) {
        this.addresscs.remove(address);
        address.setCountry1(null);
        return this;
    }

    public void setAddresscs(Set<Address> addresses) {
        this.addresscs = addresses;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Country country = (Country) o;
        if (country.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), country.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Country{" +
            "id=" + getId() +
            ", iSOCode='" + getiSOCode() + "'" +
            ", name='" + getName() + "'" +
            "}";
    }
}
