<template>
    <div class="search-topbar search-box">
        <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false"
            class="react-autosuggest__container">
            <input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1"
                class="react-autosuggest__input" placeholder="Xem chi tiết mã" value="">
            <div id="react-autowhatever-1" role="listbox" class="react-autosuggest__suggestions-container"></div>
        </div>
        <a>
            <font-awesome-icon :icon="['fas', 'eye']" />
        </a>
    </div>
</template>