class Actions {
    // 默认值为空 Action
    actions = {
        onGlobalStateChange: null,
        setGlobalState: null,
    };

    /**
     * 设置 actions
     */
    setActions(actions) {
        this.actions = actions;
    }

    /**
     * 映射
     */
    onGlobalStateChange() {
        return this.actions.onGlobalStateChange(...arguments);
    }

    /**
     * 映射
     */
    setGlobalState() {
        return this.actions.setGlobalState(...arguments);
    }
}

const actions = new Actions();
export default actions;

