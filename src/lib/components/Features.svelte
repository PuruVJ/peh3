<script>
  import { i18n } from '$lib/stores/i18n.store';

  import FeatureBox from './FeatureBox.svelte';
</script>

<section class="container width-60">
  <h2>{$i18n.servicesHeading}</h2>
  <div class="center-box">
    <FeatureBox>
      <span slot="title">Phaco Surgery</span>
      <span slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut quidem nobis ab aut
        minus sit eligendi odit quae placeat excepturi in dolores praesentium nisi assumenda
        incidunt rerum, unde animi?
      </span>
    </FeatureBox>
    <FeatureBox>
      <span slot="title">Phaco Surgery</span>
      <span slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut quidem nobis ab aut
        minus sit eligendi odit quae placeat excepturi in dolores praesentium nisi assumenda
        incidunt rerum, unde animi?
      </span>
    </FeatureBox>
    <FeatureBox>
      <span slot="title">Phaco Surgery</span>
      <span slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut quidem nobis ab aut
        minus sit eligendi odit quae placeat excepturi in dolores praesentium nisi assumenda
        incidunt rerum, unde animi?
      </span>
    </FeatureBox>
    <FeatureBox>
      <span slot="title">Phaco Surgery</span>
      <span slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut quidem nobis ab aut
        minus sit eligendi odit quae placeat excepturi in dolores praesentium nisi assumenda
        incidunt rerum, unde animi?
      </span>
    </FeatureBox>
    <FeatureBox>
      <span slot="title">Phaco Surgery</span>
      <span slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut quidem nobis ab aut
        minus sit eligendi odit quae placeat excepturi in dolores praesentium nisi assumenda
        incidunt rerum, unde animi?
      </span>
    </FeatureBox>
    <FeatureBox>
      <span slot="title">Phaco Surgery</span>
      <span slot="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ut quidem nobis ab aut
        minus sit eligendi odit quae placeat excepturi in dolores praesentium nisi assumenda
        incidunt rerum, unde animi?
      </span>
    </FeatureBox>
  </div>
</section>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      width: 100%;
    }
  }

  .center-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
  }
</style>
