// src/Browser.FluentUIWebComponents/web/generated/contracts.g.ts
var BrowserModuleName = "maui-browser";
var BrowserApplicationAssemblyName = "Microsoft.Maui.Platforms.Browser.FluentUIWebComponents.dll";
var exportMethods = ["AnimationTick", "LayoutTick", "OnClick", "OnImageLoaded", "OnInput", "OnInputCompleted", "OnInputFocus", "OnInputSelection", "OnScroll", "OnSystemThemeChanged", "RunScheduled", "Shutdown"];
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function resolveBrowserApplicationExports(assembly) {
  let value = assembly;
  for (const name of ["Microsoft", "Maui", "Platforms", "Browser", "FluentUIWebComponents", "BrowserApplication"]) {
    if (!isRecord(value)) {
      throw new Error("Invalid assembly export path: Microsoft.Maui.Platforms.Browser.FluentUIWebComponents.BrowserApplication");
    }
    value = value[name];
  }
  if (!isRecord(value)) {
    throw new Error("Invalid interop exports object");
  }
  for (const name of exportMethods) {
    if (typeof value[name] !== "function") {
      throw new Error(`Missing interop export: ${name}`);
    }
  }
  return value;
}

// node_modules/@microsoft/fast-element/dist/esm/binding/binding.js
var Binding = class {
  /**
   * Creates a binding.
   * @param evaluate - Evaluates the binding.
   * @param policy - The security policy to associate with this binding.
   * @param isVolatile - Indicates whether the binding is volatile.
   */
  constructor(evaluate, policy, isVolatile = false) {
    this.evaluate = evaluate;
    this.policy = policy;
    this.isVolatile = isVolatile;
  }
};

// node_modules/@microsoft/fast-element/dist/esm/interfaces.js
var Message;
(function(Message2) {
  Message2[Message2["needsArrayObservation"] = 1101] = "needsArrayObservation";
  Message2[Message2["onlySetDOMPolicyOnce"] = 1201] = "onlySetDOMPolicyOnce";
  Message2[Message2["bindingInnerHTMLRequiresTrustedTypes"] = 1202] = "bindingInnerHTMLRequiresTrustedTypes";
  Message2[Message2["twoWayBindingRequiresObservables"] = 1203] = "twoWayBindingRequiresObservables";
  Message2[Message2["hostBindingWithoutHost"] = 1204] = "hostBindingWithoutHost";
  Message2[Message2["unsupportedBindingBehavior"] = 1205] = "unsupportedBindingBehavior";
  Message2[Message2["directCallToHTMLTagNotAllowed"] = 1206] = "directCallToHTMLTagNotAllowed";
  Message2[Message2["onlySetTemplatePolicyOnce"] = 1207] = "onlySetTemplatePolicyOnce";
  Message2[Message2["cannotSetTemplatePolicyAfterCompilation"] = 1208] = "cannotSetTemplatePolicyAfterCompilation";
  Message2[Message2["blockedByDOMPolicy"] = 1209] = "blockedByDOMPolicy";
  Message2[Message2["invalidHydrationAttributeMarker"] = 1210] = "invalidHydrationAttributeMarker";
  Message2[Message2["duplicateRenderInstruction"] = 1211] = "duplicateRenderInstruction";
  Message2[Message2["missingElementDefinition"] = 1401] = "missingElementDefinition";
  Message2[Message2["noRegistrationForContext"] = 1501] = "noRegistrationForContext";
  Message2[Message2["noFactoryForResolver"] = 1502] = "noFactoryForResolver";
  Message2[Message2["invalidResolverStrategy"] = 1503] = "invalidResolverStrategy";
  Message2[Message2["cannotAutoregisterDependency"] = 1504] = "cannotAutoregisterDependency";
  Message2[Message2["cannotResolveKey"] = 1505] = "cannotResolveKey";
  Message2[Message2["cannotConstructNativeFunction"] = 1506] = "cannotConstructNativeFunction";
  Message2[Message2["cannotJITRegisterNonConstructor"] = 1507] = "cannotJITRegisterNonConstructor";
  Message2[Message2["cannotJITRegisterIntrinsic"] = 1508] = "cannotJITRegisterIntrinsic";
  Message2[Message2["cannotJITRegisterInterface"] = 1509] = "cannotJITRegisterInterface";
  Message2[Message2["invalidResolver"] = 1510] = "invalidResolver";
  Message2[Message2["invalidKey"] = 1511] = "invalidKey";
  Message2[Message2["noDefaultResolver"] = 1512] = "noDefaultResolver";
  Message2[Message2["cyclicDependency"] = 1513] = "cyclicDependency";
  Message2[Message2["connectUpdateRequiresController"] = 1514] = "connectUpdateRequiresController";
})(Message || (Message = {}));
var isFunction = (object) => typeof object === "function";
var isString = (object) => typeof object === "string";
var noop = () => void 0;

// node_modules/@microsoft/fast-element/dist/esm/platform.js
var debugMessages = /* @__PURE__ */ Object.create(null);
var FAST = {
  /**
   * Sends a warning to the developer.
   * @param code - The warning code to send.
   * @param values - Values relevant for the warning message.
   */
  warn(_code, _values) {
  },
  /**
   * Creates an error from a code.
   * @param code - The error code.
   * @param values - Values relevant for the error message.
   */
  error(code, _values) {
    return new Error(`Error ${code}`);
  },
  /**
   * Adds debug messages for errors and warnings.
   * @param messages - The message dictionary to add.
   */
  addMessages(messages) {
    Object.assign(debugMessages, messages);
  }
};
var emptyArray = Object.freeze([]);
function createTypeRegistry() {
  const typeToDefinition = /* @__PURE__ */ new Map();
  return Object.freeze({
    register(definition5) {
      if (typeToDefinition.has(definition5.type)) {
        return false;
      }
      typeToDefinition.set(definition5.type, definition5);
      return true;
    },
    getByType(key) {
      return typeToDefinition.get(key);
    },
    getForInstance(object) {
      if (object === null || object === void 0) {
        return void 0;
      }
      return typeToDefinition.get(object.constructor);
    }
  });
}
function createMetadataLocator() {
  const metadataLookup = /* @__PURE__ */ new WeakMap();
  return function(target) {
    let metadata = metadataLookup.get(target);
    if (metadata === void 0) {
      let currentTarget = Reflect.getPrototypeOf(target);
      while (metadata === void 0 && currentTarget !== null) {
        metadata = metadataLookup.get(currentTarget);
        currentTarget = Reflect.getPrototypeOf(currentTarget);
      }
      metadata = metadata === void 0 ? [] : metadata.slice(0);
      metadataLookup.set(target, metadata);
    }
    return metadata;
  };
}
function makeSerializationNoop(type) {
  type.prototype.toJSON = noop;
}

// node_modules/@microsoft/fast-element/dist/esm/binding/one-time.js
var OneTimeBinding = class extends Binding {
  createObserver() {
    return this;
  }
  bind(controller) {
    return this.evaluate(controller.source, controller.context);
  }
};
makeSerializationNoop(OneTimeBinding);
function oneTime(expression, policy) {
  return new OneTimeBinding(expression, policy);
}

// node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js
var SubscriberSet = class {
  /**
   * Creates an instance of SubscriberSet for the specified subject.
   * @param subject - The subject that subscribers will receive notifications from.
   * @param initialSubscriber - An initial subscriber to changes.
   */
  constructor(subject, initialSubscriber) {
    this.sub1 = void 0;
    this.sub2 = void 0;
    this.spillover = void 0;
    this.subject = subject;
    this.sub1 = initialSubscriber;
  }
  /**
   * Checks whether the provided subscriber has been added to this set.
   * @param subscriber - The subscriber to test for inclusion in this set.
   */
  has(subscriber) {
    return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   */
  subscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.has(subscriber)) {
        return;
      }
      if (this.sub1 === void 0) {
        this.sub1 = subscriber;
        return;
      }
      if (this.sub2 === void 0) {
        this.sub2 = subscriber;
        return;
      }
      this.spillover = [this.sub1, this.sub2, subscriber];
      this.sub1 = void 0;
      this.sub2 = void 0;
    } else {
      const index = spillover.indexOf(subscriber);
      if (index === -1) {
        spillover.push(subscriber);
      }
    }
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   */
  unsubscribe(subscriber) {
    const spillover = this.spillover;
    if (spillover === void 0) {
      if (this.sub1 === subscriber) {
        this.sub1 = void 0;
      } else if (this.sub2 === subscriber) {
        this.sub2 = void 0;
      }
    } else {
      const index = spillover.indexOf(subscriber);
      if (index !== -1) {
        spillover.splice(index, 1);
      }
    }
  }
  /**
   * Notifies all subscribers.
   * @param args - Data passed along to subscribers during notification.
   */
  notify(args) {
    const spillover = this.spillover;
    const subject = this.subject;
    if (spillover === void 0) {
      const sub1 = this.sub1;
      const sub2 = this.sub2;
      if (sub1 !== void 0) {
        sub1.handleChange(subject, args);
      }
      if (sub2 !== void 0) {
        sub2.handleChange(subject, args);
      }
    } else {
      for (let i = 0, ii = spillover.length; i < ii; ++i) {
        spillover[i].handleChange(subject, args);
      }
    }
  }
};
var PropertyChangeNotifier = class {
  /**
   * Creates an instance of PropertyChangeNotifier for the specified subject.
   * @param subject - The object that subscribers will receive notifications for.
   */
  constructor(subject) {
    this.subscribers = {};
    this.subjectSubscribers = null;
    this.subject = subject;
  }
  /**
   * Notifies all subscribers, based on the specified property.
   * @param propertyName - The property name, passed along to subscribers during notification.
   */
  notify(propertyName) {
    var _a2, _b;
    (_a2 = this.subscribers[propertyName]) === null || _a2 === void 0 ? void 0 : _a2.notify(propertyName);
    (_b = this.subjectSubscribers) === null || _b === void 0 ? void 0 : _b.notify(propertyName);
  }
  /**
   * Subscribes to notification of changes in an object's state.
   * @param subscriber - The object that is subscribing for change notification.
   * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
   */
  subscribe(subscriber, propertyToWatch) {
    var _a2, _b;
    let subscribers;
    if (propertyToWatch) {
      subscribers = (_a2 = this.subscribers[propertyToWatch]) !== null && _a2 !== void 0 ? _a2 : this.subscribers[propertyToWatch] = new SubscriberSet(this.subject);
    } else {
      subscribers = (_b = this.subjectSubscribers) !== null && _b !== void 0 ? _b : this.subjectSubscribers = new SubscriberSet(this.subject);
    }
    subscribers.subscribe(subscriber);
  }
  /**
   * Unsubscribes from notification of changes in an object's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
   */
  unsubscribe(subscriber, propertyToUnwatch) {
    var _a2, _b;
    if (propertyToUnwatch) {
      (_a2 = this.subscribers[propertyToUnwatch]) === null || _a2 === void 0 ? void 0 : _a2.unsubscribe(subscriber);
    } else {
      (_b = this.subjectSubscribers) === null || _b === void 0 ? void 0 : _b.unsubscribe(subscriber);
    }
  }
};

// node_modules/@microsoft/fast-element/dist/esm/observation/update-queue.js
var tasks = [];
var pendingErrors = [];
var rAF = globalThis.requestAnimationFrame;
var updateAsync = true;
function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
function tryRunTask(task) {
  try {
    task.call();
  } catch (error) {
    if (updateAsync) {
      pendingErrors.push(error);
      setTimeout(throwFirstError, 0);
    } else {
      tasks.length = 0;
      throw error;
    }
  }
}
function process() {
  const capacity = 1024;
  let index = 0;
  while (index < tasks.length) {
    tryRunTask(tasks[index]);
    index++;
    if (index > capacity) {
      for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
        tasks[scan] = tasks[scan + index];
      }
      tasks.length -= index;
      index = 0;
    }
  }
  tasks.length = 0;
}
function enqueue(callable) {
  tasks.push(callable);
  if (tasks.length < 2) {
    updateAsync ? rAF(process) : process();
  }
}
var Updates = Object.freeze({
  enqueue,
  next: () => new Promise(enqueue),
  process,
  setMode: (isAsync) => updateAsync = isAsync
});

// node_modules/@microsoft/fast-element/dist/esm/observation/observable.js
var SourceLifetime = Object.freeze({
  /**
   * The source to controller lifetime relationship is unknown.
   */
  unknown: void 0,
  /**
   * The source and controller lifetimes are coupled to one another.
   * They can/will be GC'd together.
   */
  coupled: 1
});
var Observable = (() => {
  const queueUpdate = Updates.enqueue;
  const volatileRegex = /(:|&&|\|\||if|\?\.)/;
  const notifierLookup = /* @__PURE__ */ new WeakMap();
  let watcher = void 0;
  let createArrayObserver = (array) => {
    throw FAST.error(Message.needsArrayObservation);
  };
  function getNotifier(source) {
    var _a2;
    let found = (_a2 = source.$fastController) !== null && _a2 !== void 0 ? _a2 : notifierLookup.get(source);
    if (found === void 0) {
      Array.isArray(source) ? found = createArrayObserver(source) : notifierLookup.set(source, found = new PropertyChangeNotifier(source));
    }
    return found;
  }
  const getAccessors = createMetadataLocator();
  class DefaultObservableAccessor {
    constructor(name) {
      this.name = name;
      this.field = `_${name}`;
      this.callback = `${name}Changed`;
    }
    getValue(source) {
      if (watcher !== void 0) {
        watcher.watch(source, this.name);
      }
      return source[this.field];
    }
    setValue(source, newValue) {
      const field = this.field;
      const oldValue = source[field];
      if (oldValue !== newValue) {
        source[field] = newValue;
        const callback = source[this.callback];
        if (isFunction(callback)) {
          callback.call(source, oldValue, newValue);
        }
        getNotifier(source).notify(this.name);
      }
    }
  }
  class ExpressionNotifierImplementation extends SubscriberSet {
    constructor(expression, initialSubscriber, isVolatileBinding = false) {
      super(expression, initialSubscriber);
      this.expression = expression;
      this.isVolatileBinding = isVolatileBinding;
      this.needsRefresh = true;
      this.needsQueue = true;
      this.isAsync = true;
      this.first = this;
      this.last = null;
      this.propertySource = void 0;
      this.propertyName = void 0;
      this.notifier = void 0;
      this.next = void 0;
    }
    setMode(isAsync) {
      this.isAsync = this.needsQueue = isAsync;
    }
    bind(controller) {
      const value = this.observe(controller.source, controller.context);
      if (!controller.isBound && this.requiresUnbind(controller)) {
        controller.onUnbind(this);
      }
      return value;
    }
    requiresUnbind(controller) {
      return controller.sourceLifetime !== SourceLifetime.coupled || this.first !== this.last || this.first.propertySource !== controller.source;
    }
    unbind(controller) {
      this.dispose();
    }
    observe(source, context) {
      if (this.needsRefresh && this.last !== null) {
        this.dispose();
      }
      const previousWatcher = watcher;
      watcher = this.needsRefresh ? this : void 0;
      this.needsRefresh = this.isVolatileBinding;
      let result;
      try {
        result = this.expression(source, context);
      } finally {
        watcher = previousWatcher;
      }
      return result;
    }
    // backwards compat with v1 kernel
    disconnect() {
      this.dispose();
    }
    dispose() {
      if (this.last !== null) {
        let current = this.first;
        while (current !== void 0) {
          current.notifier.unsubscribe(this, current.propertyName);
          current = current.next;
        }
        this.last = null;
        this.needsRefresh = this.needsQueue = this.isAsync;
      }
    }
    watch(propertySource, propertyName) {
      const prev = this.last;
      const notifier = getNotifier(propertySource);
      const current = prev === null ? this.first : {};
      current.propertySource = propertySource;
      current.propertyName = propertyName;
      current.notifier = notifier;
      notifier.subscribe(this, propertyName);
      if (prev !== null) {
        if (!this.needsRefresh) {
          let prevValue;
          watcher = void 0;
          prevValue = prev.propertySource[prev.propertyName];
          watcher = this;
          if (propertySource === prevValue) {
            this.needsRefresh = true;
          }
        }
        prev.next = current;
      }
      this.last = current;
    }
    handleChange() {
      if (this.needsQueue) {
        this.needsQueue = false;
        queueUpdate(this);
      } else if (!this.isAsync) {
        this.call();
      }
    }
    call() {
      if (this.last !== null) {
        this.needsQueue = this.isAsync;
        this.notify(this);
      }
    }
    *records() {
      let next2 = this.first;
      while (next2 !== void 0) {
        yield next2;
        next2 = next2.next;
      }
    }
  }
  makeSerializationNoop(ExpressionNotifierImplementation);
  return Object.freeze({
    /**
     * @internal
     * @param factory - The factory used to create array observers.
     */
    setArrayObserverFactory(factory) {
      createArrayObserver = factory;
    },
    /**
     * Gets a notifier for an object or Array.
     * @param source - The object or Array to get the notifier for.
     */
    getNotifier,
    /**
     * Records a property change for a source object.
     * @param source - The object to record the change against.
     * @param propertyName - The property to track as changed.
     */
    track(source, propertyName) {
      watcher && watcher.watch(source, propertyName);
    },
    /**
     * Notifies watchers that the currently executing property getter or function is volatile
     * with respect to its observable dependencies.
     */
    trackVolatile() {
      watcher && (watcher.needsRefresh = true);
    },
    /**
     * Notifies subscribers of a source object of changes.
     * @param source - the object to notify of changes.
     * @param args - The change args to pass to subscribers.
     */
    notify(source, args) {
      getNotifier(source).notify(args);
    },
    /**
     * Defines an observable property on an object or prototype.
     * @param target - The target object to define the observable on.
     * @param nameOrAccessor - The name of the property to define as observable;
     * or a custom accessor that specifies the property name and accessor implementation.
     */
    defineProperty(target, nameOrAccessor) {
      if (isString(nameOrAccessor)) {
        nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
      }
      getAccessors(target).push(nameOrAccessor);
      Reflect.defineProperty(target, nameOrAccessor.name, {
        enumerable: true,
        get() {
          return nameOrAccessor.getValue(this);
        },
        set(newValue) {
          nameOrAccessor.setValue(this, newValue);
        }
      });
    },
    /**
     * Finds all the observable accessors defined on the target,
     * including its prototype chain.
     * @param target - The target object to search for accessor on.
     */
    getAccessors,
    /**
     * Creates a {@link ExpressionNotifier} that can watch the
     * provided {@link Expression} for changes.
     * @param expression - The binding to observe.
     * @param initialSubscriber - An initial subscriber to changes in the binding value.
     * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
     */
    binding(expression, initialSubscriber, isVolatileBinding = this.isVolatileBinding(expression)) {
      return new ExpressionNotifierImplementation(expression, initialSubscriber, isVolatileBinding);
    },
    /**
     * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
     * on every evaluation of the value.
     * @param expression - The binding to inspect.
     */
    isVolatileBinding(expression) {
      return volatileRegex.test(expression.toString());
    }
  });
})();
function observable(target, nameOrAccessor) {
  Observable.defineProperty(target, nameOrAccessor);
}
var contextEvent = /* @__PURE__ */ (() => {
  let current = null;
  return {
    get() {
      return current;
    },
    set(event) {
      current = event;
    }
  };
})();
var ExecutionContext = Object.freeze({
  /**
   * A default execution context.
   */
  default: {
    index: 0,
    length: 0,
    get event() {
      return ExecutionContext.getEvent();
    },
    eventDetail() {
      return this.event.detail;
    },
    eventTarget() {
      return this.event.target;
    }
  },
  /**
   * Gets the current event.
   * @returns An event object.
   */
  getEvent() {
    return contextEvent.get();
  },
  /**
   * Sets the current event.
   * @param event - An event object.
   */
  setEvent(event) {
    contextEvent.set(event);
  }
});

// node_modules/@microsoft/fast-element/dist/esm/binding/one-way.js
var OneWayBinding = class extends Binding {
  createObserver(subscriber) {
    return Observable.binding(this.evaluate, subscriber, this.isVolatile);
  }
};
function oneWay(expression, policy, isVolatile = Observable.isVolatileBinding(expression)) {
  return new OneWayBinding(expression, policy, isVolatile);
}

// node_modules/@microsoft/fast-element/dist/esm/dom.js
var DOMAspect = Object.freeze({
  /**
   * Not aspected.
   */
  none: 0,
  /**
   * An attribute.
   */
  attribute: 1,
  /**
   * A boolean attribute.
   */
  booleanAttribute: 2,
  /**
   * A property.
   */
  property: 3,
  /**
   * Content
   */
  content: 4,
  /**
   * A token list.
   */
  tokenList: 5,
  /**
   * An event.
   */
  event: 6
});
var createHTML = (html2) => html2;
var fastTrustedType = globalThis.trustedTypes ? globalThis.trustedTypes.createPolicy("fast-html", { createHTML }) : { createHTML };
var defaultPolicy = Object.freeze({
  createHTML(value) {
    return fastTrustedType.createHTML(value);
  },
  protect(tagName5, aspect, aspectName, sink) {
    return sink;
  }
});
var fastPolicy = defaultPolicy;
var DOM = Object.freeze({
  /**
   * Gets the dom policy used by the templating system.
   */
  get policy() {
    return defaultPolicy;
  },
  /**
   * Sets the dom policy used by the templating system.
   * @param policy - The policy to set.
   * @remarks
   * This API can only be called once, for security reasons. It should be
   * called by the application developer at the start of their program.
   */
  setPolicy(value) {
    if (defaultPolicy !== fastPolicy) {
      throw FAST.error(Message.onlySetDOMPolicyOnce);
    }
    defaultPolicy = value;
  },
  /**
   * Sets an attribute value on an element.
   * @param element - The element to set the attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is `null` or `undefined`, the attribute is removed, otherwise
   * it is set to the provided value using the standard `setAttribute` API.
   */
  setAttribute(element, attributeName, value) {
    value === null || value === void 0 ? element.removeAttribute(attributeName) : element.setAttribute(attributeName, value);
  },
  /**
   * Sets a boolean attribute value.
   * @param element - The element to set the boolean attribute value on.
   * @param attributeName - The attribute name to set.
   * @param value - The value of the attribute to set.
   * @remarks
   * If the value is true, the attribute is added; otherwise it is removed.
   */
  setBooleanAttribute(element, attributeName, value) {
    value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
  }
});

// node_modules/@microsoft/fast-element/dist/esm/components/attributes.js
var booleanMode = "boolean";
var reflectMode = "reflect";
var AttributeConfiguration = Object.freeze({
  /**
   * Locates all attribute configurations associated with a type.
   */
  locate: createMetadataLocator()
});
var booleanConverter = {
  toView(value) {
    return value ? "" : null;
  },
  fromView(value) {
    return !!value;
  }
};
function toNumber(value) {
  if (value === null || value === void 0) {
    return null;
  }
  const number = value * 1;
  return isNaN(number) ? null : number;
}
var nullableNumberConverter = {
  toView(value) {
    const output = toNumber(value);
    return output ? output.toString() : output;
  },
  fromView: toNumber
};
var AttributeDefinition = class _AttributeDefinition {
  /**
   * Creates an instance of AttributeDefinition.
   * @param Owner - The class constructor that owns this attribute.
   * @param name - The name of the property associated with the attribute.
   * @param attribute - The name of the attribute in HTML.
   * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
   * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
   * to convert values to and from a DOM string.
   */
  constructor(Owner, name, attribute = name.toLowerCase(), mode = reflectMode, converter) {
    this.guards = /* @__PURE__ */ new Set();
    this.Owner = Owner;
    this.name = name;
    this.attribute = attribute;
    this.mode = mode;
    this.converter = converter;
    this.fieldName = `_${name}`;
    this.callbackName = `${name}Changed`;
    this.hasCallback = this.callbackName in Owner.prototype;
    if (mode === booleanMode && converter === void 0) {
      this.converter = booleanConverter;
    }
  }
  /**
   * Sets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   * @param newValue - The value to set the attribute/property to.
   */
  setValue(source, newValue) {
    const oldValue = source[this.fieldName];
    const converter = this.converter;
    if (converter !== void 0) {
      newValue = converter.fromView(newValue);
    }
    if (oldValue !== newValue) {
      source[this.fieldName] = newValue;
      this.tryReflectToAttribute(source);
      if (this.hasCallback) {
        source[this.callbackName](oldValue, newValue);
      }
      source.$fastController.notify(this.name);
    }
  }
  /**
   * Gets the value of the attribute/property on the source element.
   * @param source - The source element to access.
   */
  getValue(source) {
    Observable.track(source, this.name);
    return source[this.fieldName];
  }
  /** @internal */
  onAttributeChangedCallback(element, value) {
    if (this.guards.has(element)) {
      return;
    }
    this.guards.add(element);
    if (this.mode === booleanMode) {
      this.setValue(element, value !== null);
    } else {
      this.setValue(element, value);
    }
    this.guards.delete(element);
  }
  tryReflectToAttribute(element) {
    const mode = this.mode;
    const guards = this.guards;
    if (guards.has(element) || mode === "fromView") {
      return;
    }
    Updates.enqueue(() => {
      guards.add(element);
      const latestValue = element[this.fieldName];
      switch (mode) {
        case reflectMode: {
          const converter = this.converter;
          DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
          break;
        }
        case booleanMode:
          DOM.setBooleanAttribute(element, this.attribute, latestValue);
          break;
      }
      guards.delete(element);
    });
  }
  /**
   * Collects all attribute definitions associated with the owner.
   * @param Owner - The class constructor to collect attribute for.
   * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
   * @internal
   */
  static collect(Owner, ...attributeLists) {
    const attributes = [];
    attributeLists.push(AttributeConfiguration.locate(Owner));
    for (let i = 0, ii = attributeLists.length; i < ii; ++i) {
      const list = attributeLists[i];
      if (list === void 0) {
        continue;
      }
      for (let j = 0, jj = list.length; j < jj; ++j) {
        const config = list[j];
        if (isString(config)) {
          attributes.push(new _AttributeDefinition(Owner, config));
        } else {
          attributes.push(new _AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
        }
      }
    }
    return attributes;
  }
};
function attr(configOrTarget, prop) {
  let config;
  function decorator($target, $prop) {
    if (arguments.length > 1) {
      config.property = $prop;
    }
    AttributeConfiguration.locate($target.constructor).push(config);
  }
  if (arguments.length > 1) {
    config = {};
    decorator(configOrTarget, prop);
    return;
  }
  config = configOrTarget === void 0 ? {} : configOrTarget;
  return decorator;
}

// node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js
var DefaultStyleStrategy;
function reduceStyles(styles6) {
  return styles6.reduce((reduced, current) => {
    if (current instanceof ElementStyles) {
      reduced.push(...reduceStyles(current.styles));
    } else {
      reduced.push(current);
    }
    return reduced;
  }, []);
}
var ElementStyles = class _ElementStyles {
  /**
   * Gets the StyleStrategy associated with these element styles.
   */
  get strategy() {
    if (this._strategy === null) {
      if (!DefaultStyleStrategy) {
        _ElementStyles.setDefaultStrategy(_ElementStyles.supportsAdoptedStyleSheets ? createAdoptedSheetsStrategy() : createStyleElementStrategy());
      }
      this.withStrategy(DefaultStyleStrategy);
    }
    return this._strategy;
  }
  /**
   * Creates an instance of ElementStyles.
   * @param styles - The styles that will be associated with elements.
   */
  constructor(styles6) {
    this.styles = styles6;
    this.targets = /* @__PURE__ */ new WeakSet();
    this._strategy = null;
  }
  /** @internal */
  addStylesTo(target) {
    this.strategy.addStylesTo(target);
    this.targets.add(target);
  }
  /** @internal */
  removeStylesFrom(target) {
    this.strategy.removeStylesFrom(target);
    this.targets.delete(target);
  }
  /** @internal */
  isAttachedTo(target) {
    return this.targets.has(target);
  }
  /**
   * Sets the strategy that handles adding/removing these styles for an element.
   * @param strategy - The strategy to use.
   */
  withStrategy(Strategy) {
    this._strategy = new Strategy(reduceStyles(this.styles));
    return this;
  }
  /**
   * Sets the default strategy type to use when creating style strategies.
   * @param Strategy - The strategy type to construct.
   */
  static setDefaultStrategy(Strategy) {
    DefaultStyleStrategy = Strategy;
  }
  /**
   * Normalizes a set of composable style options.
   * @param styles - The style options to normalize.
   * @returns A singular ElementStyles instance or undefined.
   */
  static normalize(styles6) {
    return styles6 === void 0 ? void 0 : Array.isArray(styles6) ? new _ElementStyles(styles6) : styles6 instanceof _ElementStyles ? styles6 : new _ElementStyles([styles6]);
  }
};
ElementStyles.supportsAdoptedStyleSheets = Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype;
function createAdoptedSheetsStrategy() {
  const cache = /* @__PURE__ */ new Map();
  return class FallbackAdoptedSheetsStrategy {
    constructor(styles6) {
      this.sheets = styles6.map((x) => {
        if (x instanceof CSSStyleSheet) {
          return x;
        }
        let sheet = cache.get(x);
        if (sheet === void 0) {
          sheet = new CSSStyleSheet();
          sheet.replaceSync(x);
          cache.set(x, sheet);
        }
        return sheet;
      });
    }
    addStylesTo(target) {
      const t = target;
      t.adoptedStyleSheets = [...t.adoptedStyleSheets, ...this.sheets];
    }
    removeStylesFrom(target) {
      const t = target;
      t.adoptedStyleSheets = t.adoptedStyleSheets.filter((x) => this.sheets.indexOf(x) === -1);
    }
  };
}
var fallbackStyleId = 0;
function createStyleElementStrategy() {
  return class FallbackStyleElementStrategy {
    constructor(styles6) {
      this.styles = styles6;
      this.styleClass = `fast-${++fallbackStyleId}`;
    }
    addStylesTo(target) {
      const t = target === document ? document.body : target;
      for (let i = 0; i < this.styles.length; i++) {
        const element = document.createElement("style");
        element.innerHTML = this.styles[i];
        element.className = this.styleClass;
        t.append(element);
      }
    }
    removeStylesFrom(target) {
      const t = target === document ? document.body : target;
      const styles6 = t.querySelectorAll(`.${this.styleClass}`);
      for (let i = 0, ii = styles6.length; i < ii; ++i) {
        t.removeChild(styles6[i]);
      }
    }
  };
}

// node_modules/@microsoft/fast-element/dist/esm/components/fast-element-registry.js
var globalRegisteredTypes = {};
var registeredTypesByRegistry = /* @__PURE__ */ new WeakMap();
var typeRegistry = createTypeRegistry();
var definitionInstances = /* @__PURE__ */ new WeakMap();
var instanceRefs = /* @__PURE__ */ new WeakMap();
var fastElementRegistry = Object.freeze({
  register(definition5) {
    if (!typeRegistry.register(definition5)) {
      return false;
    }
    const registeredTypes = getRegisteredTypes(definition5.registry);
    if (!Object.prototype.hasOwnProperty.call(registeredTypes, definition5.name)) {
      Observable.defineProperty(registeredTypes, definition5.name);
    }
    registeredTypes[definition5.name] = definition5.type;
    return true;
  },
  getByType: typeRegistry.getByType,
  getForInstance: typeRegistry.getForInstance,
  whenRegistered
});
function getRegisteredTypes(registry3 = customElements) {
  if (registry3 === customElements) {
    return globalRegisteredTypes;
  }
  let registeredTypes = registeredTypesByRegistry.get(registry3);
  if (!registeredTypes) {
    registeredTypes = {};
    registeredTypesByRegistry.set(registry3, registeredTypes);
  }
  return registeredTypes;
}
function getDefinitionForType(type) {
  return type === void 0 ? void 0 : fastElementRegistry.getByType(type);
}
function whenRegistered(name, registry3 = customElements) {
  const registeredTypes = getRegisteredTypes(registry3);
  if (!Object.prototype.hasOwnProperty.call(registeredTypes, name)) {
    Observable.defineProperty(registeredTypes, name);
  }
  const definition5 = getDefinitionForType(registeredTypes[name]);
  if (definition5 !== void 0) {
    return Promise.resolve(definition5);
  }
  return new Promise((resolve) => {
    const notifier = Observable.getNotifier(registeredTypes);
    const subscriber = {
      handleChange: () => {
        const definition6 = getDefinitionForType(registeredTypes[name]);
        if (definition6 === void 0) {
          return;
        }
        notifier.unsubscribe(subscriber, name);
        resolve(definition6);
      }
    };
    notifier.subscribe(subscriber, name);
  });
}
function trackFASTElementInstance(definition5, instance) {
  if (instanceRefs.has(instance)) {
    return false;
  }
  let instances = definitionInstances.get(definition5);
  const isFirstInstance = instances === void 0;
  if (instances === void 0) {
    instances = /* @__PURE__ */ new Set();
    definitionInstances.set(definition5, instances);
  }
  const ref2 = new WeakRef(instance);
  instances.add(ref2);
  instanceRefs.set(instance, ref2);
  return isFirstInstance;
}
function trackedFASTElementInstances(definition5, callback) {
  const instances = definitionInstances.get(definition5);
  if (instances === void 0) {
    return;
  }
  definitionInstances.delete(definition5);
  for (const ref2 of instances) {
    const instance = ref2.deref();
    if (instance !== void 0) {
      callback(instance);
    }
  }
}

// node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js
var defaultShadowOptions = { mode: "open" };
var defaultElementOptions = {};
var fastElementBaseTypes = /* @__PURE__ */ new Set();
var templateResolvers = /* @__PURE__ */ new WeakMap();
var pendingTemplateResolutions = /* @__PURE__ */ new WeakMap();
var templateResolutionErrors = /* @__PURE__ */ new WeakMap();
var extensionRegistries = /* @__PURE__ */ new WeakMap();
var lateAttributeLookups = /* @__PURE__ */ new WeakMap();
function isFASTElementTemplateResolver(value) {
  return isFunction(value);
}
function isPromiseLike(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
}
function finalizeResolvedTemplate(definition5, template5) {
  pendingTemplateResolutions.delete(definition5);
  if (definition5.template === void 0 && template5 !== void 0) {
    definition5.template = template5;
  }
  if (definition5.template !== void 0) {
    templateResolutionErrors.delete(definition5);
    templateResolvers.delete(definition5);
    return definition5.template;
  }
  return void 0;
}
function applyFASTElementExtensions(definition5, registry3 = definition5.registry, extensions) {
  if (!(extensions === null || extensions === void 0 ? void 0 : extensions.length)) {
    return;
  }
  const typedDefinition = definition5;
  let registries = extensionRegistries.get(typedDefinition);
  if (registries === null || registries === void 0 ? void 0 : registries.has(registry3)) {
    return;
  }
  if (registries === void 0) {
    registries = /* @__PURE__ */ new WeakSet();
    extensionRegistries.set(typedDefinition, registries);
  }
  registries.add(registry3);
  for (const extension of extensions) {
    extension(definition5);
  }
}
function getLateAttributeLookup(definition5) {
  var _a2;
  return (_a2 = lateAttributeLookups.get(definition5)) !== null && _a2 !== void 0 ? _a2 : null;
}
function resolveFASTElementTemplate(definition5) {
  if (definition5.template !== void 0) {
    templateResolutionErrors.delete(definition5);
    return definition5.template;
  }
  const pendingResolution = pendingTemplateResolutions.get(definition5);
  if (pendingResolution) {
    return pendingResolution;
  }
  const templateResolver = templateResolvers.get(definition5);
  if (!templateResolver) {
    return void 0;
  }
  templateResolutionErrors.delete(definition5);
  let template5;
  try {
    template5 = templateResolver(definition5);
  } catch (error) {
    templateResolutionErrors.set(definition5, error);
    throw error;
  }
  if (isPromiseLike(template5)) {
    const resolution = Promise.resolve(template5).then((resolvedTemplate) => finalizeResolvedTemplate(definition5, resolvedTemplate)).catch((error) => {
      pendingTemplateResolutions.delete(definition5);
      templateResolutionErrors.set(definition5, error);
      throw error;
    });
    pendingTemplateResolutions.set(definition5, resolution);
    return resolution;
  }
  return finalizeResolvedTemplate(definition5, template5);
}
function setFASTElementTemplateError(definition5, error) {
  const typedDefinition = definition5;
  if (error === void 0) {
    templateResolutionErrors.delete(typedDefinition);
    return;
  }
  templateResolutionErrors.set(typedDefinition, error);
}
var FASTElementDefinition = class _FASTElementDefinition {
  /**
   * Indicates if this element has been defined in at least one registry.
   */
  get isDefined() {
    return this.platformDefined;
  }
  constructor(type, nameOrConfig = type.definition) {
    var _a2;
    this.platformDefined = false;
    if (isString(nameOrConfig)) {
      nameOrConfig = { name: nameOrConfig };
    }
    this.type = type;
    this.name = nameOrConfig.name;
    this.registry = (_a2 = nameOrConfig.registry) !== null && _a2 !== void 0 ? _a2 : customElements;
    if (isFASTElementTemplateResolver(nameOrConfig.template)) {
      templateResolvers.set(this, nameOrConfig.template);
    } else {
      this.template = nameOrConfig.template;
    }
    const proto = type.prototype;
    const attributes = AttributeDefinition.collect(type, nameOrConfig.attributes);
    const observedAttributes = new Array(attributes.length);
    const propertyLookup = {};
    const attributeLookup = {};
    for (let i = 0, ii = attributes.length; i < ii; ++i) {
      const current = attributes[i];
      observedAttributes[i] = current.attribute;
      propertyLookup[current.name] = current;
      attributeLookup[current.attribute] = current;
      Observable.defineProperty(proto, current);
    }
    Reflect.defineProperty(type, "observedAttributes", {
      value: observedAttributes,
      enumerable: true
    });
    this.attributes = attributes;
    this.propertyLookup = propertyLookup;
    this.attributeLookup = attributeLookup;
    this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
    this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
    this.styles = ElementStyles.normalize(nameOrConfig.styles);
    this.schema = nameOrConfig.schema;
    fastElementRegistry.register(this);
  }
  /**
   * Defines a custom element based on this definition.
   * @param registry - The element registry to define the element in.
   * @param extensions - An optional array of extension callbacks to invoke
   * with this definition before platform registration.
   * @remarks
   * This operation is idempotent per registry.
   */
  define(registry3 = this.registry, extensions) {
    const type = this.type;
    if (!registry3.get(this.name)) {
      applyFASTElementExtensions(this, registry3, extensions);
      if (this.template === void 0 && templateResolvers.has(this)) {
        void Promise.resolve().then(() => resolveFASTElementTemplate(this)).then((template5) => {
          if (template5 !== void 0 && !registry3.get(this.name)) {
            this.platformDefined = true;
            registry3.define(this.name, type, this.elementOptions);
          }
        }).catch((error) => {
          setFASTElementTemplateError(this, error);
          Observable.notify(this, "template");
        });
        return this;
      }
      this.platformDefined = true;
      registry3.define(this.name, type, this.elementOptions);
    }
    return this;
  }
  /**
   * Creates an instance of FASTElementDefinition.
   * @param type - The type this definition is being created for.
   * @param nameOrDef - The name of the element to define or a config object
   * that describes the element to define.
   */
  static compose(type, nameOrDef) {
    const definition5 = fastElementBaseTypes.has(type) || fastElementRegistry.getByType(type) ? new _FASTElementDefinition(class extends type {
    }, nameOrDef) : new _FASTElementDefinition(type, nameOrDef);
    return Promise.resolve(definition5);
  }
  /**
   * Registers a FASTElement base type.
   * @param type - The type to register as a base type.
   * @internal
   */
  static registerBaseType(type) {
    fastElementBaseTypes.add(type);
  }
};
FASTElementDefinition.getByType = fastElementRegistry.getByType;
FASTElementDefinition.getForInstance = fastElementRegistry.getForInstance;
Observable.defineProperty(FASTElementDefinition.prototype, "template");

// node_modules/@microsoft/fast-element/dist/esm/components/element-controller.js
var defaultEventOptions = {
  bubbles: true,
  composed: true,
  cancelable: true
};
var isConnectedPropertyName = "isConnected";
var shadowRoots = /* @__PURE__ */ new WeakMap();
var lateAttributeObserver = /* @__PURE__ */ Symbol("fast-late-attribute-observer");
function getShadowRoot(element) {
  var _a2, _b;
  return (_b = (_a2 = element.shadowRoot) !== null && _a2 !== void 0 ? _a2 : shadowRoots.get(element)) !== null && _b !== void 0 ? _b : null;
}
var elementControllerStrategy;
var Stages;
(function(Stages2) {
  Stages2[Stages2["connecting"] = 0] = "connecting";
  Stages2[Stages2["connected"] = 1] = "connected";
  Stages2[Stages2["disconnecting"] = 2] = "disconnecting";
  Stages2[Stages2["disconnected"] = 3] = "disconnected";
})(Stages || (Stages = {}));
var ElementController = class _ElementController {
  /**
   * Indicates whether or not the custom element has been
   * connected to the document.
   */
  get isConnected() {
    Observable.track(this, isConnectedPropertyName);
    return this.stage === Stages.connected;
  }
  /**
   * The context the expression is evaluated against.
   */
  get context() {
    var _a2;
    var _b;
    return (_b = (_a2 = this.view) === null || _a2 === void 0 ? void 0 : _a2.context) !== null && _b !== void 0 ? _b : ExecutionContext.default;
  }
  /**
   * Indicates whether the controller is bound.
   */
  get isBound() {
    var _a2;
    var _b;
    return (_b = (_a2 = this.view) === null || _a2 === void 0 ? void 0 : _a2.isBound) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Indicates how the source's lifetime relates to the controller's lifetime.
   */
  get sourceLifetime() {
    var _a2;
    return (_a2 = this.view) === null || _a2 === void 0 ? void 0 : _a2.sourceLifetime;
  }
  /**
   * Gets/sets the template used to render the component.
   * @remarks
   * This value can only be accurately read after connect but can be set at any time.
   */
  get template() {
    var _a2;
    if (this._template === null) {
      const definition5 = this.definition;
      if (this.source.resolveTemplate) {
        this._template = this.source.resolveTemplate();
      } else if (definition5.template) {
        this._template = (_a2 = definition5.template) !== null && _a2 !== void 0 ? _a2 : null;
      }
    }
    return this._template;
  }
  set template(value) {
    if (this._template === value) {
      return;
    }
    this._template = value;
    if (!this.needsInitialization) {
      this.renderTemplate(value);
    }
  }
  /**
   * The shadow root options for the component.
   */
  get shadowOptions() {
    return this._shadowRootOptions;
  }
  set shadowOptions(value) {
    if (this._shadowRootOptions === void 0 && value !== void 0) {
      this._shadowRootOptions = value;
      let shadowRoot = this.source.shadowRoot;
      if (shadowRoot) {
        this.hasExistingShadowRoot = true;
      } else {
        shadowRoot = this.source.attachShadow(value);
        if (value.mode === "closed") {
          shadowRoots.set(this.source, shadowRoot);
        }
      }
    }
  }
  /**
   * The main set of styles used for the component, independent
   * of any dynamically added styles.
   */
  get mainStyles() {
    var _a2;
    if (this._mainStyles === null) {
      const definition5 = this.definition;
      if (this.source.resolveStyles) {
        this._mainStyles = this.source.resolveStyles();
      } else if (definition5.styles) {
        this._mainStyles = (_a2 = definition5.styles) !== null && _a2 !== void 0 ? _a2 : null;
      }
    }
    return this._mainStyles;
  }
  set mainStyles(value) {
    if (this._mainStyles === value) {
      return;
    }
    if (this._mainStyles !== null) {
      this.removeStyles(this._mainStyles);
    }
    this._mainStyles = value;
    if (!this.needsInitialization) {
      this.addStyles(value);
    }
  }
  /**
   * Creates a Controller to control the specified element.
   * @param element - The element to be controlled by this controller.
   * @param definition - The element definition metadata that instructs this
   * controller in how to handle rendering and other platform integrations.
   * @internal
   */
  constructor(element, definition5) {
    this.boundObservables = null;
    this.needsInitialization = true;
    this.hasExistingShadowRoot = false;
    this.isPrerendered = new Promise((resolve) => {
      this._resolvePrerendered = resolve;
    });
    this.isHydrated = new Promise((resolve) => {
      this._resolveHydrated = resolve;
    });
    this._template = null;
    this.stage = Stages.disconnected;
    this.guardBehaviorConnection = false;
    this.behaviors = null;
    this.behaviorsConnected = false;
    this._mainStyles = null;
    this.$fastController = this;
    this.view = null;
    this._notifier = new PropertyChangeNotifier(element);
    this.source = element;
    this.definition = definition5;
    this.shadowOptions = definition5.shadowOptions;
    const prototype = Reflect.getPrototypeOf(element);
    const accessors = prototype === null ? [] : Observable.getAccessors(prototype);
    if (accessors.length > 0) {
      const boundObservables = this.boundObservables = /* @__PURE__ */ Object.create(null);
      for (let i = 0, ii = accessors.length; i < ii; ++i) {
        const propertyName = accessors[i].name;
        const value = element[propertyName];
        if (value !== void 0) {
          delete element[propertyName];
          boundObservables[propertyName] = value;
        }
      }
      if (Object.keys(boundObservables).length === 0) {
        this.boundObservables = null;
      }
    }
    this.captureBoundObservables();
  }
  /**
   * The subject that subscribers will receive notifications for.
   */
  get subject() {
    return this._notifier.subject;
  }
  /**
   * Notifies all subscribers of a property change.
   * @param args - The property name that changed.
   */
  notify(args) {
    this._notifier.notify(args);
  }
  /**
   * Subscribes to notification of changes in the element's state.
   * @param subscriber - The object that is subscribing for change notification.
   * @param propertyToWatch - The name of the property to watch for changes.
   */
  subscribe(subscriber, propertyToWatch) {
    this._notifier.subscribe(subscriber, propertyToWatch);
  }
  /**
   * Unsubscribes from notification of changes in the element's state.
   * @param subscriber - The object that is unsubscribing from change notification.
   * @param propertyToUnwatch - The name of the property to unsubscribe from.
   */
  unsubscribe(subscriber, propertyToUnwatch) {
    this._notifier.unsubscribe(subscriber, propertyToUnwatch);
  }
  /**
   * Registers an unbind handler with the controller.
   * @param behavior - An object to call when the controller unbinds.
   */
  onUnbind(behavior) {
    var _a2;
    (_a2 = this.view) === null || _a2 === void 0 ? void 0 : _a2.onUnbind(behavior);
  }
  /**
   * Adds the behavior to the component.
   * @param behavior - The behavior to add.
   */
  addBehavior(behavior) {
    var _a2, _b;
    const targetBehaviors = (_a2 = this.behaviors) !== null && _a2 !== void 0 ? _a2 : this.behaviors = /* @__PURE__ */ new Map();
    const count = (_b = targetBehaviors.get(behavior)) !== null && _b !== void 0 ? _b : 0;
    if (count === 0) {
      targetBehaviors.set(behavior, 1);
      behavior.addedCallback && behavior.addedCallback(this);
      if (behavior.connectedCallback && !this.guardBehaviorConnection && (this.stage === Stages.connected || this.stage === Stages.connecting)) {
        behavior.connectedCallback(this);
      }
    } else {
      targetBehaviors.set(behavior, count + 1);
    }
  }
  /**
   * Removes the behavior from the component.
   * @param behavior - The behavior to remove.
   * @param force - Forces removal even if this behavior was added more than once.
   */
  removeBehavior(behavior, force = false) {
    const targetBehaviors = this.behaviors;
    if (targetBehaviors === null) {
      return;
    }
    const count = targetBehaviors.get(behavior);
    if (count === void 0) {
      return;
    }
    if (count === 1 || force) {
      targetBehaviors.delete(behavior);
      if (behavior.disconnectedCallback && this.stage !== Stages.disconnected) {
        behavior.disconnectedCallback(this);
      }
      behavior.removedCallback && behavior.removedCallback(this);
    } else {
      targetBehaviors.set(behavior, count - 1);
    }
  }
  /**
   * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
   * @param styles - The styles to add.
   */
  addStyles(styles6) {
    var _a2;
    if (!styles6) {
      return;
    }
    const source = this.source;
    if (styles6 instanceof HTMLElement) {
      const target = (_a2 = getShadowRoot(source)) !== null && _a2 !== void 0 ? _a2 : this.source;
      target.append(styles6);
    } else if (!styles6.isAttachedTo(source)) {
      styles6.addStylesTo(source);
    }
  }
  /**
   * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
   * @param styles - the styles to remove.
   */
  removeStyles(styles6) {
    var _a2;
    if (!styles6) {
      return;
    }
    const source = this.source;
    if (styles6 instanceof HTMLElement) {
      const target = (_a2 = getShadowRoot(source)) !== null && _a2 !== void 0 ? _a2 : source;
      target.removeChild(styles6);
    } else if (styles6.isAttachedTo(source)) {
      styles6.removeStylesFrom(source);
    }
  }
  /**
   * Runs connected lifecycle behavior on the associated element.
   */
  connect() {
    if (this.stage !== Stages.disconnected) {
      return;
    }
    this.stage = Stages.connecting;
    this.captureBoundObservables();
    this.syncLateAttributes();
    this.observeLateAttributes();
    this.bindObservables();
    this.connectBehaviors();
    if (this.needsInitialization) {
      this.renderTemplate(this.template);
      this.addStyles(this.mainStyles);
      this.needsInitialization = false;
    } else if (this.view !== null) {
      this.view.bind(this.source);
    }
    this.stage = Stages.connected;
    Observable.notify(this, isConnectedPropertyName);
  }
  /**
   * Binds any observables that were set before upgrade.
   */
  bindObservables() {
    if (this.boundObservables !== null) {
      const element = this.source;
      const boundObservables = this.boundObservables;
      const propertyNames = Object.keys(boundObservables);
      for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
        const propertyName = propertyNames[i];
        element[propertyName] = boundObservables[propertyName];
      }
      this.boundObservables = null;
    }
  }
  /**
   * Captures public own-properties that shadow observable accessors on the
   * prototype so they can be rebound through the accessor before rendering.
   */
  captureBoundObservables() {
    const element = this.source;
    const propertyNames = Object.getOwnPropertyNames(element);
    const hasPrototypeAccessor = (propertyName) => {
      let currentTarget = Reflect.getPrototypeOf(element);
      while (currentTarget !== null) {
        const descriptor = Reflect.getOwnPropertyDescriptor(currentTarget, propertyName);
        if ((descriptor === null || descriptor === void 0 ? void 0 : descriptor.get) || (descriptor === null || descriptor === void 0 ? void 0 : descriptor.set)) {
          return true;
        }
        currentTarget = Reflect.getPrototypeOf(currentTarget);
      }
      return false;
    };
    let boundObservables = this.boundObservables;
    for (let i = 0, ii = propertyNames.length; i < ii; ++i) {
      const ownPropertyName = propertyNames[i];
      const propertyName = ownPropertyName;
      if (!hasPrototypeAccessor(propertyName)) {
        continue;
      }
      const value = element[propertyName];
      if (value === void 0) {
        delete element[propertyName];
        continue;
      }
      delete element[propertyName];
      (boundObservables !== null && boundObservables !== void 0 ? boundObservables : boundObservables = this.boundObservables = /* @__PURE__ */ Object.create(null))[propertyName] = value;
    }
  }
  /**
   * Synchronizes late-defined attribute-map attributes from the live DOM to the
   * associated property values before the initial render occurs.
   */
  syncLateAttributes() {
    const lateAttributes = getLateAttributeLookup(this.definition);
    if (lateAttributes === null) {
      return;
    }
    for (const attributeName of Object.keys(lateAttributes)) {
      if (!this.source.hasAttribute(attributeName)) {
        continue;
      }
      this.onAttributeChangedCallback(attributeName, null, this.source.getAttribute(attributeName));
    }
  }
  /**
   * Observes late-defined attribute-map attributes that the platform does not
   * surface through attributeChangedCallback because they were added after
   * customElements.define() completed.
   */
  observeLateAttributes() {
    const lateAttributes = getLateAttributeLookup(this.definition);
    if (lateAttributes === null) {
      return;
    }
    const element = this.source;
    if (element[lateAttributeObserver] !== void 0) {
      return;
    }
    element[lateAttributeObserver] = new MutationObserver((records) => {
      const controller = element.$fastController;
      const lateAttributes2 = getLateAttributeLookup(controller.definition);
      if (lateAttributes2 === null) {
        return;
      }
      for (let i = 0, ii = records.length; i < ii; ++i) {
        const attributeName = records[i].attributeName;
        if (attributeName === null || lateAttributes2[attributeName] === void 0) {
          continue;
        }
        controller.onAttributeChangedCallback(attributeName, null, element.getAttribute(attributeName));
      }
    });
    element[lateAttributeObserver].observe(element, {
      attributes: true,
      attributeFilter: Object.keys(lateAttributes)
    });
  }
  /**
   * Connects any existing behaviors on the associated element.
   */
  connectBehaviors() {
    if (this.behaviorsConnected === false) {
      const behaviors = this.behaviors;
      if (behaviors !== null) {
        this.guardBehaviorConnection = true;
        for (const key of behaviors.keys()) {
          key.connectedCallback && key.connectedCallback(this);
        }
        this.guardBehaviorConnection = false;
      }
      this.behaviorsConnected = true;
    }
  }
  /**
   * Disconnects any behaviors on the associated element.
   */
  disconnectBehaviors() {
    if (this.behaviorsConnected === true) {
      const behaviors = this.behaviors;
      if (behaviors !== null) {
        for (const key of behaviors.keys()) {
          key.disconnectedCallback && key.disconnectedCallback(this);
        }
      }
      this.behaviorsConnected = false;
    }
  }
  /**
   * Runs disconnected lifecycle behavior on the associated element.
   */
  disconnect() {
    if (this.stage !== Stages.connected) {
      return;
    }
    this.stage = Stages.disconnecting;
    Observable.notify(this, isConnectedPropertyName);
    if (this.view !== null) {
      this.view.unbind();
    }
    this.disconnectBehaviors();
    this.stage = Stages.disconnected;
  }
  /**
   * Runs the attribute changed callback for the associated element.
   * @param name - The name of the attribute that changed.
   * @param oldValue - The previous value of the attribute.
   * @param newValue - The new value of the attribute.
   */
  onAttributeChangedCallback(name, oldValue, newValue) {
    const attrDef = this.definition.attributeLookup[name];
    if (attrDef !== void 0) {
      attrDef.onAttributeChangedCallback(this.source, newValue);
    }
  }
  /**
   * Emits a custom HTML event.
   * @param type - The type name of the event.
   * @param detail - The event detail object to send with the event.
   * @param options - The event options. By default bubbles and composed.
   * @remarks
   * Only emits events if connected.
   */
  emit(type, detail, options) {
    if (this.stage === Stages.connected) {
      return this.source.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
    }
    return false;
  }
  /**
   * Renders the provided template to the element.
   *
   * @param template - The template to render.
   * @remarks
   * If `null` is provided, any existing view will be removed.
   */
  renderTemplate(template5) {
    var _a2;
    const element = this.source;
    const host = (_a2 = getShadowRoot(element)) !== null && _a2 !== void 0 ? _a2 : element;
    if (this.view !== null) {
      this.view.dispose();
      this.view = null;
    } else if (!this.needsInitialization || this.hasExistingShadowRoot) {
      if (!this.hasExistingShadowRoot || !this.needsInitialization) {
        for (let child = host.firstChild; child !== null; child = host.firstChild) {
          host.removeChild(child);
        }
      }
    }
    if (template5) {
      const hasPrerenderedContent = this.hasExistingShadowRoot && this.needsInitialization;
      let didHydrate = false;
      if (hasPrerenderedContent && _ElementController.hydrationHook) {
        didHydrate = _ElementController.hydrationHook(this, template5, element, host);
      }
      if (!didHydrate) {
        this.renderClientSide(template5, element, host);
      }
      this._resolvePrerendered(hasPrerenderedContent);
      this._resolveHydrated(didHydrate);
    } else if (this.needsInitialization) {
      this._resolvePrerendered(false);
      this._resolveHydrated(false);
    }
  }
  /**
   * Standard client-side render: clears any stale content, clones the
   * compiled fragment, binds, and appends to the host.
   */
  renderClientSide(template5, element, host) {
    if (this.hasExistingShadowRoot) {
      for (let child = host.firstChild; child !== null; child = host.firstChild) {
        host.removeChild(child);
      }
      this.hasExistingShadowRoot = false;
    }
    this.view = template5.render(element, host, element);
    this.view.sourceLifetime = SourceLifetime.coupled;
  }
  /**
   * Locates or creates a controller for the specified element.
   * @param element - The element to return the controller for.
   * @param override - Reset the controller even if one has been defined.
   * @remarks
   * The specified element must have a {@link FASTElementDefinition}
   * registered either through the use of the {@link customElement}
   * decorator or a call to `FASTElement.define`.
   */
  static forCustomElement(element, override = false) {
    const controller = element.$fastController;
    if (controller !== void 0 && !override) {
      return controller;
    }
    const definition5 = FASTElementDefinition.getForInstance(element);
    if (definition5 === void 0) {
      throw FAST.error(Message.missingElementDefinition);
    }
    if (definition5.template === void 0 && trackFASTElementInstance(definition5, element)) {
      const notifier = Observable.getNotifier(definition5);
      const subscriber = {
        handleChange: () => {
          notifier.unsubscribe(subscriber, "template");
          trackedFASTElementInstances(definition5, (tracked) => {
            const trackedElement = tracked;
            _ElementController.forCustomElement(trackedElement, true);
            if (trackedElement.isConnected) {
              trackedElement.$fastController.connect();
            }
          });
        }
      };
      notifier.subscribe(subscriber, "template");
    }
    return element.$fastController = new elementControllerStrategy(element, definition5);
  }
  /**
   * Sets the strategy that ElementController.forCustomElement uses to construct
   * ElementController instances for an element.
   * @param strategy - The strategy to use.
   */
  static setStrategy(strategy) {
    elementControllerStrategy = strategy;
  }
  /**
   * Installs the hydration hook. Called by enableHydration().
   * @internal
   */
  static installHydrationHook(hook) {
    _ElementController.hydrationHook = hook;
  }
};
ElementController.hydrationHook = null;
makeSerializationNoop(ElementController);
ElementController.setStrategy(ElementController);
function normalizeStyleTarget(target) {
  var _a2;
  if ("adoptedStyleSheets" in target) {
    return target;
  } else {
    return (_a2 = getShadowRoot(target)) !== null && _a2 !== void 0 ? _a2 : target.getRootNode();
  }
}
var AdoptedStyleSheetsStrategy = class _AdoptedStyleSheetsStrategy {
  constructor(styles6) {
    const styleSheetCache = _AdoptedStyleSheetsStrategy.styleSheetCache;
    this.sheets = styles6.map((x) => {
      if (x instanceof CSSStyleSheet) {
        return x;
      }
      let sheet = styleSheetCache.get(x);
      if (sheet === void 0) {
        sheet = new CSSStyleSheet();
        sheet.replaceSync(x);
        styleSheetCache.set(x, sheet);
      }
      return sheet;
    });
  }
  addStylesTo(target) {
    addAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
  }
  removeStylesFrom(target) {
    removeAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
  }
};
AdoptedStyleSheetsStrategy.styleSheetCache = /* @__PURE__ */ new Map();
var id = 0;
var nextStyleId = () => `fast-${++id}`;
function usableStyleTarget(target) {
  return target === document ? document.body : target;
}
var StyleElementStrategy = class {
  constructor(styles6) {
    this.styles = styles6;
    this.styleClass = nextStyleId();
  }
  addStylesTo(target) {
    target = usableStyleTarget(normalizeStyleTarget(target));
    const styles6 = this.styles;
    const styleClass = this.styleClass;
    for (let i = 0; i < styles6.length; i++) {
      const element = document.createElement("style");
      element.innerHTML = styles6[i];
      element.className = styleClass;
      target.append(element);
    }
  }
  removeStylesFrom(target) {
    target = usableStyleTarget(normalizeStyleTarget(target));
    const styles6 = target.querySelectorAll(`.${this.styleClass}`);
    for (let i = 0, ii = styles6.length; i < ii; ++i) {
      target.removeChild(styles6[i]);
    }
  }
};
var addAdoptedStyleSheets = (target, sheets) => {
  target.adoptedStyleSheets = [...target.adoptedStyleSheets, ...sheets];
};
var removeAdoptedStyleSheets = (target, sheets) => {
  target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x) => sheets.indexOf(x) === -1);
};
if (ElementStyles.supportsAdoptedStyleSheets) {
  try {
    document.adoptedStyleSheets.push();
    document.adoptedStyleSheets.splice();
    addAdoptedStyleSheets = (target, sheets) => {
      target.adoptedStyleSheets.push(...sheets);
    };
    removeAdoptedStyleSheets = (target, sheets) => {
      for (const sheet of sheets) {
        const index = target.adoptedStyleSheets.indexOf(sheet);
        if (index !== -1) {
          target.adoptedStyleSheets.splice(index, 1);
        }
      }
    };
  } catch (_e) {
  }
  ElementStyles.setDefaultStrategy(AdoptedStyleSheetsStrategy);
} else {
  ElementStyles.setDefaultStrategy(StyleElementStrategy);
}

// node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js
function createFASTElement(BaseType) {
  const type = class extends BaseType {
    constructor() {
      super();
      ElementController.forCustomElement(this);
    }
    $emit(type2, detail, options) {
      return this.$fastController.emit(type2, detail, options);
    }
    connectedCallback() {
      this.$fastController.connect();
    }
    disconnectedCallback() {
      this.$fastController.disconnect();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
    }
  };
  FASTElementDefinition.registerBaseType(type);
  return type;
}
function isPromiseLike2(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
}
function define(type, nameOrDef, extensions) {
  if (Array.isArray(nameOrDef)) {
    extensions = nameOrDef;
    nameOrDef = void 0;
  }
  const composePromise = isFunction(type) ? FASTElementDefinition.compose(type, nameOrDef) : FASTElementDefinition.compose(this, type);
  return composePromise.then((def) => {
    applyFASTElementExtensions(def, def.registry, extensions);
    const template5 = resolveFASTElementTemplate(def);
    if (isPromiseLike2(template5)) {
      return template5.then(() => def.define().type);
    }
    return def.define().type;
  });
}
function from(BaseType) {
  return createFASTElement(BaseType);
}
var FASTElement = Object.assign(createFASTElement(HTMLElement), {
  /**
   * Creates a new FASTElement base class inherited from the
   * provided base type.
   * @param BaseType - The base element type to inherit from.
   */
  from,
  /**
   * Defines a platform custom element based on the provided type and definition.
   * @param type - The custom element type to define.
   * @param nameOrDef - The name of the element to define or a definition object
   * that describes the element to define.
   */
  define
});

// node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js
var registry = createTypeRegistry();
var CSSDirective = Object.freeze({
  /**
   * Gets the directive definition associated with the instance.
   * @param instance - The directive instance to retrieve the definition for.
   */
  getForInstance: registry.getForInstance,
  /**
   * Gets the directive definition associated with the specified type.
   * @param type - The directive type to retrieve the definition for.
   */
  getByType: registry.getByType,
  /**
   * Defines a CSSDirective.
   * @param type - The type to define as a directive.
   */
  define(type) {
    registry.register({ type });
    return type;
  }
});

// node_modules/@microsoft/fast-element/dist/esm/styles/css.js
function collectStyles(strings, values) {
  const styles6 = [];
  let cssString = "";
  for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
    cssString += strings[i];
    let value = values[i];
    if (CSSDirective.getForInstance(value) !== void 0) {
      value = value.createCSS();
    }
    if (value instanceof ElementStyles || value instanceof CSSStyleSheet) {
      if (cssString.trim() !== "") {
        styles6.push(cssString);
        cssString = "";
      }
      styles6.push(value);
    } else {
      cssString += value;
    }
  }
  cssString += strings[strings.length - 1];
  if (cssString.trim() !== "") {
    styles6.push(cssString);
  }
  return styles6;
}
var css = ((strings, ...values) => {
  return new ElementStyles(collectStyles(strings, values));
});
var CSSPartial = class {
  constructor(styles6) {
    this.value = styles6.length === 0 ? "" : styles6.length === 1 ? styles6[0] : new ElementStyles(styles6);
  }
  createCSS() {
    return this.value;
  }
};
CSSDirective.define(CSSPartial);
css.partial = (strings, ...values) => {
  return new CSSPartial(collectStyles(strings, values));
};

// node_modules/@microsoft/fast-element/dist/esm/templating/markup.js
var marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
var interpolationStart = `${marker}{`;
var interpolationEnd = `}${marker}`;
var interpolationEndLength = interpolationEnd.length;
var id2 = 0;
var nextId = () => `${marker}-${++id2}`;
var Markup = Object.freeze({
  /**
   * Creates a placeholder string suitable for marking out a location *within*
   * an attribute value or HTML content.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by binding directives.
   */
  interpolation: (id3) => `${interpolationStart}${id3}${interpolationEnd}`,
  /**
   * Creates a placeholder that manifests itself as an attribute on an
   * element.
   * @param attributeName - The name of the custom attribute.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
   */
  attribute: (id3) => `${nextId()}="${interpolationStart}${id3}${interpolationEnd}"`,
  /**
   * Creates a placeholder that manifests itself as a marker within the DOM structure.
   * @param index - The directive index to create the placeholder for.
   * @remarks
   * Used internally by structural directives such as `repeat`.
   */
  comment: (id3) => `<!--${interpolationStart}${id3}${interpolationEnd}-->`
});
var Parser = Object.freeze({
  /**
   * Parses text content or HTML attribute content, separating out the static strings
   * from the directives.
   * @param value - The content or attribute string to parse.
   * @param factories - A list of directives to search for in the string.
   * @returns A heterogeneous array of static strings interspersed with
   * directives or null if no directives are found in the string.
   */
  parse(value, factories) {
    const parts = value.split(interpolationStart);
    if (parts.length === 1) {
      return null;
    }
    const result = [];
    for (let i = 0, ii = parts.length; i < ii; ++i) {
      const current = parts[i];
      const index = current.indexOf(interpolationEnd);
      let literal;
      if (index === -1) {
        literal = current;
      } else {
        const factoryId = current.substring(0, index);
        result.push(factories[factoryId]);
        literal = current.substring(index + interpolationEndLength);
      }
      if (literal !== "") {
        result.push(literal);
      }
    }
    return result;
  }
});

// node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js
var registry2 = createTypeRegistry();
var HTMLDirective = Object.freeze({
  /**
   * Gets the directive definition associated with the instance.
   * @param instance - The directive instance to retrieve the definition for.
   */
  getForInstance: registry2.getForInstance,
  /**
   * Gets the directive definition associated with the specified type.
   * @param type - The directive type to retrieve the definition for.
   */
  getByType: registry2.getByType,
  /**
   * Defines an HTMLDirective based on the options.
   * @param type - The type to define as a directive.
   * @param options - Options that specify the directive's application.
   */
  define(type, options) {
    options = options || {};
    options.type = type;
    registry2.register(options);
    return type;
  },
  /**
   * Determines the DOM aspect type for a directive based on attribute name prefix.
   * The prefix convention maps to aspect types as follows:
   *   - No prefix (e.g. "class")  → DOMAspect.attribute
   *   - ":" prefix (e.g. ":value") → DOMAspect.property (":classList" → DOMAspect.tokenList)
   *   - "?" prefix (e.g. "?disabled") → DOMAspect.booleanAttribute
   *   - `@` prefix (e.g. `@click`) → DOMAspect.event
   *   - Falsy or absent value → DOMAspect.content (see remarks)
   * @param directive - The directive to assign the aspect to.
   * @param value - The value to base the aspect determination on.
   * @remarks
   * If a falsy value is provided, then the content aspect will be assigned.
   */
  assignAspect(directive, value) {
    if (!value) {
      directive.aspectType = DOMAspect.content;
      return;
    }
    directive.sourceAspect = value;
    switch (value[0]) {
      case ":":
        directive.targetAspect = value.substring(1);
        directive.aspectType = directive.targetAspect === "classList" ? DOMAspect.tokenList : DOMAspect.property;
        break;
      case "?":
        directive.targetAspect = value.substring(1);
        directive.aspectType = DOMAspect.booleanAttribute;
        break;
      case "@":
        directive.targetAspect = value.substring(1);
        directive.aspectType = DOMAspect.event;
        break;
      default:
        directive.targetAspect = value;
        directive.aspectType = DOMAspect.attribute;
        break;
    }
  }
});
var StatelessAttachedAttributeDirective = class {
  /**
   * Creates an instance of RefDirective.
   * @param options - The options to use in configuring the directive.
   */
  constructor(options) {
    this.options = options;
  }
  /**
   * Creates a placeholder string based on the directive's index within the template.
   * @param index - The index of the directive within the template.
   * @remarks
   * Creates a custom attribute placeholder.
   */
  createHTML(add) {
    return Markup.attribute(add(this));
  }
  /**
   * Creates a behavior.
   * @param targets - The targets available for behaviors to be attached to.
   */
  createBehavior() {
    return this;
  }
};
makeSerializationNoop(StatelessAttachedAttributeDirective);

// node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js
var NodeObservationDirective = class extends StatelessAttachedAttributeDirective {
  /**
   * The unique id of the factory.
   */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
    this._controllerProperty = `${value}-c`;
  }
  /**
   * Bind this behavior to the source.
   * @param source - The source to bind to.
   * @param context - The execution context that the binding is operating within.
   * @param targets - The targets that behaviors in a view can attach to.
   */
  bind(controller) {
    const target = controller.targets[this.targetNodeId];
    target[this._controllerProperty] = controller;
    this.updateTarget(controller.source, this.computeNodes(target));
    this.observe(target);
    controller.onUnbind(this);
  }
  /**
   * Unbinds this behavior from the source.
   * @param source - The source to unbind from.
   * @param context - The execution context that the binding is operating within.
   * @param targets - The targets that behaviors in a view can attach to.
   */
  unbind(controller) {
    const target = controller.targets[this.targetNodeId];
    this.updateTarget(controller.source, emptyArray);
    this.disconnect(target);
    target[this._controllerProperty] = null;
  }
  /**
   * Gets the data source for the target.
   * @param target - The target to get the source for.
   * @returns The source.
   */
  getSource(target) {
    return target[this._controllerProperty].source;
  }
  /**
   * Updates the source property with the computed nodes.
   * @param source - The source object to assign the nodes property to.
   * @param value - The nodes to assign to the source object property.
   */
  updateTarget(source, value) {
    source[this.options.property] = value;
  }
  /**
   * Computes the set of nodes that should be assigned to the source property.
   * @param target - The target to compute the nodes for.
   * @returns The computed nodes.
   * @remarks
   * Applies filters if provided.
   */
  computeNodes(target) {
    let nodes = this.getNodes(target);
    if ("filter" in this.options) {
      nodes = nodes.filter(this.options.filter);
    }
    return nodes;
  }
};

// node_modules/@microsoft/fast-element/dist/esm/hydration/markers.js
var hydrationMarkersBrand = /* @__PURE__ */ Symbol();
var markerStrategies = /* @__PURE__ */ new WeakMap();
function createHydrationMarkers(implementation) {
  const markers = Object.freeze(Object.assign(Object.assign({}, implementation), { [hydrationMarkersBrand]: true }));
  markerStrategies.set(markers, markers);
  return markers;
}
function isComment(node) {
  return node.nodeType === Node.COMMENT_NODE;
}
function parseAttributeBindingCount(node) {
  const attr2 = node.getAttribute("data-fe");
  if (attr2 === null) {
    return null;
  }
  const trimmed = attr2.trim();
  if (!/^\d+$/.test(trimmed)) {
    throw FAST.error(Message.invalidHydrationAttributeMarker, {
      value: attr2
    });
  }
  const count = parseInt(trimmed, 10);
  if (count < 1) {
    throw FAST.error(Message.invalidHydrationAttributeMarker, {
      value: attr2
    });
  }
  return count;
}
var HydrationMarkup = createHydrationMarkers({
  attributeMarkerName: "data-fe",
  contentBindingStartMarker() {
    return "fe:b";
  },
  contentBindingEndMarker() {
    return "fe:/b";
  },
  repeatStartMarker() {
    return "fe:r";
  },
  repeatEndMarker() {
    return "fe:/r";
  },
  elementBoundaryStartMarker() {
    return "fe:e";
  },
  elementBoundaryEndMarker() {
    return "fe:/e";
  },
  parseAttributeBindingCount,
  resolveAttributeBindings(node, factoryPointer, hydrationIndexOffset) {
    const count = parseAttributeBindingCount(node);
    if (count !== null) {
      const factoryIndices = Array.from({ length: count }, (_, index) => factoryPointer + index);
      return {
        factoryIndices,
        nextFactoryPointer: factoryPointer + count,
        cleanup: () => node.removeAttribute("data-fe")
      };
    }
    return null;
  },
  resolveContentBinding(data, factoryPointer, hydrationIndexOffset) {
    if (data === "fe:b") {
      return {
        factoryIndices: [factoryPointer],
        nextFactoryPointer: factoryPointer + 1
      };
    }
    return null;
  },
  isContentBindingStartMarker(data) {
    return data === "fe:b";
  },
  isContentBindingEndMarker(data) {
    return data === "fe:/b";
  },
  isRepeatViewStartMarker(data) {
    return data === "fe:r";
  },
  isRepeatViewEndMarker(data) {
    return data === "fe:/r";
  },
  isElementBoundaryStartMarker(node) {
    return isComment(node) && node.data === "fe:e";
  },
  isElementBoundaryEndMarker(node) {
    return isComment(node) && node.data === "fe:/e";
  }
});
var activeHydrationMarkers = markerStrategies.get(HydrationMarkup);
function getHydrationMarkers() {
  return activeHydrationMarkers;
}

// node_modules/@microsoft/fast-element/dist/esm/components/hydration.js
var Hydratable = /* @__PURE__ */ Symbol.for("fe-hydration");
function isHydratable(value) {
  return value[Hydratable] === Hydratable;
}

// node_modules/@microsoft/fast-element/dist/esm/hydration/messages.js
var unknownHostName = "unknown";
var expectedContentAfterStartMarker = "content following `<!--fe:b-->` content binding marker";
var expectedContentEndMarker = "matching `<!--fe:/b-->` content binding close marker";
var expectedElementBoundaryEndMarker = "matching `<!--fe:/e-->` element boundary close marker";
function formatDefaultMismatchMessage(hostName, detail) {
  const suffix = detail ? `: ${detail}` : "";
  return `Hydration mismatch in <${hostName}>${suffix}. Install hydrationDebugger() from "@microsoft/fast-element/hydration.js" and pass it as enableHydration({ debugger: hydrationDebugger() }) for an "Expected / Received" report including the SSR HTML snippet.`;
}
function formatNoMoreAttributeBindings(factoryCount) {
  return `no more attribute bindings (template defines ${factoryCount})`;
}
function formatNoMoreContentBindings(factoryCount) {
  return `no more content bindings (template defines ${factoryCount})`;
}

// node_modules/@microsoft/fast-element/dist/esm/hydration/diagnostics.js
function formatMinimalMessage(hostName, detail) {
  const host = (hostName !== null && hostName !== void 0 ? hostName : unknownHostName).toLowerCase();
  return formatDefaultMismatchMessage(host, detail);
}
var defaultDiagnostic = {
  formatBindingMismatch(_factory, _firstChild, _lastChild, hostName) {
    return {
      message: formatMinimalMessage(hostName, void 0)
    };
  },
  formatStructuralError(_node, hostName, expectedDescription) {
    return {
      message: formatMinimalMessage(hostName, expectedDescription)
    };
  }
};
var activeDiagnostic = defaultDiagnostic;
function getHydrationDiagnostic() {
  return activeDiagnostic;
}
function getHostName(node) {
  var _a2;
  if (!node) {
    return void 0;
  }
  const root = node.getRootNode();
  return (_a2 = root.host) === null || _a2 === void 0 ? void 0 : _a2.nodeName;
}

// node_modules/@microsoft/fast-element/dist/esm/hydration/target-builder.js
var HydrationTargetElementError = class extends Error {
  constructor(message, factories, node, expected, received) {
    super(message);
    this.factories = factories;
    this.node = node;
    this.expected = expected;
    this.received = received;
  }
};
function isComment2(node) {
  return node.nodeType === 8;
}
function isText(node) {
  return node.nodeType === 3;
}
function getNodeLength(node) {
  return isComment2(node) || isText(node) ? node.data.length : node.childNodes.length;
}
var hydrationNodeMask = 133;
function createRangeForNodes(first, last) {
  const range = document.createRange();
  range.setStart(first, 0);
  range.setEnd(last, getNodeLength(last));
  return range;
}
function createHydrationTraversal(firstNode, lastNode) {
  const range = createRangeForNodes(firstNode, lastNode);
  let walker = range.startContainer === firstNode ? document.createTreeWalker(range.commonAncestorContainer, hydrationNodeMask) : null;
  let hasReachedLastNode = lastNode.contains(firstNode);
  let mutationMode = false;
  if (walker !== null) {
    walker.currentNode = firstNode;
  }
  function move(sibling) {
    if (walker === null || !mutationMode && sibling && walker.currentNode.contains(lastNode)) {
      return null;
    }
    const current = walker.currentNode;
    const candidate = sibling ? walker.nextSibling() : walker.nextNode();
    if (mutationMode || !hasReachedLastNode || lastNode.contains(candidate)) {
      if (candidate === lastNode) {
        hasReachedLastNode = true;
      }
      return candidate;
    }
    walker.currentNode = current;
    return null;
  }
  return [
    move,
    () => {
      if (walker !== null && !mutationMode && (range.startContainer !== firstNode || range.endContainer !== lastNode || range.endOffset !== getNodeLength(lastNode) || !range.intersectsNode(walker.currentNode))) {
        const current = walker.currentNode;
        walker = document.createTreeWalker(walker.root, walker.whatToShow, {
          acceptNode: (node) => range.comparePoint(node, 0) === 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        });
        walker.currentNode = current;
        mutationMode = true;
      }
    }
  ];
}
function throwHydrationError(node, factories, expected) {
  const result = getHydrationDiagnostic().formatStructuralError(node, getHostName(node), expected);
  throw new HydrationTargetElementError(result.message, factories, node, result.expected, result.received);
}
function buildViewBindingTargets(firstNode, lastNode, factories) {
  var _a2;
  const [move, update] = createHydrationTraversal(firstNode, lastNode);
  const targets = {};
  const boundaries = {};
  const markers = getHydrationMarkers();
  const hydrationIndexOffset = getHydrationIndexOffset(factories);
  let factoryPointer = hydrationIndexOffset;
  let node = firstNode;
  while (node !== null) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE: {
        const element = node;
        const resolution = markers.resolveAttributeBindings(element, factoryPointer, hydrationIndexOffset);
        if (resolution !== null) {
          factoryPointer = resolution.nextFactoryPointer;
          for (const factoryIndex of resolution.factoryIndices) {
            const factory = factories[factoryIndex];
            if (!factory) {
              throwHydrationError(node, factories, formatNoMoreAttributeBindings(factories.length));
            }
            targetFactory(factory, node, targets);
          }
          (_a2 = resolution.cleanup) === null || _a2 === void 0 ? void 0 : _a2.call(resolution);
          update();
        }
        break;
      }
      case 8: {
        const data = node.data;
        if (markers.isElementBoundaryStartMarker(node)) {
          node.data = "";
          skipToElementBoundaryEnd(move, factories, node, markers);
        } else {
          const resolution = markers.resolveContentBinding(data, factoryPointer, hydrationIndexOffset);
          if (resolution === null) {
            break;
          }
          factoryPointer = resolution.nextFactoryPointer;
          const factory = factories[resolution.factoryIndices[0]];
          if (!factory) {
            throwHydrationError(node, factories, formatNoMoreContentBindings(factories.length));
          }
          targetContentBinding(node, move, factory, factories, targets, boundaries, markers);
        }
        break;
      }
    }
    node = move();
  }
  return { targets, boundaries };
}
function targetContentBinding(node, move, factory, factories, targets, boundaries, markers) {
  let current = move(true);
  node.data = "";
  if (current === null) {
    throwHydrationError(node, factories, expectedContentAfterStartMarker);
  }
  const first = current;
  let depth = 0;
  while (current !== null) {
    if (isComment2(current)) {
      if (markers.isContentBindingStartMarker(current.data)) {
        depth++;
      } else if (markers.isContentBindingEndMarker(current.data)) {
        if (depth === 0)
          break;
        depth--;
      }
    }
    current = move(true);
  }
  if (current === null) {
    throwHydrationError(node, factories, expectedContentEndMarker);
  }
  current.data = "";
  if (isText(first) && first.nextSibling === current) {
    targetFactory(factory, first, targets);
  } else {
    if (current !== first && current.previousSibling !== null) {
      boundaries[factory.targetNodeId] = {
        first,
        last: current.previousSibling
      };
    }
    targetFactory(factory, current.parentNode.insertBefore(document.createTextNode(""), current), targets);
  }
}
function skipToElementBoundaryEnd(move, factories, startNode, markers) {
  let depth = 0;
  let current = move(true);
  while (current !== null) {
    if (isComment2(current)) {
      if (markers.isElementBoundaryStartMarker(current)) {
        current.data = "";
        depth++;
      } else if (markers.isElementBoundaryEndMarker(current)) {
        current.data = "";
        if (depth-- === 0) {
          return;
        }
      }
    }
    current = move(true);
  }
  throwHydrationError(startNode, factories, expectedElementBoundaryEndMarker);
}
function getHydrationIndexOffset(factories) {
  let offset = 0;
  while (offset < factories.length && factories[offset].targetNodeId === "h") {
    offset++;
  }
  return offset;
}
function targetFactory(factory, node, targets) {
  const id3 = factory.targetNodeId;
  if (id3 === void 0) {
    throw new Error("Factory could not be target to the node");
  }
  targets[id3] = node;
}

// node_modules/@microsoft/fast-element/dist/esm/templating/view.js
function removeNodeSequence(firstNode, lastNode) {
  const parent = firstNode.parentNode;
  let current = firstNode;
  let next2;
  while (current !== lastNode) {
    next2 = current.nextSibling;
    if (!next2) {
      throw new Error(`Unmatched first/last child inside "${lastNode.getRootNode().host.nodeName}".`);
    }
    parent.removeChild(current);
    current = next2;
  }
  parent.removeChild(lastNode);
}
var DefaultExecutionContext = class {
  constructor() {
    this.index = 0;
    this.length = 0;
  }
  /**
   * The current event within an event handler.
   */
  get event() {
    return ExecutionContext.getEvent();
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an even index.
   */
  get isEven() {
    return this.index % 2 === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * has an odd index.
   */
  get isOdd() {
    return this.index % 2 !== 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the first item in the collection.
   */
  get isFirst() {
    return this.index === 0;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is somewhere in the middle of the collection.
   */
  get isInMiddle() {
    return !this.isFirst && !this.isLast;
  }
  /**
   * Indicates whether the current item within a repeat context
   * is the last item in the collection.
   */
  get isLast() {
    return this.index === this.length - 1;
  }
  /**
   * Returns the typed event detail of a custom event.
   */
  eventDetail() {
    return this.event.detail;
  }
  /**
   * Returns the typed event target of the event.
   */
  eventTarget() {
    return this.event.target;
  }
};
var HTMLView = class extends DefaultExecutionContext {
  /**
   * Constructs an instance of HTMLView.
   * @param fragment - The html fragment that contains the nodes for this view.
   * @param behaviors - The behaviors to be applied to this view.
   */
  constructor(fragment, factories, targets) {
    super();
    this.fragment = fragment;
    this.factories = factories;
    this.targets = targets;
    this.behaviors = null;
    this.unbindables = [];
    this.source = null;
    this.isBound = false;
    this.sourceLifetime = SourceLifetime.unknown;
    this._skipAttrUpdates = false;
    this.isPrerendered = Promise.resolve(false);
    this.isHydrated = Promise.resolve(false);
    this.context = this;
    this.firstChild = fragment.firstChild;
    this.lastChild = fragment.lastChild;
  }
  /**
   * Appends the view's DOM nodes to the referenced node.
   * @param node - The parent node to append the view's DOM nodes to.
   */
  appendTo(node) {
    node.appendChild(this.fragment);
  }
  /**
   * Inserts the view's DOM nodes before the referenced node.
   * @param node - The node to insert the view's DOM before.
   */
  insertBefore(node) {
    if (this.fragment.hasChildNodes()) {
      node.parentNode.insertBefore(this.fragment, node);
    } else {
      const end = this.lastChild;
      if (node.previousSibling === end)
        return;
      const parentNode = node.parentNode;
      let current = this.firstChild;
      let next2;
      while (current !== end) {
        next2 = current.nextSibling;
        parentNode.insertBefore(current, node);
        current = next2;
      }
      parentNode.insertBefore(end, node);
    }
  }
  /**
   * Removes the view's DOM nodes.
   * The nodes are not disposed and the view can later be re-inserted.
   */
  remove() {
    const fragment = this.fragment;
    const end = this.lastChild;
    let current = this.firstChild;
    let next2;
    while (current !== end) {
      next2 = current.nextSibling;
      fragment.appendChild(current);
      current = next2;
    }
    fragment.appendChild(end);
  }
  /**
   * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
   * Once a view has been disposed, it cannot be inserted or bound again.
   */
  dispose() {
    removeNodeSequence(this.firstChild, this.lastChild);
    this.unbind();
  }
  onUnbind(behavior) {
    this.unbindables.push(behavior);
  }
  /**
   * Binds a view's behaviors to its binding source.
   *
   * On the first call, this iterates through all compiled factories, calling
   * createBehavior() on each to produce a ViewBehavior instance (e.g., an
   * HTMLBindingDirective), and then immediately binds it. This is where event
   * listeners are registered, expression observers are created, and initial
   * DOM values are set.
   *
   * On subsequent calls with a new source, existing behaviors are re-bound
   * to the new data source, which re-evaluates all binding expressions and
   * updates the DOM accordingly.
   *
   * @param source - The binding source for the view's binding behaviors.
   * @param context - The execution context to run the behaviors within.
   */
  bind(source, context = this) {
    if (this.source === source && this.context === context) {
      return;
    }
    let behaviors = this.behaviors;
    if (behaviors === null) {
      this.source = source;
      this.context = context;
      this.behaviors = behaviors = new Array(this.factories.length);
      const factories = this.factories;
      for (let i = 0, ii = factories.length; i < ii; ++i) {
        const behavior = factories[i].createBehavior();
        behavior.bind(this);
        behaviors[i] = behavior;
      }
    } else {
      if (this.source !== null) {
        this.evaluateUnbindables();
      }
      this.isBound = false;
      this.source = source;
      this.context = context;
      for (let i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].bind(this);
      }
    }
    this.isBound = true;
  }
  /**
   * Unbinds a view's behaviors from its binding source.
   */
  unbind() {
    if (!this.isBound || this.source === null) {
      return;
    }
    this.evaluateUnbindables();
    this.source = null;
    this.context = this;
    this.isBound = false;
  }
  evaluateUnbindables() {
    const unbindables = this.unbindables;
    for (let i = 0, ii = unbindables.length; i < ii; ++i) {
      unbindables[i].unbind(this);
    }
    unbindables.length = 0;
  }
  /**
   * Efficiently disposes of a contiguous range of synthetic view instances.
   * @param views - A contiguous range of views to be disposed.
   */
  static disposeContiguousBatch(views) {
    if (views.length === 0) {
      return;
    }
    removeNodeSequence(views[0].firstChild, views[views.length - 1].lastChild);
    for (let i = 0, ii = views.length; i < ii; ++i) {
      views[i].unbind();
    }
  }
};
makeSerializationNoop(HTMLView);
Observable.defineProperty(HTMLView.prototype, "index");
Observable.defineProperty(HTMLView.prototype, "length");

// node_modules/@microsoft/fast-element/dist/esm/templating/hydration-view.js
var _a;
var HydrationStage = {
  unhydrated: "unhydrated",
  hydrating: "hydrating",
  hydrated: "hydrated"
};
var HydrationBindingError = class extends Error {
  constructor(message, factory, fragment, templateString, expected, received) {
    super(message);
    this.factory = factory;
    this.fragment = fragment;
    this.templateString = templateString;
    this.expected = expected;
    this.received = received;
  }
};
var HydrationView = class extends DefaultExecutionContext {
  get hydrationStage() {
    return this._hydrationStage;
  }
  get targets() {
    return this._targets;
  }
  get bindingViewBoundaries() {
    return this._bindingViewBoundaries;
  }
  constructor(firstChild, lastChild, sourceTemplate, hostBindingTarget) {
    super();
    this.firstChild = firstChild;
    this.lastChild = lastChild;
    this.sourceTemplate = sourceTemplate;
    this.hostBindingTarget = hostBindingTarget;
    this[_a] = Hydratable;
    this.context = this;
    this.source = null;
    this.isBound = false;
    this.sourceLifetime = SourceLifetime.unknown;
    this.unbindables = [];
    this.fragment = null;
    this.behaviors = null;
    this._hydrationStage = HydrationStage.unhydrated;
    this._bindingViewBoundaries = {};
    this._targets = {};
    this.factories = sourceTemplate.compile().factories;
  }
  /**
   * no-op. Hydrated views are don't need to be moved from a documentFragment
   * to the target node.
   */
  insertBefore(node) {
    if (this.fragment === null) {
      return;
    }
    if (this.fragment.hasChildNodes()) {
      node.parentNode.insertBefore(this.fragment, node);
    } else {
      const end = this.lastChild;
      if (node.previousSibling === end)
        return;
      const parentNode = node.parentNode;
      let current = this.firstChild;
      let next2;
      while (current !== end) {
        next2 = current.nextSibling;
        parentNode.insertBefore(current, node);
        current = next2;
      }
      parentNode.insertBefore(end, node);
    }
  }
  /**
   * Appends the view to a node. In cases where this is called before the
   * view has been removed, the method will no-op.
   * @param node - the node to append the view to.
   */
  appendTo(node) {
    if (this.fragment !== null) {
      node.appendChild(this.fragment);
    }
  }
  remove() {
    const fragment = this.fragment || (this.fragment = document.createDocumentFragment());
    const end = this.lastChild;
    let current = this.firstChild;
    let next2;
    while (current !== end) {
      next2 = current.nextSibling;
      if (!next2) {
        throw new Error(`Unmatched first/last child inside "${end.getRootNode().host.nodeName}".`);
      }
      fragment.appendChild(current);
      current = next2;
    }
    fragment.appendChild(end);
  }
  bind(source, context = this) {
    if (this.source === source && this.context === context) {
      return;
    }
    if (this.hydrationStage !== HydrationStage.hydrated) {
      this._hydrationStage = HydrationStage.hydrating;
    }
    let behaviors = this.behaviors;
    if (behaviors === null) {
      this.source = source;
      this.context = context;
      try {
        const { targets, boundaries } = buildViewBindingTargets(this.firstChild, this.lastChild, this.factories);
        this._targets = targets;
        this._bindingViewBoundaries = boundaries;
      } catch (error) {
        if (error instanceof HydrationTargetElementError) {
          let templateString = this.sourceTemplate.html;
          if (typeof templateString !== "string") {
            templateString = templateString.innerHTML;
          }
          error.templateString = templateString;
        }
        throw error;
      }
      this.behaviors = behaviors = new Array(this.factories.length);
      const factories = this.factories;
      for (let i = 0, ii = factories.length; i < ii; ++i) {
        const factory = factories[i];
        if (factory.targetNodeId === "h" && this.hostBindingTarget) {
          targetFactory(factory, this.hostBindingTarget, this._targets);
        }
        if (factory.targetNodeId in this.targets) {
          const behavior = factory.createBehavior();
          behavior.bind(this);
          behaviors[i] = behavior;
        } else {
          let templateString = this.sourceTemplate.html;
          if (typeof templateString !== "string") {
            templateString = templateString.innerHTML;
          }
          const fragment = createRangeForNodes(this.firstChild, this.lastChild).cloneContents();
          const result = getHydrationDiagnostic().formatBindingMismatch(factory, this.firstChild, this.lastChild, getHostName(this.firstChild));
          throw new HydrationBindingError(result.message, factory, fragment, templateString, result.expected, result.received);
        }
      }
    } else {
      if (this.source !== null) {
        this.evaluateUnbindables();
      }
      this.isBound = false;
      this.source = source;
      this.context = context;
      for (let i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].bind(this);
      }
    }
    this.isBound = true;
    this._hydrationStage = HydrationStage.hydrated;
  }
  unbind() {
    if (!this.isBound || this.source === null) {
      return;
    }
    this.evaluateUnbindables();
    this.source = null;
    this.context = this;
    this.isBound = false;
  }
  /**
   * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
   * Once a view has been disposed, it cannot be inserted or bound again.
   */
  dispose() {
    removeNodeSequence(this.firstChild, this.lastChild);
    this.unbind();
  }
  onUnbind(behavior) {
    this.unbindables.push(behavior);
  }
  evaluateUnbindables() {
    const unbindables = this.unbindables;
    for (let i = 0, ii = unbindables.length; i < ii; ++i) {
      unbindables[i].unbind(this);
    }
    unbindables.length = 0;
  }
};
_a = Hydratable;
makeSerializationNoop(HydrationView);

// node_modules/@microsoft/fast-element/dist/esm/templating/html-binding-directive.js
function isContentTemplate(value) {
  return value.create !== void 0;
}
function updateContent(target, aspect, value, controller) {
  if (value === null || value === void 0) {
    value = "";
  }
  if (isContentTemplate(value)) {
    target.textContent = "";
    let view = target.$fastView;
    if (view === void 0) {
      if (isHydratable(controller) && isHydratable(value) && controller.bindingViewBoundaries[this.targetNodeId] !== void 0 && controller.hydrationStage !== HydrationStage.hydrated) {
        const viewNodes = controller.bindingViewBoundaries[this.targetNodeId];
        view = value.hydrate(viewNodes.first, viewNodes.last);
      } else {
        view = value.create();
      }
    } else {
      if (target.$fastTemplate !== value) {
        if (view.isComposed) {
          view.remove();
          view.unbind();
        }
        view = value.create();
      }
    }
    if (!view.isComposed) {
      view.isComposed = true;
      view.bind(controller.source, controller.context);
      view.insertBefore(target);
      target.$fastView = view;
      target.$fastTemplate = value;
    } else if (view.needsBindOnly) {
      view.needsBindOnly = false;
      view.bind(controller.source, controller.context);
    }
  } else {
    const view = target.$fastView;
    if (view !== void 0 && view.isComposed) {
      view.isComposed = false;
      view.remove();
      if (view.needsBindOnly) {
        view.needsBindOnly = false;
      } else {
        view.unbind();
      }
    }
    if (view === void 0 && isHydratable(controller) && controller.hydrationStage !== HydrationStage.hydrated) {
      const viewNodes = controller.bindingViewBoundaries[this.targetNodeId];
      if (viewNodes !== void 0) {
        removeNodeSequence(viewNodes.first, viewNodes.last);
        delete controller.bindingViewBoundaries[this.targetNodeId];
      }
    }
    target.textContent = value;
  }
}
function updateTokenList(target, aspect, value) {
  var _a2;
  const lookup = `${this.id}-t`;
  const state = (_a2 = target[lookup]) !== null && _a2 !== void 0 ? _a2 : target[lookup] = { v: 0, cv: /* @__PURE__ */ Object.create(null) };
  const classVersions = state.cv;
  let version = state.v;
  const tokenList = target[aspect];
  if (value !== null && value !== void 0 && value.length) {
    const names = value.split(/\s+/);
    for (let i = 0, ii = names.length; i < ii; ++i) {
      const currentName = names[i];
      if (currentName === "") {
        continue;
      }
      classVersions[currentName] = version;
      tokenList.add(currentName);
    }
  }
  state.v = version + 1;
  if (version === 0) {
    return;
  }
  version -= 1;
  for (const name in classVersions) {
    if (classVersions[name] === version) {
      tokenList.remove(name);
    }
  }
}
var sinkLookup = {
  [DOMAspect.attribute]: DOM.setAttribute,
  [DOMAspect.booleanAttribute]: DOM.setBooleanAttribute,
  [DOMAspect.property]: (t, a, v) => t[a] = v,
  [DOMAspect.content]: updateContent,
  [DOMAspect.tokenList]: updateTokenList,
  [DOMAspect.event]: () => void 0
};
var HTMLBindingDirective = class {
  /**
   * Creates an instance of HTMLBindingDirective.
   * @param dataBinding - The binding configuration to apply.
   */
  constructor(dataBinding) {
    this.updateTarget = null;
    this.aspectType = DOMAspect.content;
    this.dataBinding = dataBinding;
  }
  /**
   * Creates HTML to be used within a template.
   * @param add - Can be used to add  behavior factories to a template.
   */
  createHTML(add) {
    return Markup.interpolation(add(this));
  }
  /**
   * Creates a behavior.
   */
  createBehavior() {
    var _a2;
    if (this.updateTarget === null) {
      const sink = sinkLookup[this.aspectType];
      const policy = (_a2 = this.dataBinding.policy) !== null && _a2 !== void 0 ? _a2 : this.policy;
      if (!sink) {
        throw FAST.error(Message.unsupportedBindingBehavior);
      }
      this.data = `${this.id}-d`;
      this.updateTarget = policy.protect(this.targetTagName, this.aspectType, this.targetAspect, sink);
    }
    return this;
  }
  /**
   * Attaches this binding to its target DOM node.
   * - For events: stores the controller reference on the target element and registers
   *   this directive as the EventListener via addEventListener. The directive's
   *   handleEvent() method will be called when the event fires.
   * - For content bindings: registers an unbind handler, then falls through to the
   *   default path.
   * - For all non-event bindings: creates (or reuses) an ExpressionObserver, evaluates
   *   the binding expression, and applies the result to the DOM via the updateTarget
   *   sink function. The observer will call handleChange() on future data changes.
   * @internal
   */
  bind(controller) {
    var _a2;
    const target = controller.targets[this.targetNodeId];
    switch (this.aspectType) {
      case DOMAspect.event:
        target[this.data] = controller;
        target.addEventListener(this.targetAspect, this, this.dataBinding.options);
        break;
      case DOMAspect.content:
        controller.onUnbind(this);
      // intentional fall through
      default: {
        const observer = (_a2 = target[this.data]) !== null && _a2 !== void 0 ? _a2 : target[this.data] = this.dataBinding.createObserver(this, this);
        observer.target = target;
        observer.controller = controller;
        const value = observer.bind(controller);
        if (controller._skipAttrUpdates && (this.aspectType === DOMAspect.attribute || this.aspectType === DOMAspect.booleanAttribute)) {
          break;
        }
        this.updateTarget(target, this.targetAspect, value, controller);
        break;
      }
    }
  }
  /** @internal */
  unbind(controller) {
    const target = controller.targets[this.targetNodeId];
    const view = target.$fastView;
    if (view !== void 0 && view.isComposed) {
      view.unbind();
      view.needsBindOnly = true;
    }
  }
  /**
   * Implements the EventListener interface. When a DOM event fires on the target
   * element, this method retrieves the ViewController stored on the element,
   * sets the event on the ExecutionContext so `c.event` is available to the
   * binding expression, and evaluates the expression. If the expression returns
   * anything other than `true`, the event's default action is prevented.
   * @internal
   */
  handleEvent(event) {
    const controller = event.currentTarget[this.data];
    if (controller.isBound) {
      ExecutionContext.setEvent(event);
      const result = this.dataBinding.evaluate(controller.source, controller.context);
      ExecutionContext.setEvent(null);
      if (result !== true) {
        event.preventDefault();
      }
    }
  }
  /**
   * Called by the ExpressionObserver when a tracked dependency changes.
   * Re-evaluates the binding expression via observer.bind() and pushes
   * the new value to the DOM through the updateTarget sink function.
   * This is the reactive update path that keeps the DOM in sync with data.
   *
   * Guards against stale notifications: when a view is unbound (e.g., after
   * a parent `when` directive tears down a child element), coupled-lifetime
   * observers may still hold active subscriptions. If a property change fires
   * on the source element while the view is inactive, this guard prevents
   * the binding expression from evaluating with a null source.
   * @internal
   */
  handleChange(binding, observer) {
    const controller = observer.controller;
    if (!controller.isBound) {
      return;
    }
    const target = observer.target;
    this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
  }
};
HTMLDirective.define(HTMLBindingDirective, { aspected: true });

// node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js
var targetIdFrom = (parentId, nodeIndex) => `${parentId}.${nodeIndex}`;
var descriptorCache = {};
var next = {
  index: 0,
  node: null
};
function tryWarn(name) {
  if (!name.startsWith("fast-")) {
    FAST.warn(Message.hostBindingWithoutHost, { name });
  }
}
var warningHost = new Proxy(document.createElement("div"), {
  get(target, property) {
    tryWarn(property);
    const value = Reflect.get(target, property);
    return isFunction(value) ? value.bind(target) : value;
  },
  set(target, property, value) {
    tryWarn(property);
    return Reflect.set(target, property, value);
  }
});
var CompilationContext = class {
  constructor(fragment, directives, policy) {
    this.fragment = fragment;
    this.directives = directives;
    this.policy = policy;
    this.proto = null;
    this.nodeIds = /* @__PURE__ */ new Set();
    this.descriptors = {};
    this.factories = [];
  }
  addFactory(factory, parentId, nodeId, targetIndex, tagName5) {
    var _a2, _b;
    if (!this.nodeIds.has(nodeId)) {
      this.nodeIds.add(nodeId);
      this.addTargetDescriptor(parentId, nodeId, targetIndex);
    }
    factory.id = (_a2 = factory.id) !== null && _a2 !== void 0 ? _a2 : nextId();
    factory.targetNodeId = nodeId;
    factory.targetTagName = tagName5;
    factory.policy = (_b = factory.policy) !== null && _b !== void 0 ? _b : this.policy;
    this.factories.push(factory);
  }
  freeze() {
    this.proto = Object.create(null, this.descriptors);
    return this;
  }
  /**
   * Registers a lazy getter on the targets prototype that resolves a DOM node
   * by navigating from its parent's childNodes at the given index. Getters are
   * chained: accessing targets["r.0.2"] first resolves targets["r.0"] (which
   * resolves targets["r"]), then returns childNodes[2]. Results are cached so
   * each node is resolved at most once per view instance.
   */
  addTargetDescriptor(parentId, targetId, targetIndex) {
    const descriptors = this.descriptors;
    if (targetId === "r" || // root
    targetId === "h" || // host
    descriptors[targetId]) {
      return;
    }
    if (!descriptors[parentId]) {
      const index = parentId.lastIndexOf(".");
      const grandparentId = parentId.substring(0, index);
      const childIndex = parseInt(parentId.substring(index + 1), 10);
      this.addTargetDescriptor(grandparentId, parentId, childIndex);
    }
    let descriptor = descriptorCache[targetId];
    if (!descriptor) {
      const field = `_${targetId}`;
      descriptorCache[targetId] = descriptor = {
        get() {
          var _a2;
          return (_a2 = this[field]) !== null && _a2 !== void 0 ? _a2 : this[field] = this[parentId].childNodes[targetIndex];
        }
      };
    }
    descriptors[targetId] = descriptor;
  }
  /**
   * Creates a new HTMLView by cloning the compiled DocumentFragment and building
   * a targets object. The targets prototype contains lazy getters that resolve
   * each binding's target DOM node via childNodes traversal. Accessing every
   * registered nodeId eagerly triggers the getter chain so all nodes are resolved
   * before behaviors are bound.
   */
  createView(hostBindingTarget) {
    const fragment = this.fragment.cloneNode(true);
    const targets = Object.create(this.proto);
    targets.r = fragment;
    targets.h = hostBindingTarget !== null && hostBindingTarget !== void 0 ? hostBindingTarget : warningHost;
    for (const id3 of this.nodeIds) {
      Reflect.get(targets, id3);
    }
    return new HTMLView(fragment, this.factories, targets);
  }
};
function compileAttributes(context, parentId, node, nodeId, nodeIndex, includeBasicValues = false) {
  const attributes = node.attributes;
  const directives = context.directives;
  for (let i = 0, ii = attributes.length; i < ii; ++i) {
    const attr2 = attributes[i];
    const attrValue = attr2.value;
    const parseResult = Parser.parse(attrValue, directives);
    let result = null;
    if (parseResult === null) {
      if (includeBasicValues) {
        result = new HTMLBindingDirective(oneTime(() => attrValue, context.policy));
        HTMLDirective.assignAspect(result, attr2.name);
      }
    } else {
      result = Compiler.aggregate(parseResult, context.policy);
    }
    if (result !== null) {
      node.removeAttributeNode(attr2);
      i--;
      ii--;
      context.addFactory(result, parentId, nodeId, nodeIndex, node.tagName);
    }
  }
}
function compileContent(context, node, parentId, nodeId, nodeIndex) {
  const parseResult = Parser.parse(node.textContent, context.directives);
  if (parseResult === null) {
    next.node = node.nextSibling;
    next.index = nodeIndex + 1;
    return next;
  }
  let currentNode;
  let lastNode = currentNode = node;
  for (let i = 0, ii = parseResult.length; i < ii; ++i) {
    const currentPart = parseResult[i];
    if (i !== 0) {
      nodeIndex++;
      nodeId = targetIdFrom(parentId, nodeIndex);
      currentNode = lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
    }
    if (isString(currentPart)) {
      currentNode.textContent = currentPart;
    } else {
      currentNode.textContent = " ";
      HTMLDirective.assignAspect(currentPart);
      context.addFactory(currentPart, parentId, nodeId, nodeIndex, null);
    }
    lastNode = currentNode;
  }
  next.index = nodeIndex + 1;
  next.node = lastNode.nextSibling;
  return next;
}
function compileChildren(context, parent, parentId) {
  let nodeIndex = 0;
  let childNode = parent.firstChild;
  while (childNode) {
    const result = compileNode(context, parentId, childNode, nodeIndex);
    childNode = result.node;
    nodeIndex = result.index;
  }
}
function compileNode(context, parentId, node, nodeIndex) {
  const nodeId = targetIdFrom(parentId, nodeIndex);
  switch (node.nodeType) {
    case 1:
      compileAttributes(context, parentId, node, nodeId, nodeIndex);
      compileChildren(context, node, nodeId);
      break;
    case 3:
      return compileContent(context, node, parentId, nodeId, nodeIndex);
    case 8: {
      const parts = Parser.parse(node.data, context.directives);
      if (parts !== null) {
        context.addFactory(Compiler.aggregate(parts), parentId, nodeId, nodeIndex, null);
      }
      break;
    }
  }
  next.index = nodeIndex + 1;
  next.node = node.nextSibling;
  return next;
}
function isMarker(node, directives) {
  return node && node.nodeType === 8 && Parser.parse(node.data, directives) !== null;
}
var templateTag = "TEMPLATE";
var Compiler = {
  /**
   * Compiles a template and associated directives into a compilation
   * result which can be used to create views.
   * @param html - The html string or template element to compile.
   * @param factories - The behavior factories referenced by the template.
   * @param policy - The security policy to compile the html with.
   * @remarks
   * The template that is provided for compilation is altered in-place
   * and cannot be compiled again. If the original template must be preserved,
   * it is recommended that you clone the original and pass the clone to this API.
   * @public
   */
  compile(html2, factories, policy = DOM.policy) {
    let template5;
    if (isString(html2)) {
      template5 = document.createElement(templateTag);
      template5.innerHTML = policy.createHTML(html2);
      const fec = template5.content.firstElementChild;
      if (fec !== null && fec.tagName === templateTag) {
        template5 = fec;
      }
    } else {
      template5 = html2;
    }
    if (!template5.content.firstChild && !template5.content.lastChild) {
      template5.content.appendChild(document.createComment(""));
    }
    const fragment = document.adoptNode(template5.content);
    const context = new CompilationContext(fragment, factories, policy);
    compileAttributes(
      context,
      "",
      template5,
      /* host */
      "h",
      0,
      true
    );
    if (
      // If the first node in a fragment is a marker, that means it's an unstable first node,
      // because something like a when, repeat, etc. could add nodes before the marker.
      // To mitigate this, we insert a stable first node. However, if we insert a node,
      // that will alter the result of the TreeWalker. So, we also need to offset the target index.
      isMarker(fragment.firstChild, factories) || // Or if there is only one node and a directive, it means the template's content
      // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
      // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
      fragment.childNodes.length === 1 && Object.keys(factories).length > 0
    ) {
      fragment.insertBefore(document.createComment(""), fragment.firstChild);
    }
    compileChildren(
      context,
      fragment,
      /* root */
      "r"
    );
    next.node = null;
    return context.freeze();
  },
  /**
   * Sets the default compilation strategy that will be used by the ViewTemplate whenever
   * it needs to compile a view preprocessed with the html template function.
   * @param strategy - The compilation strategy to use when compiling templates.
   */
  setDefaultStrategy(strategy) {
    this.compile = strategy;
  },
  /**
   * Aggregates an array of strings and directives into a single directive.
   * @param parts - A heterogeneous array of static strings interspersed with
   * directives.
   * @param policy - The security policy to use with the aggregated bindings.
   * @returns A single inline directive that aggregates the behavior of all the parts.
   */
  aggregate(parts, policy = DOM.policy) {
    if (parts.length === 1) {
      return parts[0];
    }
    let sourceAspect;
    let isVolatile = false;
    let bindingPolicy = void 0;
    const partCount = parts.length;
    const finalParts = parts.map((x) => {
      if (isString(x)) {
        return () => x;
      }
      sourceAspect = x.sourceAspect || sourceAspect;
      isVolatile = isVolatile || x.dataBinding.isVolatile;
      bindingPolicy = bindingPolicy || x.dataBinding.policy;
      return x.dataBinding.evaluate;
    });
    const expression = (scope, context) => {
      let output = "";
      for (let i = 0; i < partCount; ++i) {
        output += finalParts[i](scope, context);
      }
      return output;
    };
    const directive = new HTMLBindingDirective(oneWay(expression, bindingPolicy !== null && bindingPolicy !== void 0 ? bindingPolicy : policy, isVolatile));
    HTMLDirective.assignAspect(directive, sourceAspect);
    return directive;
  }
};

// node_modules/@microsoft/fast-element/dist/esm/templating/ref.js
var RefDirective = class extends StatelessAttachedAttributeDirective {
  /**
   * Bind this behavior.
   * @param controller - The view controller that manages the lifecycle of this behavior.
   */
  bind(controller) {
    controller.source[this.options] = controller.targets[this.targetNodeId];
  }
};
HTMLDirective.define(RefDirective);
var ref = (propertyName) => new RefDirective(propertyName);

// node_modules/@microsoft/fast-element/dist/esm/templating/template.js
var lastAttributeNameRegex = (
  /* eslint-disable-next-line no-control-regex, max-len */
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
var noFactories = /* @__PURE__ */ Object.create(null);
var InlineTemplateDirective = class {
  /**
   * Creates an instance of InlineTemplateDirective.
   * @param template - The template to inline.
   */
  constructor(html2, factories = noFactories) {
    this.html = html2;
    this.factories = factories;
  }
  /**
   * Creates HTML to be used within a template.
   * @param add - Can be used to add  behavior factories to a template.
   */
  createHTML(add) {
    const factories = this.factories;
    for (const key in factories) {
      add(factories[key]);
    }
    return this.html;
  }
};
InlineTemplateDirective.empty = new InlineTemplateDirective("");
HTMLDirective.define(InlineTemplateDirective);
function createHTML2(value, prevString, add, definition5 = HTMLDirective.getForInstance(value)) {
  if (definition5.aspected) {
    const match = lastAttributeNameRegex.exec(prevString);
    if (match !== null) {
      HTMLDirective.assignAspect(value, match[2]);
    }
  }
  return value.createHTML(add);
}
var ViewTemplate = class _ViewTemplate {
  /**
   * Creates an instance of ViewTemplate.
   * @param html - The html representing what this template will instantiate, including placeholders for directives.
   * @param factories - The directives that will be connected to placeholders in the html.
   * @param policy - The security policy to use when compiling this template.
   */
  constructor(html2, factories = {}, policy) {
    this.policy = policy;
    this.result = null;
    this.html = html2;
    this.factories = factories;
  }
  /**
   * @internal
   */
  compile() {
    if (this.result === null) {
      this.result = Compiler.compile(this.html, this.factories, this.policy);
    }
    return this.result;
  }
  /**
   * Returns a directive that can inline the template.
   */
  inline() {
    return new InlineTemplateDirective(isString(this.html) ? this.html : this.html.innerHTML, this.factories);
  }
  /**
   * Sets the DOMPolicy for this template.
   * @param policy - The policy to associated with this template.
   * @returns The modified template instance.
   * @remarks
   * The DOMPolicy can only be set once for a template and cannot be
   * set after the template is compiled.
   */
  withPolicy(policy) {
    if (this.result) {
      throw FAST.error(Message.cannotSetTemplatePolicyAfterCompilation);
    }
    if (this.policy) {
      throw FAST.error(Message.onlySetTemplatePolicyOnce);
    }
    this.policy = policy;
    return this;
  }
  /**
   * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
   * @param source - The data source to bind the template to.
   * @param host - The Element where the template will be rendered.
   * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
   * host that the template is being attached to.
   */
  render(source, host, hostBindingTarget) {
    const view = this.create(hostBindingTarget);
    view.bind(source);
    view.appendTo(host);
    return view;
  }
  /**
   * Creates an HTMLView instance based on this template definition.
   * @param hostBindingTarget - The element that host behaviors will be bound to.
   */
  create(hostBindingTarget) {
    return this.compile().createView(hostBindingTarget);
  }
  /**
   * Processes the tagged template literal's static strings and interpolated values and
   * creates a ViewTemplate.
   *
   * For each interpolated value:
   * 1. Functions (binding expressions, e.g., `x => x.name`) → wrapped in a one-way HTMLBindingDirective
   * 2. Binding instances → wrapped in an HTMLBindingDirective
   * 3. HTMLDirective instances → used as-is
   * 4. Static values (strings, numbers) → wrapped in a one-time HTMLBindingDirective
   *
   * Each directive's createHTML() is called with an `add` callback that registers
   * the factory in the factories record under a unique ID and returns that ID.
   * The directive inserts a placeholder marker (e.g., `fast-abc123{0}fast-abc123`) into
   * the HTML string so the compiler can later find and associate it with the factory.
   *
   * Aspect detection happens here too: the `lastAttributeNameRegex` checks whether
   * the placeholder appears inside an attribute value, and if so, assignAspect()
   * sets the correct DOMAspect (attribute, property, event, etc.) based on the
   * attribute name prefix.
   *
   * @param strings - The static strings to create the template with.
   * @param values - The dynamic values to create the template with.
   * @param policy - The DOMPolicy to associated with the template.
   * @returns A ViewTemplate.
   * @remarks
   * This API should not be used directly under normal circumstances because constructing
   * a template in this way, if not done properly, can open up the application to XSS
   * attacks. When using this API, provide a strong DOMPolicy that can properly sanitize
   * and also be sure to manually sanitize all static strings particularly if they can
   * come from user input.
   */
  static create(strings, values, policy) {
    let html2 = "";
    const factories = /* @__PURE__ */ Object.create(null);
    const add = (factory) => {
      var _a2;
      const id3 = (_a2 = factory.id) !== null && _a2 !== void 0 ? _a2 : factory.id = nextId();
      factories[id3] = factory;
      return id3;
    };
    for (let i = 0, ii = strings.length - 1; i < ii; ++i) {
      const currentString = strings[i];
      let currentValue = values[i];
      let definition5;
      html2 += currentString;
      if (isFunction(currentValue)) {
        currentValue = new HTMLBindingDirective(oneWay(currentValue));
      } else if (currentValue instanceof Binding) {
        currentValue = new HTMLBindingDirective(currentValue);
      } else if (!(definition5 = HTMLDirective.getForInstance(currentValue))) {
        const staticValue = currentValue;
        currentValue = new HTMLBindingDirective(oneTime(() => staticValue));
      }
      html2 += createHTML2(currentValue, currentString, add, definition5);
    }
    return new _ViewTemplate(html2 + strings[strings.length - 1], factories, policy);
  }
};
makeSerializationNoop(ViewTemplate);
var html = ((strings, ...values) => {
  if (Array.isArray(strings) && Array.isArray(strings.raw)) {
    return ViewTemplate.create(strings, values);
  }
  throw FAST.error(Message.directCallToHTMLTagNotAllowed);
});
html.partial = (html2) => {
  return new InlineTemplateDirective(html2);
};

// node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js
var slotEvent = "slotchange";
var SlottedDirective = class extends NodeObservationDirective {
  /**
   * Begins observation of the nodes.
   * @param target - The target to observe.
   */
  observe(target) {
    target.addEventListener(slotEvent, this);
  }
  /**
   * Disconnects observation of the nodes.
   * @param target - The target to unobserve.
   */
  disconnect(target) {
    target.removeEventListener(slotEvent, this);
  }
  /**
   * Retrieves the raw nodes that should be assigned to the source property.
   * @param target - The target to get the node to.
   */
  getNodes(target) {
    return target.assignedNodes(this.options);
  }
  /** @internal */
  handleEvent(event) {
    const target = event.currentTarget;
    this.updateTarget(this.getSource(target), this.computeNodes(target));
  }
};
HTMLDirective.define(SlottedDirective);
function slotted(propertyOrOptions) {
  if (isString(propertyOrOptions)) {
    propertyOrOptions = { property: propertyOrOptions };
  }
  return new SlottedDirective(propertyOrOptions);
}

// node_modules/@fluentui/web-components/dist/esm/utils/unique-id.js
var uniqueIdCounter = 0;
function uniqueId(prefix = "id-") {
  const str = `${prefix}${uniqueIdCounter++}`;
  return document.getElementById(str) ? uniqueId(prefix) : str;
}

// node_modules/@fluentui/web-components/dist/esm/theme/set-theme.js
var SUPPORTS_ADOPTED_STYLE_SHEETS = "adoptedStyleSheets" in document;
var SUPPORTS_CSS_SCOPE = "CSSScopeRule" in window;
var themeStyleTextMap = /* @__PURE__ */ new Map();
var scopedThemeKeyMap = /* @__PURE__ */ new Map();
var shadowAdoptedStyleSheetMap = /* @__PURE__ */ new Map();
var elementThemeMap = /* @__PURE__ */ new Map();
var globalThemeStyleSheet = new CSSStyleSheet();
function setTheme(theme, node = document) {
  if (!node || !isThemeableNode(node)) {
    return;
  }
  if (!SUPPORTS_ADOPTED_STYLE_SHEETS || node instanceof HTMLElement && !node.shadowRoot && !SUPPORTS_CSS_SCOPE) {
    const target = node === document ? document.documentElement : node;
    setThemePropertiesOnElement(theme, target);
    return;
  }
  if ([document, document.documentElement, document.body].includes(node)) {
    setGlobalTheme(theme);
  } else {
    setLocalTheme(theme, node);
  }
}
var TOKEN_NAME_REGEX = /^[a-zA-Z_-][a-zA-Z0-9_-]*$/;
function sanitizeTokenName(name) {
  return TOKEN_NAME_REGEX.test(name) ? name : "";
}
var TOKEN_VALUE_BLOCK_REGEX = /(;|{|}|\/\*|\*\/|@import|url\s*\(|expression\s*\(|javascript:)/i;
function sanitizeTokenValue(value) {
  return TOKEN_VALUE_BLOCK_REGEX.test(value) ? "" : value;
}
function getThemeStyleText(theme) {
  if (!themeStyleTextMap.has(theme)) {
    themeStyleTextMap.set(theme, Object.keys(theme).reduce((acc, token) => {
      const tokenName = sanitizeTokenName(token);
      const tokenValue = sanitizeTokenValue(theme[token].toString());
      return tokenName && tokenValue ? `${acc}--${tokenName}:${tokenValue};` : acc;
    }, ""));
  }
  return themeStyleTextMap.get(theme);
}
function isThemeableNode(node) {
  return [document, document.documentElement].includes(node) || node instanceof HTMLElement && !!node.closest("body");
}
function setGlobalTheme(theme) {
  if (theme === null) {
    if (document.adoptedStyleSheets.includes(globalThemeStyleSheet)) {
      globalThemeStyleSheet.replaceSync("");
    }
    return;
  }
  globalThemeStyleSheet.replaceSync(`
    html {
      ${getThemeStyleText(theme)}
    }
  `);
  if (!document.adoptedStyleSheets.includes(globalThemeStyleSheet)) {
    document.adoptedStyleSheets.push(globalThemeStyleSheet);
  }
}
function setLocalTheme(theme, element) {
  if (theme === null) {
    if (element.shadowRoot && shadowAdoptedStyleSheetMap.has(element)) {
      shadowAdoptedStyleSheetMap.get(element).replaceSync("");
    } else {
      delete element.dataset.fluentTheme;
      forceRepaint(element);
    }
    return;
  }
  if (element.shadowRoot) {
    getShadowAdoptedStyleSheet(element).replaceSync(`
      :host {
        ${getThemeStyleText(theme)}
      }
    `);
  } else {
    element.dataset.fluentTheme = getScopedThemeKey(theme);
    forceRepaint(element);
  }
}
function getShadowAdoptedStyleSheet(element) {
  if (!shadowAdoptedStyleSheetMap.has(element)) {
    const shadowAdoptedStyleSheet = new CSSStyleSheet();
    shadowAdoptedStyleSheetMap.set(element, shadowAdoptedStyleSheet);
    element.shadowRoot?.adoptedStyleSheets.push(shadowAdoptedStyleSheet);
  }
  return shadowAdoptedStyleSheetMap.get(element);
}
function getScopedThemeKey(theme) {
  if (!scopedThemeKeyMap.has(theme)) {
    const themeKey = uniqueId("fluent-theme-");
    const scopedThemeStyleSheet = new CSSStyleSheet();
    scopedThemeKeyMap.set(theme, themeKey);
    scopedThemeStyleSheet.replaceSync(`
      @scope ([data-fluent-theme="${themeKey}"]) {
        :scope {
          ${getThemeStyleText(theme)}
        }
      }
    `);
    document.adoptedStyleSheets.push(scopedThemeStyleSheet);
  }
  return scopedThemeKeyMap.get(theme);
}
function setThemePropertiesOnElement(theme, element) {
  let tokens;
  if (theme === null) {
    if (!elementThemeMap.has(element)) {
      return;
    }
    tokens = elementThemeMap.get(element);
  } else {
    elementThemeMap.set(element, theme);
    tokens = theme;
  }
  for (const [tokenName, tokenValue] of Object.entries(tokens)) {
    if (theme === null) {
      element.style.removeProperty(`--${tokenName}`);
    } else {
      element.style.setProperty(`--${tokenName}`, tokenValue.toString());
    }
  }
}
var { userAgent: UA } = navigator;
var isWebkit = /\bAppleWebKit\/[\d+\.]+\b/.test(UA);
function forceRepaint(element) {
  if (!isWebkit) {
    return;
  }
  const name = "visibility";
  const tempValue = "hidden";
  const currentValue = element.style.getPropertyValue(name);
  element.style.setProperty(name, tempValue);
  Updates.process();
  element.style.setProperty(name, currentValue);
}

// node_modules/@fluentui/tokens/lib/global/colors.js
var grey = {
  "2": "#050505",
  "4": "#0a0a0a",
  "6": "#0f0f0f",
  "8": "#141414",
  "10": "#1a1a1a",
  "12": "#1f1f1f",
  "14": "#242424",
  "16": "#292929",
  "18": "#2e2e2e",
  "20": "#333333",
  "22": "#383838",
  "24": "#3d3d3d",
  "26": "#424242",
  "28": "#474747",
  "30": "#4d4d4d",
  "32": "#525252",
  "34": "#575757",
  "36": "#5c5c5c",
  "38": "#616161",
  "40": "#666666",
  "42": "#6b6b6b",
  "44": "#707070",
  "46": "#757575",
  "48": "#7a7a7a",
  "50": "#808080",
  "52": "#858585",
  "54": "#8a8a8a",
  "56": "#8f8f8f",
  "58": "#949494",
  "60": "#999999",
  "62": "#9e9e9e",
  "64": "#a3a3a3",
  "66": "#a8a8a8",
  "68": "#adadad",
  "70": "#b3b3b3",
  "72": "#b8b8b8",
  "74": "#bdbdbd",
  "76": "#c2c2c2",
  "78": "#c7c7c7",
  "80": "#cccccc",
  "82": "#d1d1d1",
  "84": "#d6d6d6",
  "86": "#dbdbdb",
  "88": "#e0e0e0",
  "90": "#e6e6e6",
  "92": "#ebebeb",
  "94": "#f0f0f0",
  "96": "#f5f5f5",
  "98": "#fafafa",
  "99": "#fcfcfc"
};
var whiteAlpha = {
  "5": "rgba(255, 255, 255, 0.05)",
  "10": "rgba(255, 255, 255, 0.1)",
  "20": "rgba(255, 255, 255, 0.2)",
  "30": "rgba(255, 255, 255, 0.3)",
  "40": "rgba(255, 255, 255, 0.4)",
  "50": "rgba(255, 255, 255, 0.5)",
  "60": "rgba(255, 255, 255, 0.6)",
  "70": "rgba(255, 255, 255, 0.7)",
  "80": "rgba(255, 255, 255, 0.8)",
  "90": "rgba(255, 255, 255, 0.9)"
};
var blackAlpha = {
  "5": "rgba(0, 0, 0, 0.05)",
  "10": "rgba(0, 0, 0, 0.1)",
  "20": "rgba(0, 0, 0, 0.2)",
  "30": "rgba(0, 0, 0, 0.3)",
  "40": "rgba(0, 0, 0, 0.4)",
  "50": "rgba(0, 0, 0, 0.5)",
  "60": "rgba(0, 0, 0, 0.6)",
  "70": "rgba(0, 0, 0, 0.7)",
  "80": "rgba(0, 0, 0, 0.8)",
  "90": "rgba(0, 0, 0, 0.9)"
};
var grey10Alpha = {
  "5": "rgba(26, 26, 26, 0.05)",
  "10": "rgba(26, 26, 26, 0.1)",
  "20": "rgba(26, 26, 26, 0.2)",
  "30": "rgba(26, 26, 26, 0.3)",
  "40": "rgba(26, 26, 26, 0.4)",
  "50": "rgba(26, 26, 26, 0.5)",
  "60": "rgba(26, 26, 26, 0.6)",
  "70": "rgba(26, 26, 26, 0.7)",
  "80": "rgba(26, 26, 26, 0.8)",
  "90": "rgba(26, 26, 26, 0.9)"
};
var grey12Alpha = {
  "5": "rgba(31, 31, 31, 0.05)",
  "10": "rgba(31, 31, 31, 0.1)",
  "20": "rgba(31, 31, 31, 0.2)",
  "30": "rgba(31, 31, 31, 0.3)",
  "40": "rgba(31, 31, 31, 0.4)",
  "50": "rgba(31, 31, 31, 0.5)",
  "60": "rgba(31, 31, 31, 0.6)",
  "70": "rgba(31, 31, 31, 0.7)",
  "80": "rgba(31, 31, 31, 0.8)",
  "90": "rgba(31, 31, 31, 0.9)"
};
var grey14Alpha = {
  "5": "rgba(36, 36, 36, 0.05)",
  "10": "rgba(36, 36, 36, 0.1)",
  "20": "rgba(36, 36, 36, 0.2)",
  "30": "rgba(36, 36, 36, 0.3)",
  "40": "rgba(36, 36, 36, 0.4)",
  "50": "rgba(36, 36, 36, 0.5)",
  "60": "rgba(36, 36, 36, 0.6)",
  "70": "rgba(36, 36, 36, 0.7)",
  "80": "rgba(36, 36, 36, 0.8)",
  "90": "rgba(36, 36, 36, 0.9)"
};
var white = "#ffffff";
var black = "#000000";
var darkRed = {
  shade50: "#130204",
  shade40: "#230308",
  shade30: "#420610",
  shade20: "#590815",
  shade10: "#690a19",
  primary: "#750b1c",
  tint10: "#861b2c",
  tint20: "#962f3f",
  tint30: "#ac4f5e",
  tint40: "#d69ca5",
  tint50: "#e9c7cd",
  tint60: "#f9f0f2"
};
var cranberry = {
  shade50: "#200205",
  shade40: "#3b0509",
  shade30: "#6e0811",
  shade20: "#960b18",
  shade10: "#b10e1c",
  primary: "#c50f1f",
  tint10: "#cc2635",
  tint20: "#d33f4c",
  tint30: "#dc626d",
  tint40: "#eeacb2",
  tint50: "#f6d1d5",
  tint60: "#fdf3f4"
};
var red = {
  shade50: "#210809",
  shade40: "#3f1011",
  shade30: "#751d1f",
  shade20: "#9f282b",
  shade10: "#bc2f32",
  primary: "#d13438",
  tint10: "#d7494c",
  tint20: "#dc5e62",
  tint30: "#e37d80",
  tint40: "#f1bbbc",
  tint50: "#f8dadb",
  tint60: "#fdf6f6"
};
var darkOrange = {
  shade50: "#230900",
  shade40: "#411200",
  shade30: "#7a2101",
  shade20: "#a62d01",
  shade10: "#c43501",
  primary: "#da3b01",
  tint10: "#de501c",
  tint20: "#e36537",
  tint30: "#e9835e",
  tint40: "#f4bfab",
  tint50: "#f9dcd1",
  tint60: "#fdf6f3"
};
var pumpkin = {
  shade50: "#200d03",
  shade40: "#3d1805",
  shade30: "#712d09",
  shade20: "#9a3d0c",
  shade10: "#b6480e",
  primary: "#ca5010",
  tint10: "#d06228",
  tint20: "#d77440",
  tint30: "#df8e64",
  tint40: "#efc4ad",
  tint50: "#f7dfd2",
  tint60: "#fdf7f4"
};
var orange = {
  shade50: "#271002",
  shade40: "#4a1e04",
  shade30: "#8a3707",
  shade20: "#bc4b09",
  shade10: "#de590b",
  primary: "#f7630c",
  tint10: "#f87528",
  tint20: "#f98845",
  tint30: "#faa06b",
  tint40: "#fdcfb4",
  tint50: "#fee5d7",
  tint60: "#fff9f5"
};
var peach = {
  shade50: "#291600",
  shade40: "#4d2a00",
  shade30: "#8f4e00",
  shade20: "#c26a00",
  shade10: "#e67e00",
  primary: "#ff8c00",
  tint10: "#ff9a1f",
  tint20: "#ffa83d",
  tint30: "#ffba66",
  tint40: "#ffddb3",
  tint50: "#ffedd6",
  tint60: "#fffaf5"
};
var marigold = {
  shade50: "#251a00",
  shade40: "#463100",
  shade30: "#835b00",
  shade20: "#b27c00",
  shade10: "#d39300",
  primary: "#eaa300",
  tint10: "#edad1c",
  tint20: "#efb839",
  tint30: "#f2c661",
  tint40: "#f9e2ae",
  tint50: "#fcefd3",
  tint60: "#fefbf4"
};
var yellow = {
  shade50: "#282400",
  shade40: "#4c4400",
  shade30: "#817400",
  shade20: "#c0ad00",
  shade10: "#e4cc00",
  primary: "#fde300",
  tint10: "#fde61e",
  tint20: "#fdea3d",
  tint30: "#feee66",
  tint40: "#fef7b2",
  tint50: "#fffad6",
  tint60: "#fffef5"
};
var gold = {
  shade50: "#1f1900",
  shade40: "#3a2f00",
  shade30: "#6c5700",
  shade20: "#937700",
  shade10: "#ae8c00",
  primary: "#c19c00",
  tint10: "#c8a718",
  tint20: "#d0b232",
  tint30: "#dac157",
  tint40: "#ecdfa5",
  tint50: "#f5eece",
  tint60: "#fdfbf2"
};
var brass = {
  shade50: "#181202",
  shade40: "#2e2103",
  shade30: "#553e06",
  shade20: "#745408",
  shade10: "#89640a",
  primary: "#986f0b",
  tint10: "#a47d1e",
  tint20: "#b18c34",
  tint30: "#c1a256",
  tint40: "#e0cea2",
  tint50: "#efe4cb",
  tint60: "#fbf8f2"
};
var brown = {
  shade50: "#170e07",
  shade40: "#2b1a0e",
  shade30: "#50301a",
  shade20: "#6c4123",
  shade10: "#804d29",
  primary: "#8e562e",
  tint10: "#9c663f",
  tint20: "#a97652",
  tint30: "#bb8f6f",
  tint40: "#ddc3b0",
  tint50: "#edded3",
  tint60: "#faf7f4"
};
var forest = {
  shade50: "#0c1501",
  shade40: "#162702",
  shade30: "#294903",
  shade20: "#376304",
  shade10: "#427505",
  primary: "#498205",
  tint10: "#599116",
  tint20: "#6ba02b",
  tint30: "#85b44c",
  tint40: "#bdd99b",
  tint50: "#dbebc7",
  tint60: "#f6faf0"
};
var seafoam = {
  shade50: "#002111",
  shade40: "#003d20",
  shade30: "#00723b",
  shade20: "#009b51",
  shade10: "#00b85f",
  primary: "#00cc6a",
  tint10: "#19d279",
  tint20: "#34d889",
  tint30: "#5ae0a0",
  tint40: "#a8f0cd",
  tint50: "#cff7e4",
  tint60: "#f3fdf8"
};
var lightGreen = {
  shade50: "#031a02",
  shade40: "#063004",
  shade30: "#0b5a08",
  shade20: "#0e7a0b",
  shade10: "#11910d",
  primary: "#13a10e",
  tint10: "#27ac22",
  tint20: "#3db838",
  tint30: "#5ec75a",
  tint40: "#a7e3a5",
  tint50: "#cef0cd",
  tint60: "#f2fbf2"
};
var green = {
  shade50: "#031403",
  shade40: "#052505",
  shade30: "#094509",
  shade20: "#0c5e0c",
  shade10: "#0e700e",
  primary: "#107c10",
  tint10: "#218c21",
  tint20: "#359b35",
  tint30: "#54b054",
  tint40: "#9fd89f",
  tint50: "#c9eac9",
  tint60: "#f1faf1"
};
var darkGreen = {
  shade50: "#021102",
  shade40: "#032003",
  shade30: "#063b06",
  shade20: "#085108",
  shade10: "#0a5f0a",
  primary: "#0b6a0b",
  tint10: "#1a7c1a",
  tint20: "#2d8e2d",
  tint30: "#4da64d",
  tint40: "#9ad29a",
  tint50: "#c6e7c6",
  tint60: "#f0f9f0"
};
var lightTeal = {
  shade50: "#001d1f",
  shade40: "#00373a",
  shade30: "#00666d",
  shade20: "#008b94",
  shade10: "#00a5af",
  primary: "#00b7c3",
  tint10: "#18bfca",
  tint20: "#32c8d1",
  tint30: "#58d3db",
  tint40: "#a6e9ed",
  tint50: "#cef3f5",
  tint60: "#f2fcfd"
};
var teal = {
  shade50: "#001516",
  shade40: "#012728",
  shade30: "#02494c",
  shade20: "#026467",
  shade10: "#037679",
  primary: "#038387",
  tint10: "#159195",
  tint20: "#2aa0a4",
  tint30: "#4cb4b7",
  tint40: "#9bd9db",
  tint50: "#c7ebec",
  tint60: "#f0fafa"
};
var steel = {
  shade50: "#000f12",
  shade40: "#001b22",
  shade30: "#00333f",
  shade20: "#004555",
  shade10: "#005265",
  primary: "#005b70",
  tint10: "#0f6c81",
  tint20: "#237d92",
  tint30: "#4496a9",
  tint40: "#94c8d4",
  tint50: "#c3e1e8",
  tint60: "#eff7f9"
};
var blue = {
  shade50: "#001322",
  shade40: "#002440",
  shade30: "#004377",
  shade20: "#005ba1",
  shade10: "#006cbf",
  primary: "#0078d4",
  tint10: "#1a86d9",
  tint20: "#3595de",
  tint30: "#5caae5",
  tint40: "#a9d3f2",
  tint50: "#d0e7f8",
  tint60: "#f3f9fd"
};
var royalBlue = {
  shade50: "#000c16",
  shade40: "#00172a",
  shade30: "#002c4e",
  shade20: "#003b6a",
  shade10: "#00467e",
  primary: "#004e8c",
  tint10: "#125e9a",
  tint20: "#286fa8",
  tint30: "#4a89ba",
  tint40: "#9abfdc",
  tint50: "#c7dced",
  tint60: "#f0f6fa"
};
var cornflower = {
  shade50: "#0d1126",
  shade40: "#182047",
  shade30: "#2c3c85",
  shade20: "#3c51b4",
  shade10: "#4760d5",
  primary: "#4f6bed",
  tint10: "#637cef",
  tint20: "#778df1",
  tint30: "#93a4f4",
  tint40: "#c8d1fa",
  tint50: "#e1e6fc",
  tint60: "#f7f9fe"
};
var navy = {
  shade50: "#00061d",
  shade40: "#000c36",
  shade30: "#001665",
  shade20: "#001e89",
  shade10: "#0023a2",
  primary: "#0027b4",
  tint10: "#173bbd",
  tint20: "#3050c6",
  tint30: "#546fd2",
  tint40: "#a3b2e8",
  tint50: "#ccd5f3",
  tint60: "#f2f4fc"
};
var lavender = {
  shade50: "#120f25",
  shade40: "#221d46",
  shade30: "#3f3682",
  shade20: "#5649b0",
  shade10: "#6656d1",
  primary: "#7160e8",
  tint10: "#8172eb",
  tint20: "#9184ee",
  tint30: "#a79cf1",
  tint40: "#d2ccf8",
  tint50: "#e7e4fb",
  tint60: "#f9f8fe"
};
var purple = {
  shade50: "#0f0717",
  shade40: "#1c0e2b",
  shade30: "#341a51",
  shade20: "#46236e",
  shade10: "#532982",
  primary: "#5c2e91",
  tint10: "#6b3f9e",
  tint20: "#7c52ab",
  tint30: "#9470bd",
  tint40: "#c6b1de",
  tint50: "#e0d3ed",
  tint60: "#f7f4fb"
};
var grape = {
  shade50: "#160418",
  shade40: "#29072e",
  shade30: "#4c0d55",
  shade20: "#671174",
  shade10: "#7a1589",
  primary: "#881798",
  tint10: "#952aa4",
  tint20: "#a33fb1",
  tint30: "#b55fc1",
  tint40: "#d9a7e0",
  tint50: "#eaceef",
  tint60: "#faf2fb"
};
var berry = {
  shade50: "#1f091d",
  shade40: "#3a1136",
  shade30: "#6d2064",
  shade20: "#932b88",
  shade10: "#af33a1",
  primary: "#c239b3",
  tint10: "#c94cbc",
  tint20: "#d161c4",
  tint30: "#da7ed0",
  tint40: "#edbbe7",
  tint50: "#f5daf2",
  tint60: "#fdf5fc"
};
var lilac = {
  shade50: "#1c0b1f",
  shade40: "#35153a",
  shade30: "#63276d",
  shade20: "#863593",
  shade10: "#9f3faf",
  primary: "#b146c2",
  tint10: "#ba58c9",
  tint20: "#c36bd1",
  tint30: "#cf87da",
  tint40: "#e6bfed",
  tint50: "#f2dcf5",
  tint60: "#fcf6fd"
};
var pink = {
  shade50: "#24091b",
  shade40: "#441232",
  shade30: "#80215d",
  shade20: "#ad2d7e",
  shade10: "#cd3595",
  primary: "#e43ba6",
  tint10: "#e750b0",
  tint20: "#ea66ba",
  tint30: "#ef85c8",
  tint40: "#f7c0e3",
  tint50: "#fbddf0",
  tint60: "#fef6fb"
};
var magenta = {
  shade50: "#1f0013",
  shade40: "#390024",
  shade30: "#6b0043",
  shade20: "#91005a",
  shade10: "#ac006b",
  primary: "#bf0077",
  tint10: "#c71885",
  tint20: "#ce3293",
  tint30: "#d957a8",
  tint40: "#eca5d1",
  tint50: "#f5cee6",
  tint60: "#fcf2f9"
};
var plum = {
  shade50: "#13000c",
  shade40: "#240017",
  shade30: "#43002b",
  shade20: "#5a003b",
  shade10: "#6b0045",
  primary: "#77004d",
  tint10: "#87105d",
  tint20: "#98246f",
  tint30: "#ad4589",
  tint40: "#d696c0",
  tint50: "#e9c4dc",
  tint60: "#faf0f6"
};
var beige = {
  shade50: "#141313",
  shade40: "#252323",
  shade30: "#444241",
  shade20: "#5d5958",
  shade10: "#6e6968",
  primary: "#7a7574",
  tint10: "#8a8584",
  tint20: "#9a9594",
  tint30: "#afabaa",
  tint40: "#d7d4d4",
  tint50: "#eae8e8",
  tint60: "#faf9f9"
};
var mink = {
  shade50: "#0f0e0e",
  shade40: "#1c1b1a",
  shade30: "#343231",
  shade20: "#474443",
  shade10: "#54514f",
  primary: "#5d5a58",
  tint10: "#706d6b",
  tint20: "#84817e",
  tint30: "#9e9b99",
  tint40: "#cecccb",
  tint50: "#e5e4e3",
  tint60: "#f8f8f8"
};
var platinum = {
  shade50: "#111314",
  shade40: "#1f2426",
  shade30: "#3b4447",
  shade20: "#505c60",
  shade10: "#5f6d71",
  primary: "#69797e",
  tint10: "#79898d",
  tint20: "#89989d",
  tint30: "#a0adb2",
  tint40: "#cdd6d8",
  tint50: "#e4e9ea",
  tint60: "#f8f9fa"
};
var anchor = {
  shade50: "#090a0b",
  shade40: "#111315",
  shade30: "#202427",
  shade20: "#2b3135",
  shade10: "#333a3f",
  primary: "#394146",
  tint10: "#4d565c",
  tint20: "#626c72",
  tint30: "#808a90",
  tint40: "#bcc3c7",
  tint50: "#dbdfe1",
  tint60: "#f6f7f8"
};

// node_modules/@fluentui/tokens/lib/global/colorPalette.js
var statusSharedColors = {
  red,
  green,
  darkOrange,
  yellow,
  berry,
  lightGreen,
  marigold
};
var personaSharedColors = {
  darkRed,
  cranberry,
  pumpkin,
  peach,
  gold,
  brass,
  brown,
  forest,
  seafoam,
  darkGreen,
  lightTeal,
  teal,
  steel,
  blue,
  royalBlue,
  cornflower,
  navy,
  lavender,
  purple,
  grape,
  lilac,
  pink,
  magenta,
  plum,
  beige,
  mink,
  platinum,
  anchor
};
var mappedStatusColors = {
  cranberry,
  green,
  orange
};

// node_modules/@fluentui/tokens/lib/sharedColorNames.js
var statusSharedColorNames = [
  "red",
  "green",
  "darkOrange",
  "yellow",
  "berry",
  "lightGreen",
  "marigold"
];
var personaSharedColorNames = [
  "darkRed",
  "cranberry",
  "pumpkin",
  "peach",
  "gold",
  "brass",
  "brown",
  "forest",
  "seafoam",
  "darkGreen",
  "lightTeal",
  "teal",
  "steel",
  "blue",
  "royalBlue",
  "cornflower",
  "navy",
  "lavender",
  "purple",
  "grape",
  "lilac",
  "pink",
  "magenta",
  "plum",
  "beige",
  "mink",
  "platinum",
  "anchor"
];

// node_modules/@fluentui/tokens/lib/statusColorMapping.js
var statusColorMapping = {
  success: "green",
  warning: "orange",
  danger: "cranberry"
};

// node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js
var statusColorPaletteTokens = statusSharedColorNames.reduce((acc, sharedColor) => {
  const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
  const sharedColorTokens = {
    [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].tint60,
    [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].tint40,
    [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].shade10,
    [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].shade30,
    [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].tint40,
    [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].primary
  };
  return Object.assign(acc, sharedColorTokens);
}, {});
statusColorPaletteTokens.colorPaletteYellowForeground1 = statusSharedColors.yellow.shade30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = statusSharedColors.red.tint20;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = statusSharedColors.green.tint20;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.tint40;
var personaColorPaletteTokens = personaSharedColorNames.reduce((acc, sharedColor) => {
  const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
  const sharedColorTokens = {
    [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].tint40,
    [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].shade30,
    [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].primary
  };
  return Object.assign(acc, sharedColorTokens);
}, {});
var colorPaletteTokens = {
  ...statusColorPaletteTokens,
  ...personaColorPaletteTokens
};
var colorStatusTokens = Object.entries(statusColorMapping).reduce((acc, [statusColor, sharedColor]) => {
  const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
  const statusColorTokens = {
    [`colorStatus${color}Background1`]: mappedStatusColors[sharedColor].tint60,
    [`colorStatus${color}Background2`]: mappedStatusColors[sharedColor].tint40,
    [`colorStatus${color}Background3`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}Foreground1`]: mappedStatusColors[sharedColor].shade10,
    [`colorStatus${color}Foreground2`]: mappedStatusColors[sharedColor].shade30,
    [`colorStatus${color}Foreground3`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}ForegroundInverted`]: mappedStatusColors[sharedColor].tint30,
    [`colorStatus${color}BorderActive`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}Border1`]: mappedStatusColors[sharedColor].tint40,
    [`colorStatus${color}Border2`]: mappedStatusColors[sharedColor].primary
  };
  return Object.assign(acc, statusColorTokens);
}, {});
colorStatusTokens.colorStatusDangerBackground3Hover = mappedStatusColors[statusColorMapping.danger].shade10;
colorStatusTokens.colorStatusDangerBackground3Pressed = mappedStatusColors[statusColorMapping.danger].shade20;
colorStatusTokens.colorStatusWarningForeground1 = mappedStatusColors[statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningForeground3 = mappedStatusColors[statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningBorder2 = mappedStatusColors[statusColorMapping.warning].shade20;

// node_modules/@fluentui/tokens/lib/alias/lightColor.js
var generateColorTokens = (brand) => ({
  colorNeutralForeground1: grey[14],
  colorNeutralForeground1Hover: grey[14],
  colorNeutralForeground1Pressed: grey[14],
  colorNeutralForeground1Selected: grey[14],
  colorNeutralForeground2: grey[26],
  colorNeutralForeground2Hover: grey[14],
  colorNeutralForeground2Pressed: grey[14],
  colorNeutralForeground2Selected: grey[14],
  colorNeutralForeground2BrandHover: brand[80],
  colorNeutralForeground2BrandPressed: brand[70],
  colorNeutralForeground2BrandSelected: brand[80],
  colorNeutralForeground3: grey[38],
  colorNeutralForeground3Hover: grey[26],
  colorNeutralForeground3Pressed: grey[26],
  colorNeutralForeground3Selected: grey[26],
  colorNeutralForeground3BrandHover: brand[80],
  colorNeutralForeground3BrandPressed: brand[70],
  colorNeutralForeground3BrandSelected: brand[80],
  colorNeutralForeground4: grey[44],
  colorNeutralForeground5: grey[38],
  colorNeutralForeground5Hover: grey[14],
  colorNeutralForeground5Pressed: grey[14],
  colorNeutralForeground5Selected: grey[14],
  colorNeutralForegroundDisabled: grey[74],
  colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
  colorBrandForegroundLink: brand[70],
  colorBrandForegroundLinkHover: brand[60],
  colorBrandForegroundLinkPressed: brand[40],
  colorBrandForegroundLinkSelected: brand[70],
  colorNeutralForeground2Link: grey[26],
  colorNeutralForeground2LinkHover: grey[14],
  colorNeutralForeground2LinkPressed: grey[14],
  colorNeutralForeground2LinkSelected: grey[14],
  colorCompoundBrandForeground1: brand[80],
  colorCompoundBrandForeground1Hover: brand[70],
  colorCompoundBrandForeground1Pressed: brand[60],
  colorBrandForeground1: brand[80],
  colorBrandForeground2: brand[70],
  colorBrandForeground2Hover: brand[60],
  colorBrandForeground2Pressed: brand[30],
  colorNeutralForeground1Static: grey[14],
  colorNeutralForegroundStaticInverted: white,
  colorNeutralForegroundInverted: white,
  colorNeutralForegroundInvertedHover: white,
  colorNeutralForegroundInvertedPressed: white,
  colorNeutralForegroundInvertedSelected: white,
  colorNeutralForegroundInverted2: white,
  colorNeutralForegroundOnBrand: white,
  colorNeutralForegroundInvertedLink: white,
  colorNeutralForegroundInvertedLinkHover: white,
  colorNeutralForegroundInvertedLinkPressed: white,
  colorNeutralForegroundInvertedLinkSelected: white,
  colorBrandForegroundInverted: brand[100],
  colorBrandForegroundInvertedHover: brand[110],
  colorBrandForegroundInvertedPressed: brand[100],
  colorBrandForegroundOnLight: brand[80],
  colorBrandForegroundOnLightHover: brand[70],
  colorBrandForegroundOnLightPressed: brand[50],
  colorBrandForegroundOnLightSelected: brand[60],
  colorNeutralBackground1: white,
  colorNeutralBackground1Hover: grey[96],
  colorNeutralBackground1Pressed: grey[88],
  colorNeutralBackground1Selected: grey[92],
  colorNeutralBackground2: grey[98],
  colorNeutralBackground2Hover: grey[94],
  colorNeutralBackground2Pressed: grey[86],
  colorNeutralBackground2Selected: grey[90],
  colorNeutralBackground3: grey[96],
  colorNeutralBackground3Hover: grey[92],
  colorNeutralBackground3Pressed: grey[84],
  colorNeutralBackground3Selected: grey[88],
  colorNeutralBackground4: grey[94],
  colorNeutralBackground4Hover: grey[98],
  colorNeutralBackground4Pressed: grey[96],
  colorNeutralBackground4Selected: white,
  colorNeutralBackground5: grey[92],
  colorNeutralBackground5Hover: grey[96],
  colorNeutralBackground5Pressed: grey[94],
  colorNeutralBackground5Selected: grey[98],
  colorNeutralBackground6: grey[90],
  colorNeutralBackground7: "#00000000",
  colorNeutralBackground7Hover: grey[92],
  colorNeutralBackground7Pressed: grey[84],
  colorNeutralBackground7Selected: "#00000000",
  colorNeutralBackground8: grey[99],
  colorNeutralBackgroundInverted: grey[16],
  colorNeutralBackgroundInvertedHover: grey[24],
  colorNeutralBackgroundInvertedPressed: grey[12],
  colorNeutralBackgroundInvertedSelected: grey[22],
  colorNeutralBackgroundStatic: grey[20],
  colorNeutralBackgroundAlpha: whiteAlpha[50],
  colorNeutralBackgroundAlpha2: whiteAlpha[80],
  colorSubtleBackground: "transparent",
  colorSubtleBackgroundHover: grey[96],
  colorSubtleBackgroundPressed: grey[88],
  colorSubtleBackgroundSelected: grey[92],
  colorSubtleBackgroundLightAlphaHover: whiteAlpha[70],
  colorSubtleBackgroundLightAlphaPressed: whiteAlpha[50],
  colorSubtleBackgroundLightAlphaSelected: "transparent",
  colorSubtleBackgroundInverted: "transparent",
  colorSubtleBackgroundInvertedHover: blackAlpha[10],
  colorSubtleBackgroundInvertedPressed: blackAlpha[30],
  colorSubtleBackgroundInvertedSelected: blackAlpha[20],
  colorTransparentBackground: "transparent",
  colorTransparentBackgroundHover: "transparent",
  colorTransparentBackgroundPressed: "transparent",
  colorTransparentBackgroundSelected: "transparent",
  colorNeutralBackgroundDisabled: grey[94],
  colorNeutralBackgroundDisabled2: white,
  colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
  colorNeutralStencil1: grey[90],
  colorNeutralStencil2: grey[98],
  colorNeutralStencil1Alpha: blackAlpha[10],
  colorNeutralStencil2Alpha: blackAlpha[5],
  colorBackgroundOverlay: blackAlpha[40],
  colorScrollbarOverlay: blackAlpha[50],
  colorBrandBackground: brand[80],
  colorBrandBackgroundHover: brand[70],
  colorBrandBackgroundPressed: brand[40],
  colorBrandBackgroundSelected: brand[60],
  colorCompoundBrandBackground: brand[80],
  colorCompoundBrandBackgroundHover: brand[70],
  colorCompoundBrandBackgroundPressed: brand[60],
  colorBrandBackgroundStatic: brand[80],
  colorBrandBackground2: brand[160],
  colorBrandBackground2Hover: brand[150],
  colorBrandBackground2Pressed: brand[130],
  colorBrandBackground3Static: brand[60],
  colorBrandBackground4Static: brand[40],
  colorBrandBackgroundInverted: white,
  colorBrandBackgroundInvertedHover: brand[160],
  colorBrandBackgroundInvertedPressed: brand[140],
  colorBrandBackgroundInvertedSelected: brand[150],
  colorNeutralCardBackground: grey[98],
  colorNeutralCardBackgroundHover: white,
  colorNeutralCardBackgroundPressed: grey[96],
  colorNeutralCardBackgroundSelected: grey[92],
  colorNeutralCardBackgroundDisabled: grey[94],
  colorNeutralStrokeAccessible: grey[38],
  colorNeutralStrokeAccessibleHover: grey[34],
  colorNeutralStrokeAccessiblePressed: grey[30],
  colorNeutralStrokeAccessibleSelected: brand[80],
  colorNeutralStroke1: grey[82],
  colorNeutralStroke1Hover: grey[78],
  colorNeutralStroke1Pressed: grey[70],
  colorNeutralStroke1Selected: grey[74],
  colorNeutralStroke2: grey[88],
  colorNeutralStroke3: grey[94],
  colorNeutralStroke4: grey[92],
  colorNeutralStroke4Hover: grey[88],
  colorNeutralStroke4Pressed: grey[84],
  colorNeutralStroke4Selected: grey[92],
  colorNeutralStrokeSubtle: grey[88],
  colorNeutralStrokeOnBrand: white,
  colorNeutralStrokeOnBrand2: white,
  colorNeutralStrokeOnBrand2Hover: white,
  colorNeutralStrokeOnBrand2Pressed: white,
  colorNeutralStrokeOnBrand2Selected: white,
  colorBrandStroke1: brand[80],
  colorBrandStroke2: brand[140],
  colorBrandStroke2Hover: brand[120],
  colorBrandStroke2Pressed: brand[80],
  colorBrandStroke2Contrast: brand[140],
  colorCompoundBrandStroke: brand[80],
  colorCompoundBrandStrokeHover: brand[70],
  colorCompoundBrandStrokePressed: brand[60],
  colorNeutralStrokeDisabled: grey[88],
  colorNeutralStrokeDisabled2: grey[92],
  colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
  colorTransparentStroke: "transparent",
  colorTransparentStrokeInteractive: "transparent",
  colorTransparentStrokeDisabled: "transparent",
  colorNeutralStrokeAlpha: blackAlpha[5],
  colorNeutralStrokeAlpha2: whiteAlpha[20],
  colorStrokeFocus1: white,
  colorStrokeFocus2: black,
  colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
  colorNeutralShadowKey: "rgba(0,0,0,0.14)",
  colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
  colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
  colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
  colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
  colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
  colorBrandShadowKey: "rgba(0,0,0,0.25)"
});

// node_modules/@fluentui/tokens/lib/global/borderRadius.js
var borderRadius = {
  borderRadiusNone: "0",
  borderRadiusSmall: "2px",
  borderRadiusMedium: "4px",
  borderRadiusLarge: "6px",
  borderRadiusXLarge: "8px",
  borderRadius2XLarge: "12px",
  borderRadius3XLarge: "16px",
  borderRadius4XLarge: "24px",
  borderRadius5XLarge: "32px",
  borderRadius6XLarge: "40px",
  borderRadiusCircular: "10000px"
};

// node_modules/@fluentui/tokens/lib/global/curves.js
var curves = {
  curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
  curveAccelerateMid: "cubic-bezier(1,0,1,1)",
  curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
  curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
  curveDecelerateMid: "cubic-bezier(0,0,0,1)",
  curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
  curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
  curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
  curveLinear: "cubic-bezier(0,0,1,1)"
};

// node_modules/@fluentui/tokens/lib/global/durations.js
var durations = {
  durationUltraFast: "50ms",
  durationFaster: "100ms",
  durationFast: "150ms",
  durationNormal: "200ms",
  durationGentle: "250ms",
  durationSlow: "300ms",
  durationSlower: "400ms",
  durationUltraSlow: "500ms"
};

// node_modules/@fluentui/tokens/lib/global/fonts.js
var fontSizes = {
  fontSizeBase100: "10px",
  fontSizeBase200: "12px",
  fontSizeBase300: "14px",
  fontSizeBase400: "16px",
  fontSizeBase500: "20px",
  fontSizeBase600: "24px",
  fontSizeHero700: "28px",
  fontSizeHero800: "32px",
  fontSizeHero900: "40px",
  fontSizeHero1000: "68px"
};
var lineHeights = {
  lineHeightBase100: "14px",
  lineHeightBase200: "16px",
  lineHeightBase300: "20px",
  lineHeightBase400: "22px",
  lineHeightBase500: "28px",
  lineHeightBase600: "32px",
  lineHeightHero700: "36px",
  lineHeightHero800: "40px",
  lineHeightHero900: "52px",
  lineHeightHero1000: "92px"
};
var fontWeights = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700
};
var fontFamilies = {
  fontFamilyBase: "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
  fontFamilyNumeric: "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
};

// node_modules/@fluentui/tokens/lib/global/spacings.js
var spacings = {
  none: "0",
  xxs: "2px",
  xs: "4px",
  sNudge: "6px",
  s: "8px",
  mNudge: "10px",
  m: "12px",
  l: "16px",
  xl: "20px",
  xxl: "24px",
  xxxl: "32px"
};
var horizontalSpacings = {
  spacingHorizontalNone: spacings.none,
  spacingHorizontalXXS: spacings.xxs,
  spacingHorizontalXS: spacings.xs,
  spacingHorizontalSNudge: spacings.sNudge,
  spacingHorizontalS: spacings.s,
  spacingHorizontalMNudge: spacings.mNudge,
  spacingHorizontalM: spacings.m,
  spacingHorizontalL: spacings.l,
  spacingHorizontalXL: spacings.xl,
  spacingHorizontalXXL: spacings.xxl,
  spacingHorizontalXXXL: spacings.xxxl
};
var verticalSpacings = {
  spacingVerticalNone: spacings.none,
  spacingVerticalXXS: spacings.xxs,
  spacingVerticalXS: spacings.xs,
  spacingVerticalSNudge: spacings.sNudge,
  spacingVerticalS: spacings.s,
  spacingVerticalMNudge: spacings.mNudge,
  spacingVerticalM: spacings.m,
  spacingVerticalL: spacings.l,
  spacingVerticalXL: spacings.xl,
  spacingVerticalXXL: spacings.xxl,
  spacingVerticalXXXL: spacings.xxxl
};

// node_modules/@fluentui/tokens/lib/global/strokeWidths.js
var strokeWidths = {
  strokeWidthThin: "1px",
  strokeWidthThick: "2px",
  strokeWidthThicker: "3px",
  strokeWidthThickest: "4px"
};

// node_modules/@fluentui/tokens/lib/utils/shadows.js
function createShadowTokens(ambientColor, keyColor, tokenSuffix = "") {
  return {
    [`shadow2${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 1px 2px ${keyColor}`,
    [`shadow4${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 2px 4px ${keyColor}`,
    [`shadow8${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 4px 8px ${keyColor}`,
    [`shadow16${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 8px 16px ${keyColor}`,
    [`shadow28${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 14px 28px ${keyColor}`,
    [`shadow64${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 32px 64px ${keyColor}`
  };
}

// node_modules/@fluentui/tokens/lib/utils/createLightTheme.js
var createLightTheme = (brand) => {
  const colorTokens = generateColorTokens(brand);
  return {
    ...borderRadius,
    ...fontSizes,
    ...lineHeights,
    ...fontFamilies,
    ...fontWeights,
    ...strokeWidths,
    ...horizontalSpacings,
    ...verticalSpacings,
    ...durations,
    ...curves,
    ...colorTokens,
    ...colorPaletteTokens,
    ...colorStatusTokens,
    ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
    ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, "Brand")
  };
};

// node_modules/@fluentui/tokens/lib/global/brandColors.js
var brandWeb = {
  10: `#061724`,
  20: `#082338`,
  30: `#0a2e4a`,
  40: `#0c3b5e`,
  50: `#0e4775`,
  60: `#0f548c`,
  70: `#115ea3`,
  80: `#0f6cbd`,
  90: `#2886de`,
  100: `#479ef5`,
  110: `#62abf5`,
  120: `#77b7f7`,
  130: `#96c6fa`,
  140: `#b4d6fa`,
  150: `#cfe4fa`,
  160: `#ebf3fc`
};

// node_modules/@fluentui/tokens/lib/alias/darkColorPalette.js
var statusColorPaletteTokens2 = statusSharedColorNames.reduce((acc, sharedColor) => {
  const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
  const sharedColorTokens = {
    [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].shade40,
    [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].shade30,
    [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].tint30,
    [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].tint40,
    [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].tint20,
    [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].tint30,
    [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].tint20
  };
  return Object.assign(acc, sharedColorTokens);
}, {});
statusColorPaletteTokens2.colorPaletteRedForeground3 = statusSharedColors.red.tint30;
statusColorPaletteTokens2.colorPaletteRedBorder2 = statusSharedColors.red.tint30;
statusColorPaletteTokens2.colorPaletteGreenForeground3 = statusSharedColors.green.tint40;
statusColorPaletteTokens2.colorPaletteGreenBorder2 = statusSharedColors.green.tint40;
statusColorPaletteTokens2.colorPaletteDarkOrangeForeground3 = statusSharedColors.darkOrange.tint30;
statusColorPaletteTokens2.colorPaletteDarkOrangeBorder2 = statusSharedColors.darkOrange.tint30;
statusColorPaletteTokens2.colorPaletteRedForegroundInverted = statusSharedColors.red.primary;
statusColorPaletteTokens2.colorPaletteGreenForegroundInverted = statusSharedColors.green.primary;
statusColorPaletteTokens2.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.shade30;
var personaColorPaletteTokens2 = personaSharedColorNames.reduce((acc, sharedColor) => {
  const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
  const sharedColorTokens = {
    [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].shade30,
    [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].tint40,
    [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].tint30
  };
  return Object.assign(acc, sharedColorTokens);
}, {});
personaColorPaletteTokens2.colorPaletteDarkRedBackground2 = personaSharedColors.darkRed.shade20;
personaColorPaletteTokens2.colorPalettePlumBackground2 = personaSharedColors.plum.shade20;
var colorPaletteTokens2 = {
  ...statusColorPaletteTokens2,
  ...personaColorPaletteTokens2
};
var colorStatusTokens2 = Object.entries(statusColorMapping).reduce((acc, [statusColor, sharedColor]) => {
  const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
  const statusColorTokens = {
    [`colorStatus${color}Background1`]: mappedStatusColors[sharedColor].shade40,
    [`colorStatus${color}Background2`]: mappedStatusColors[sharedColor].shade30,
    [`colorStatus${color}Background3`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}Foreground1`]: mappedStatusColors[sharedColor].tint30,
    [`colorStatus${color}Foreground2`]: mappedStatusColors[sharedColor].tint40,
    [`colorStatus${color}Foreground3`]: mappedStatusColors[sharedColor].tint20,
    [`colorStatus${color}BorderActive`]: mappedStatusColors[sharedColor].tint30,
    [`colorStatus${color}ForegroundInverted`]: mappedStatusColors[sharedColor].shade10,
    [`colorStatus${color}Border1`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}Border2`]: mappedStatusColors[sharedColor].tint20
  };
  return Object.assign(acc, statusColorTokens);
}, {});
colorStatusTokens2.colorStatusDangerBackground3Hover = mappedStatusColors[statusColorMapping.danger].shade10;
colorStatusTokens2.colorStatusDangerBackground3Pressed = mappedStatusColors[statusColorMapping.danger].shade20;
colorStatusTokens2.colorStatusDangerForeground3 = mappedStatusColors[statusColorMapping.danger].tint40;
colorStatusTokens2.colorStatusDangerBorder2 = mappedStatusColors[statusColorMapping.danger].tint30;
colorStatusTokens2.colorStatusSuccessForeground3 = mappedStatusColors[statusColorMapping.success].tint40;
colorStatusTokens2.colorStatusSuccessBorder2 = mappedStatusColors[statusColorMapping.success].tint40;
colorStatusTokens2.colorStatusWarningForegroundInverted = mappedStatusColors[statusColorMapping.warning].shade20;

// node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js
var webLightTheme = createLightTheme(brandWeb);

// node_modules/@fluentui/tokens/lib/alias/darkColor.js
var generateColorTokens2 = (brand) => ({
  colorNeutralForeground1: white,
  colorNeutralForeground1Hover: white,
  colorNeutralForeground1Pressed: white,
  colorNeutralForeground1Selected: white,
  colorNeutralForeground2: grey[84],
  colorNeutralForeground2Hover: white,
  colorNeutralForeground2Pressed: white,
  colorNeutralForeground2Selected: white,
  colorNeutralForeground2BrandHover: brand[100],
  colorNeutralForeground2BrandPressed: brand[90],
  colorNeutralForeground2BrandSelected: brand[100],
  colorNeutralForeground3: grey[68],
  colorNeutralForeground3Hover: grey[84],
  colorNeutralForeground3Pressed: grey[84],
  colorNeutralForeground3Selected: grey[84],
  colorNeutralForeground3BrandHover: brand[100],
  colorNeutralForeground3BrandPressed: brand[90],
  colorNeutralForeground3BrandSelected: brand[100],
  colorNeutralForeground4: grey[60],
  colorNeutralForeground5: grey[68],
  colorNeutralForeground5Hover: white,
  colorNeutralForeground5Pressed: white,
  colorNeutralForeground5Selected: white,
  colorNeutralForegroundDisabled: grey[36],
  colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
  colorBrandForegroundLink: brand[100],
  colorBrandForegroundLinkHover: brand[110],
  colorBrandForegroundLinkPressed: brand[90],
  colorBrandForegroundLinkSelected: brand[100],
  colorNeutralForeground2Link: grey[84],
  colorNeutralForeground2LinkHover: white,
  colorNeutralForeground2LinkPressed: white,
  colorNeutralForeground2LinkSelected: white,
  colorCompoundBrandForeground1: brand[100],
  colorCompoundBrandForeground1Hover: brand[110],
  colorCompoundBrandForeground1Pressed: brand[90],
  colorBrandForeground1: brand[100],
  colorBrandForeground2: brand[110],
  colorBrandForeground2Hover: brand[130],
  colorBrandForeground2Pressed: brand[160],
  colorNeutralForeground1Static: grey[14],
  colorNeutralForegroundStaticInverted: white,
  colorNeutralForegroundInverted: grey[14],
  colorNeutralForegroundInvertedHover: grey[14],
  colorNeutralForegroundInvertedPressed: grey[14],
  colorNeutralForegroundInvertedSelected: grey[14],
  colorNeutralForegroundInverted2: grey[14],
  colorNeutralForegroundOnBrand: white,
  colorNeutralForegroundInvertedLink: white,
  colorNeutralForegroundInvertedLinkHover: white,
  colorNeutralForegroundInvertedLinkPressed: white,
  colorNeutralForegroundInvertedLinkSelected: white,
  colorBrandForegroundInverted: brand[80],
  colorBrandForegroundInvertedHover: brand[70],
  colorBrandForegroundInvertedPressed: brand[60],
  colorBrandForegroundOnLight: brand[80],
  colorBrandForegroundOnLightHover: brand[70],
  colorBrandForegroundOnLightPressed: brand[50],
  colorBrandForegroundOnLightSelected: brand[60],
  colorNeutralBackground1: grey[16],
  colorNeutralBackground1Hover: grey[24],
  colorNeutralBackground1Pressed: grey[12],
  colorNeutralBackground1Selected: grey[22],
  colorNeutralBackground2: grey[12],
  colorNeutralBackground2Hover: grey[20],
  colorNeutralBackground2Pressed: grey[8],
  colorNeutralBackground2Selected: grey[18],
  colorNeutralBackground3: grey[8],
  colorNeutralBackground3Hover: grey[16],
  colorNeutralBackground3Pressed: grey[4],
  colorNeutralBackground3Selected: grey[14],
  colorNeutralBackground4: grey[4],
  colorNeutralBackground4Hover: grey[12],
  colorNeutralBackground4Pressed: black,
  colorNeutralBackground4Selected: grey[10],
  colorNeutralBackground5: black,
  colorNeutralBackground5Hover: grey[8],
  colorNeutralBackground5Pressed: grey[2],
  colorNeutralBackground5Selected: grey[6],
  colorNeutralBackground6: grey[20],
  colorNeutralBackground7: "#00000000",
  colorNeutralBackground7Hover: grey[10],
  colorNeutralBackground7Pressed: grey[4],
  colorNeutralBackground7Selected: "#00000000",
  colorNeutralBackground8: grey[16],
  colorNeutralBackgroundInverted: white,
  colorNeutralBackgroundInvertedHover: grey[96],
  colorNeutralBackgroundInvertedPressed: grey[88],
  colorNeutralBackgroundInvertedSelected: grey[92],
  colorNeutralBackgroundStatic: grey[24],
  colorNeutralBackgroundAlpha: grey10Alpha[50],
  colorNeutralBackgroundAlpha2: grey12Alpha[70],
  colorSubtleBackground: "transparent",
  colorSubtleBackgroundHover: grey[22],
  colorSubtleBackgroundPressed: grey[18],
  colorSubtleBackgroundSelected: grey[20],
  colorSubtleBackgroundLightAlphaHover: grey14Alpha[80],
  colorSubtleBackgroundLightAlphaPressed: grey14Alpha[50],
  colorSubtleBackgroundLightAlphaSelected: "transparent",
  colorSubtleBackgroundInverted: "transparent",
  colorSubtleBackgroundInvertedHover: blackAlpha[10],
  colorSubtleBackgroundInvertedPressed: blackAlpha[30],
  colorSubtleBackgroundInvertedSelected: blackAlpha[20],
  colorTransparentBackground: "transparent",
  colorTransparentBackgroundHover: "transparent",
  colorTransparentBackgroundPressed: "transparent",
  colorTransparentBackgroundSelected: "transparent",
  colorNeutralBackgroundDisabled: grey[8],
  colorNeutralBackgroundDisabled2: grey[16],
  colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
  colorNeutralStencil1: grey[34],
  colorNeutralStencil2: grey[20],
  colorNeutralStencil1Alpha: whiteAlpha[10],
  colorNeutralStencil2Alpha: whiteAlpha[5],
  colorBackgroundOverlay: blackAlpha[50],
  colorScrollbarOverlay: whiteAlpha[60],
  colorBrandBackground: brand[70],
  colorBrandBackgroundHover: brand[80],
  colorBrandBackgroundPressed: brand[40],
  colorBrandBackgroundSelected: brand[60],
  colorCompoundBrandBackground: brand[100],
  colorCompoundBrandBackgroundHover: brand[110],
  colorCompoundBrandBackgroundPressed: brand[90],
  colorBrandBackgroundStatic: brand[80],
  colorBrandBackground2: brand[20],
  colorBrandBackground2Hover: brand[40],
  colorBrandBackground2Pressed: brand[10],
  colorBrandBackground3Static: brand[60],
  colorBrandBackground4Static: brand[40],
  colorBrandBackgroundInverted: white,
  colorBrandBackgroundInvertedHover: brand[160],
  colorBrandBackgroundInvertedPressed: brand[140],
  colorBrandBackgroundInvertedSelected: brand[150],
  colorNeutralCardBackground: grey[20],
  colorNeutralCardBackgroundHover: grey[24],
  colorNeutralCardBackgroundPressed: grey[18],
  colorNeutralCardBackgroundSelected: grey[22],
  colorNeutralCardBackgroundDisabled: grey[8],
  colorNeutralStrokeAccessible: grey[68],
  colorNeutralStrokeAccessibleHover: grey[74],
  colorNeutralStrokeAccessiblePressed: grey[70],
  colorNeutralStrokeAccessibleSelected: brand[100],
  colorNeutralStroke1: grey[40],
  colorNeutralStroke1Hover: grey[46],
  colorNeutralStroke1Pressed: grey[42],
  colorNeutralStroke1Selected: grey[44],
  colorNeutralStroke2: grey[32],
  colorNeutralStroke3: grey[24],
  colorNeutralStroke4: grey[24],
  colorNeutralStroke4Hover: grey[18],
  colorNeutralStroke4Pressed: grey[14],
  colorNeutralStroke4Selected: grey[24],
  colorNeutralStrokeSubtle: grey[4],
  colorNeutralStrokeOnBrand: grey[16],
  colorNeutralStrokeOnBrand2: white,
  colorNeutralStrokeOnBrand2Hover: white,
  colorNeutralStrokeOnBrand2Pressed: white,
  colorNeutralStrokeOnBrand2Selected: white,
  colorBrandStroke1: brand[100],
  colorBrandStroke2: brand[50],
  colorBrandStroke2Hover: brand[50],
  colorBrandStroke2Pressed: brand[30],
  colorBrandStroke2Contrast: brand[50],
  colorCompoundBrandStroke: brand[100],
  colorCompoundBrandStrokeHover: brand[110],
  colorCompoundBrandStrokePressed: brand[90],
  colorNeutralStrokeDisabled: grey[26],
  colorNeutralStrokeDisabled2: grey[24],
  colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
  colorTransparentStroke: "transparent",
  colorTransparentStrokeInteractive: "transparent",
  colorTransparentStrokeDisabled: "transparent",
  colorNeutralStrokeAlpha: whiteAlpha[10],
  colorNeutralStrokeAlpha2: whiteAlpha[20],
  colorStrokeFocus1: black,
  colorStrokeFocus2: white,
  colorNeutralShadowAmbient: "rgba(0,0,0,0.24)",
  colorNeutralShadowKey: "rgba(0,0,0,0.28)",
  colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.12)",
  colorNeutralShadowKeyLighter: "rgba(0,0,0,0.14)",
  colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.40)",
  colorNeutralShadowKeyDarker: "rgba(0,0,0,0.48)",
  colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
  colorBrandShadowKey: "rgba(0,0,0,0.25)"
});

// node_modules/@fluentui/tokens/lib/utils/createDarkTheme.js
var createDarkTheme = (brand) => {
  const colorTokens = generateColorTokens2(brand);
  return {
    ...borderRadius,
    ...fontSizes,
    ...lineHeights,
    ...fontFamilies,
    ...fontWeights,
    ...strokeWidths,
    ...horizontalSpacings,
    ...verticalSpacings,
    ...durations,
    ...curves,
    ...colorTokens,
    ...colorPaletteTokens2,
    ...colorStatusTokens2,
    ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
    ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, "Brand")
  };
};

// node_modules/@fluentui/tokens/lib/themes/web/darkTheme.js
var webDarkTheme = createDarkTheme(brandWeb);

// src/Browser.FluentUIWebComponents/web/theme.ts
function resolveTheme(theme) {
  switch (theme) {
    case "light":
      return webLightTheme;
    case "dark":
      return webDarkTheme;
    default: {
      const unsupported = theme;
      throw new Error(`Unsupported browser theme: ${String(unsupported)}`);
    }
  }
}
var BrowserTheme = class {
  #element;
  #preference = matchMedia("(prefers-color-scheme: dark)");
  #onChanged;
  #previousColorScheme;
  #previousColorSchemePriority;
  #listening = false;
  #disposed = false;
  constructor(element, onChanged) {
    if (element === document.body || !document.body?.contains(element)) {
      throw new Error("Use a dedicated light-DOM mount element inside document.body for the MAUI app");
    }
    this.#element = element;
    this.#onChanged = onChanged;
    this.#previousColorScheme = element.style.getPropertyValue("color-scheme");
    this.#previousColorSchemePriority = element.style.getPropertyPriority("color-scheme");
    this.apply(this.getSystemTheme());
  }
  getSystemTheme() {
    return this.#preference.matches ? "dark" : "light";
  }
  getColor(token, theme) {
    const preset = resolveTheme(theme);
    switch (token) {
      case "colorBrandForeground1":
      case "colorNeutralForeground1":
      case "colorNeutralForeground3":
      case "colorNeutralBackground3":
      case "colorNeutralBackground1":
      case "colorNeutralStroke2":
        return preset[token];
      default:
        throw new Error(`Unsupported Fluent color token: ${token}`);
    }
  }
  start() {
    if (this.#disposed) {
      throw new Error("Browser theme is disposed");
    }
    if (!this.#listening) {
      this.#preference.addEventListener("change", this.#changed);
      this.#listening = true;
    }
    return this.getSystemTheme();
  }
  #changed = () => {
    if (!this.#disposed) {
      this.#onChanged(this.getSystemTheme());
    }
  };
  apply(theme) {
    const preset = resolveTheme(theme);
    if (this.#disposed) {
      return;
    }
    setTheme(preset, this.#element);
    this.#element.style.setProperty("color-scheme", theme);
  }
  dispose() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    this.#preference.removeEventListener("change", this.#changed);
    this.#listening = false;
    setTheme(null, this.#element);
    this.#element.style.setProperty("color-scheme", this.#previousColorScheme, this.#previousColorSchemePriority);
  }
};

// node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

// node_modules/@fluentui/web-components/dist/esm/utils/template-helpers.js
function staticallyCompose(item) {
  if (!item) {
    return InlineTemplateDirective.empty;
  }
  if (typeof item === "string") {
    return new InlineTemplateDirective(item);
  }
  if ("inline" in item) {
    return item.inline();
  }
  return item;
}

// node_modules/@fluentui/web-components/dist/esm/patterns/start-end.js
var StartEnd = class {
};
function endSlotTemplate(options) {
  return html` <slot name="end" ${ref("end")}>${staticallyCompose(options.end)}</slot> `.inline();
}
function startSlotTemplate(options) {
  return html` <slot name="start" ${ref("start")}>${staticallyCompose(options.start)}</slot> `.inline();
}

// node_modules/@fluentui/web-components/dist/esm/utils/apply-mixins.js
function applyMixins(derivedCtor, ...baseCtors) {
  const derivedAttributes = AttributeConfiguration.locate(derivedCtor);
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== "constructor") {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      }
    });
    const baseAttributes = AttributeConfiguration.locate(baseCtor);
    baseAttributes.forEach((x) => derivedAttributes.push(x));
  });
}

// node_modules/@fluentui/web-components/dist/esm/utils/autofocus.js
function maybeSetAutoFocus(element) {
  const doc = element.ownerDocument;
  if (element?.isConnected && element?.hasAttribute("autofocus") && // Note: opacity=0 is considered visible based on the native `autofocus` implementation
  element?.checkVisibility?.({ contentVisibilityAuto: true, visibilityProperty: true }) && [null, element, doc.body, doc.documentElement].includes(doc.activeElement)) {
    Updates.enqueue(() => {
      element.focus();
    });
  }
}

// node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js
var FluentDesignSystem = Object.freeze({
  prefix: "fluent",
  shadowRootMode: "open",
  registry: globalThis.customElements
});

// node_modules/@fluentui/web-components/dist/esm/text-input/text-input.options.js
var TextInputType = {
  email: "email",
  password: "password",
  tel: "tel",
  text: "text",
  url: "url"
};
var ImplicitSubmissionBlockingTypes = [
  "date",
  "datetime-local",
  "email",
  "month",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "time",
  "url",
  "week"
];
var tagName = `${FluentDesignSystem.prefix}-text-input`;

// node_modules/@fluentui/web-components/dist/esm/text-input/text-input.base.js
var BaseTextInput = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.type = TextInputType.text;
    this.dirtyValue = false;
    this.elementInternals = this.attachInternals();
  }
  /**
   * Tracks the current value of the input.
   *
   * @param prev - the previous value
   * @param next - the next value
   *
   * @internal
   */
  currentValueChanged(prev, next2) {
    this.value = next2;
  }
  /**
   * Updates the control label visibility based on the presence of default slotted content.
   *
   * @internal
   */
  defaultSlottedNodesChanged(prev, next2) {
    Updates.enqueue(() => {
      if (this.controlLabel) {
        this.controlLabel.hidden = !next2?.some((node) => node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE && !!node.textContent?.trim());
      }
    });
  }
  /**
   * Sets the value of the element to the initial value.
   *
   * @internal
   */
  initialValueChanged() {
    if (!this.dirtyValue) {
      this.value = this.initialValue;
    }
  }
  /**
   * Syncs the `ElementInternals.ariaReadOnly` property when the `readonly` property changes.
   *
   * @internal
   */
  readOnlyChanged() {
    if (this.$fastController.isConnected) {
      this.elementInternals.ariaReadOnly = `${!!this.readOnly}`;
    }
  }
  /**
   * Syncs the element's internal `aria-required` state with the `required` attribute.
   *
   * @param previous - the previous required state
   * @param next - the current required state
   *
   * @internal
   */
  requiredChanged(previous, next2) {
    if (this.$fastController.isConnected) {
      this.elementInternals.ariaRequired = `${!!next2}`;
    }
  }
  /**
   * Calls the `setValidity` method when the control reference changes.
   *
   * @param prev - the previous control reference
   * @param next - the current control reference
   *
   * @internal
   */
  controlChanged(prev, next2) {
    Updates.enqueue(() => {
      if (this.$fastController.isConnected) {
        this.setValidity();
      }
    });
  }
  static {
    this.formAssociated = true;
  }
  /**
   * The element's validity state.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/validity | `ElementInternals.validity`} property.
   */
  get validity() {
    return this.elementInternals.validity;
  }
  /**
   * The validation message.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/validationMessage | `ElementInternals.validationMessage`} property.
   */
  get validationMessage() {
    return this.elementInternals.validationMessage || this.control.validationMessage;
  }
  /**
   * The current value of the input.
   * @public
   */
  get value() {
    Observable.track(this, "value");
    return this.currentValue;
  }
  set value(value) {
    this.currentValue = value;
    if (this.elementInternals && this.control) {
      this.control.value = value ?? "";
      this.setFormValue(value);
      this.setValidity();
      Observable.notify(this, "value");
    }
  }
  /**
   * Determines if the control can be submitted for constraint validation.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/willValidate | `ElementInternals.willValidate`} property.
   */
  get willValidate() {
    return this.elementInternals.willValidate;
  }
  /**
   * The associated form element.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/form | `ElementInternals.form`} property.
   */
  get form() {
    return this.elementInternals.form;
  }
  /**
   * Change event handler for inner control.
   *
   * @internal
   * @privateRemarks
   * "Change" events are not `composable` so they will not permeate the shadow DOM boundary. This function effectively
   * proxies the change event, emitting a `change` event whenever the internal control emits a `change` event.
   */
  changeHandler(e) {
    this.setValidity();
    this.$emit("change", e, {
      bubbles: true,
      composed: true
    });
    return true;
  }
  /**
   * Checks the validity of the element and returns the result.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/checkValidity | `HTMLInputElement.checkValidity()`} method.
   */
  checkValidity() {
    return this.elementInternals.checkValidity();
  }
  /**
   * Clicks the inner control when the component is clicked.
   *
   * @param e - the event object
   */
  clickHandler(e) {
    if (e.target === this) {
      this.control?.click();
    }
    return true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setFormValue(this.value);
    this.setValidity();
    maybeSetAutoFocus(this);
  }
  /**
   * Resets the value to its initial value when the form is reset.
   *
   * @internal
   */
  formResetCallback() {
    this.value = this.initialValue;
    this.dirtyValue = false;
  }
  /**
   * Handles implicit form submission when the user presses the "Enter" key.
   *
   * @internal
   */
  implicitSubmit() {
    if (!this.elementInternals.form) {
      return;
    }
    if (this.elementInternals.form.elements.length === 1) {
      this.elementInternals.form.requestSubmit();
      return;
    }
    const formElements = [...this.elementInternals.form.elements];
    const submitButton = formElements.find((x) => x.getAttribute("type") === "submit");
    if (submitButton) {
      submitButton.click();
      return;
    }
    const filteredElements = formElements.filter((x) => ImplicitSubmissionBlockingTypes.includes(x.getAttribute("type") ?? ""));
    if (filteredElements.length > 1) {
      return;
    }
    this.elementInternals.form.requestSubmit();
  }
  /**
   * Handles the internal control's `input` event.
   *
   * @internal
   */
  inputHandler(e) {
    this.dirtyValue = true;
    this.value = this.control.value;
    return true;
  }
  /**
   * Handles the internal control's `keydown` event.
   *
   * @param e - the event object
   * @internal
   */
  keydownHandler(e) {
    if (e.key === "Enter") {
      this.implicitSubmit();
    }
    return true;
  }
  /**
   * Selects all the text in the text field.
   *
   * @public
   * @privateRemarks
   * The `select` event does not permeate the shadow DOM boundary. This function effectively proxies the event,
   * emitting a `select` event whenever the internal control emits a `select` event
   *
   */
  select() {
    this.control.select();
    this.$emit("select");
  }
  /**
   * Sets the custom validity message.
   * @param message - The message to set
   *
   * @public
   */
  setCustomValidity(message) {
    this.elementInternals.setValidity({ customError: true }, message);
    this.reportValidity();
  }
  /**
   * Reports the validity of the element.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/reportValidity | `HTMLInputElement.reportValidity()`} method.
   */
  reportValidity() {
    return this.elementInternals.reportValidity();
  }
  /**
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/setFormValue | `ElementInternals.setFormValue()`} method.
   *
   * @internal
   */
  setFormValue(value, state) {
    this.elementInternals?.setFormValue(value, value ?? state);
  }
  /**
   * Sets the validity of the control.
   *
   * @param flags - Validity flags. If not provided, the control's `validity` will be used.
   * @param message - Optional message to supply. If not provided, the control's `validationMessage` will be used. If the control does not have a `validationMessage`, the message will be empty.
   * @param anchor - Optional anchor to use for the validation message. If not provided, the control will be used.
   *
   * @internal
   */
  setValidity(flags, message, anchor2) {
    if (this.elementInternals && this.control) {
      if (this.disabled) {
        this.elementInternals.setValidity({});
        return;
      }
      this.elementInternals.setValidity(flags ?? this.control.validity, message ?? this.validationMessage, anchor2 ?? this.control);
    }
  }
};
__decorate([
  attr
], BaseTextInput.prototype, "autocomplete", void 0);
__decorate([
  attr({ attribute: "current-value" })
], BaseTextInput.prototype, "currentValue", void 0);
__decorate([
  observable
], BaseTextInput.prototype, "defaultSlottedNodes", void 0);
__decorate([
  attr
], BaseTextInput.prototype, "dirname", void 0);
__decorate([
  attr({ mode: "boolean" })
], BaseTextInput.prototype, "disabled", void 0);
__decorate([
  attr({ attribute: "form" })
], BaseTextInput.prototype, "formAttribute", void 0);
__decorate([
  attr({ attribute: "value", mode: "fromView" })
], BaseTextInput.prototype, "initialValue", void 0);
__decorate([
  attr
], BaseTextInput.prototype, "list", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], BaseTextInput.prototype, "maxlength", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], BaseTextInput.prototype, "minlength", void 0);
__decorate([
  attr({ mode: "boolean" })
], BaseTextInput.prototype, "multiple", void 0);
__decorate([
  attr
], BaseTextInput.prototype, "name", void 0);
__decorate([
  attr
], BaseTextInput.prototype, "pattern", void 0);
__decorate([
  attr
], BaseTextInput.prototype, "placeholder", void 0);
__decorate([
  attr({ attribute: "readonly", mode: "boolean" })
], BaseTextInput.prototype, "readOnly", void 0);
__decorate([
  attr({ mode: "boolean" })
], BaseTextInput.prototype, "required", void 0);
__decorate([
  attr({ converter: nullableNumberConverter })
], BaseTextInput.prototype, "size", void 0);
__decorate([
  attr({
    converter: {
      fromView: (value) => typeof value === "string" ? ["true", ""].includes(value.trim().toLowerCase()) : null,
      toView: (value) => value.toString()
    }
  })
], BaseTextInput.prototype, "spellcheck", void 0);
__decorate([
  attr
], BaseTextInput.prototype, "type", void 0);
__decorate([
  observable
], BaseTextInput.prototype, "control", void 0);
__decorate([
  observable
], BaseTextInput.prototype, "controlLabel", void 0);

// node_modules/@fluentui/web-components/dist/esm/text-input/text-input.js
var TextInput = class extends BaseTextInput {
};
__decorate([
  attr
], TextInput.prototype, "appearance", void 0);
__decorate([
  attr({ attribute: "control-size" })
], TextInput.prototype, "controlSize", void 0);
applyMixins(TextInput, StartEnd);

// src/Browser.FluentUIWebComponents/web/input.ts
var BrowserTextInput = class {
  #host;
  #abort = new AbortController();
  #callbacks;
  #composing = false;
  #pendingValue;
  #selection;
  #attributes = /* @__PURE__ */ new Map();
  #lastText;
  #lastSelection = "";
  #disposed = false;
  constructor(host, callbacks) {
    if (!(host instanceof TextInput) || !host.shadowRoot) {
      throw new Error("Expected a registered Fluent text-input");
    }
    this.#host = host;
    this.#callbacks = callbacks;
    host.setAttribute("data-maui-input", "");
    const options = { signal: this.#abort.signal };
    host.addEventListener("compositionstart", () => {
      this.#composing = true;
    }, options);
    host.addEventListener("compositionend", () => {
      this.#composing = false;
      if (this.#pendingValue !== void 0) {
        const value = this.#pendingValue;
        this.#pendingValue = void 0;
        this.setValue(value);
      }
      this.flush();
      this.#input();
    }, options);
    host.addEventListener("input", this.#input, options);
    host.addEventListener("focusin", () => {
      this.#callbacks.onFocus(true);
      this.#publishSelection();
    }, options);
    host.addEventListener("focusout", (event) => {
      const next2 = event.relatedTarget;
      if (!(next2 instanceof Node) || !host.shadowRoot?.contains(next2)) {
        this.#callbacks.onFocus(false);
      }
    }, options);
    host.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      if (this.#composing || event.isComposing || event.keyCode === 229) {
        event.stopPropagation();
        return;
      }
      this.#callbacks.onCompleted();
    }, { ...options, capture: true });
    for (const name of ["selectionchange", "select", "keyup", "pointerup"]) {
      host.shadowRoot.addEventListener(name, this.#publishSelection, { ...options, capture: true });
    }
  }
  #control() {
    return this.#host.shadowRoot?.querySelector('input[part~="control"]') ?? null;
  }
  flush() {
    Updates.process();
    const input = this.#control();
    if (input) {
      for (const [name, value] of this.#attributes) {
        if (value === null && input.hasAttribute(name)) {
          input.removeAttribute(name);
        } else if (value !== null && input.getAttribute(name) !== value) {
          input.setAttribute(name, value);
        }
      }
    }
    if (!this.#composing && this.#selection) {
      const control = this.#control();
      if (control && control.selectionStart !== null) {
        const { start, length } = this.#selection;
        this.#selection = void 0;
        const end = Math.min(control.value.length, start + length);
        const position = Math.min(start, end);
        if (control.selectionStart !== position || control.selectionEnd !== end) {
          control.setSelectionRange(position, end);
        }
      }
    }
  }
  setValue(value) {
    if (this.#composing) {
      this.#pendingValue = value;
      return;
    }
    if ((this.#host.value ?? "") !== value) {
      this.#host.value = value;
      this.#notifySelection(false);
    }
    this.#lastText = value;
  }
  setAttribute(name, value) {
    this.#attributes.set(name, value);
    this.flush();
  }
  setSelection(start, length) {
    if (!Number.isInteger(start) || !Number.isInteger(length) || start < 0 || length < 0) {
      throw new Error("Invalid input selection");
    }
    this.#selection = { start, length };
    this.flush();
  }
  focus(focused) {
    this.flush();
    const control = this.#control();
    if (!control || !this.#host.isConnected) {
      return false;
    }
    if (focused) {
      this.#host.focus();
    } else {
      control.blur();
    }
    return this.#host.shadowRoot?.activeElement === control;
  }
  #input = () => {
    if (this.#composing || this.#disposed) {
      return;
    }
    const control = this.#control();
    if (!control) {
      return;
    }
    const start = control.selectionStart ?? 0;
    const length = (control.selectionEnd ?? start) - start;
    if (control.value !== this.#lastText) {
      this.#lastText = control.value;
      this.#callbacks.onText({ value: control.value, start, length });
    }
    this.#publishSelection();
  };
  #publishSelection = () => {
    this.#notifySelection(true);
  };
  #notifySelection(requireFocus) {
    if (this.#disposed || this.#composing) {
      return;
    }
    const control = this.#control();
    if (!control || requireFocus && this.#host.shadowRoot?.activeElement !== control) {
      return;
    }
    const start = control.selectionStart ?? 0;
    const length = (control.selectionEnd ?? start) - start;
    const key = `${start}:${length}`;
    if (key !== this.#lastSelection) {
      this.#lastSelection = key;
      this.#callbacks.onSelection({ start, length });
    }
  }
  dispose() {
    this.#disposed = true;
    this.#abort.abort();
    this.#pendingValue = void 0;
    this.#selection = void 0;
    this.#host.removeAttribute("data-maui-input");
  }
};

// src/Browser.FluentUIWebComponents/web/input.styles.ts
function createInputStyles() {
  const style = document.createElement("style");
  style.textContent = `
        fluent-text-input[data-maui-input]::part(control) {
            font: inherit;
            text-align: inherit;
            letter-spacing: inherit;
        }
        fluent-text-input[data-maui-input][data-maui-input-color]::part(control) {
            color: var(--maui-input-color);
        }
        fluent-text-input[data-maui-input][data-maui-placeholder-color]::part(control)::placeholder {
            color: var(--maui-placeholder-color);
        }
        fluent-text-input[data-maui-input]::part(root) {
            min-height: 32px;
            height: 100%;
        }
    `;
  return style;
}

// src/Browser.FluentUIWebComponents/web/images.ts
var BrowserImages = class {
  constructor(resolve, complete, report) {
    this.resolve = resolve;
    this.complete = complete;
    this.report = report;
  }
  resolve;
  complete;
  report;
  requests = /* @__PURE__ */ new Map();
  aspects = /* @__PURE__ */ new Map();
  disposed = false;
  setSource(id3, element, name, request) {
    if (this.disposed) {
      return;
    }
    this.clear(id3);
    if (!name) {
      return;
    }
    const image = element.ownerDocument.createElement("img");
    image.alt = "";
    Object.assign(image.style, {
      display: "block",
      width: "100%",
      height: "100%",
      minWidth: "0",
      minHeight: "0",
      maxWidth: "none",
      maxHeight: "none",
      objectPosition: "center"
    });
    const current = () => !this.disposed && this.requests.get(id3) === state;
    const finish = (success, message) => {
      if (!current() || state.settled) {
        return;
      }
      state.settled = true;
      unlisten();
      if (!success) {
        image.removeAttribute("src");
        image.remove();
        this.report(message ?? `Unable to load image '${name}'.`);
      }
      if (current()) {
        this.complete(id3, request, success);
      }
    };
    const load = () => finish(true);
    const error = () => finish(false);
    const unlisten = () => {
      image.removeEventListener("load", load);
      image.removeEventListener("error", error);
    };
    const state = { request, image, load, error, settled: false };
    this.requests.set(id3, state);
    this.applyAspect(id3, image);
    image.addEventListener("load", load);
    image.addEventListener("error", error);
    try {
      const url = this.resolve(name);
      if (!current()) {
        return;
      }
      if (!url) {
        finish(false, `Image '${name}' is not in the asset catalog.`);
        return;
      }
      element.append(image);
      image.src = url;
    } catch (error2) {
      finish(false, `Unable to load image '${name}': ${String(error2)}`);
    }
  }
  setAspect(id3, aspect) {
    if (this.disposed) {
      return;
    }
    this.aspects.set(id3, aspect);
    const state = this.requests.get(id3);
    if (state) {
      this.applyAspect(id3, state.image);
    }
  }
  applyAspect(id3, image) {
    switch (this.aspects.get(id3)) {
      case "AspectFill":
        image.style.objectFit = "cover";
        break;
      case "Fill":
        image.style.objectFit = "fill";
        break;
      case "Center":
        image.style.objectFit = "none";
        break;
      default:
        image.style.objectFit = "contain";
        break;
    }
  }
  clear(id3) {
    const state = this.requests.get(id3);
    this.requests.delete(id3);
    if (!state) {
      return;
    }
    state.image.removeEventListener("load", state.load);
    state.image.removeEventListener("error", state.error);
    state.image.removeAttribute("src");
    state.image.remove();
  }
  release(id3) {
    this.clear(id3);
    this.aspects.delete(id3);
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    for (const id3 of this.requests.keys()) {
      this.clear(id3);
    }
    this.aspects.clear();
  }
};

// src/Browser.FluentUIWebComponents/web/fonts.ts
var nextFamily = 0;
var BrowserFonts = class {
  constructor(resolve, requestLayout, report) {
    this.resolve = resolve;
    this.requestLayout = requestLayout;
    this.report = report;
  }
  resolve;
  requestLayout;
  report;
  requests = /* @__PURE__ */ new Map();
  disposed = false;
  getFamily(filename) {
    const existing = this.requests.get(filename);
    if (existing) {
      return existing.family;
    }
    if (this.disposed) {
      return "sans-serif";
    }
    const state = { family: `maui-font-${++nextFamily}` };
    this.requests.set(filename, state);
    const current = () => !this.disposed && this.requests.get(filename) === state;
    const failed = (error) => {
      if (!current()) {
        return;
      }
      if (state.face) {
        document.fonts.delete(state.face);
      }
      try {
        this.report(`Unable to load font '${filename}': ${String(error)}`);
      } finally {
        if (current()) {
          this.requestLayout();
        }
      }
    };
    try {
      const url = this.resolve(filename);
      if (!current()) {
        return state.family;
      }
      if (!url) {
        throw new Error("Font is not in the asset catalog.");
      }
      const quotedUrl = url.replace(/["\\\n\r\f]/g, (character) => `\\${character.charCodeAt(0).toString(16)} `);
      const face = new FontFace(state.family, `url("${quotedUrl}")`);
      state.face = face;
      void face.load().then(() => {
        if (!current()) {
          return;
        }
        document.fonts.add(face);
        this.requestLayout();
      }).catch(failed);
    } catch (error) {
      failed(error);
    }
    return state.family;
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    for (const state of this.requests.values()) {
      if (state.face) {
        document.fonts.delete(state.face);
      }
    }
    this.requests.clear();
  }
};

// src/Browser.FluentUIWebComponents/web/bridge.ts
var DomBrowserBridge = class {
  // The existing JS-only unsubscribe operation is not part of the C# import contract.
  imports;
  #viewport;
  #getApi;
  #onError;
  #theme;
  #images;
  #fonts;
  #elements = /* @__PURE__ */ new Map();
  #clicks = /* @__PURE__ */ new Map();
  #scrolls = /* @__PURE__ */ new Map();
  #timers = /* @__PURE__ */ new Map();
  #inputs = /* @__PURE__ */ new Map();
  #inputStyles;
  #sequence = 0;
  #observer;
  #viewportSize;
  #mountedId = 0;
  #frameId = 0;
  #stopped = false;
  #tickerFrame = 0;
  #tickerRunning = false;
  #lastTick;
  #tickInterval = 1e3 / 60;
  constructor(viewport, getApi, onError, assets) {
    this.#viewport = viewport;
    this.#getApi = getApi;
    this.#onError = onError;
    this.#images = new BrowserImages(
      (name) => assets.resolve("images", name),
      (id3, request, success) => {
        if (this.#stopped) {
          return;
        }
        try {
          this.#getApi().OnImageLoaded(id3, request, success);
        } catch (error) {
          this.#reportResource(String(error));
        }
      },
      this.#reportResource
    );
    this.#fonts = new BrowserFonts(
      (name) => assets.resolve("fonts", name),
      this.#requestLayout,
      this.#reportResource
    );
    this.#theme = new BrowserTheme(viewport, (theme) => {
      this.#invoke(() => {
        this.#getApi().OnSystemThemeChanged(theme);
      });
    });
    this.imports = {
      imageSource: (id3, name, request) => this.#images.setSource(id3, this.#get(id3), name, request),
      imageAspect: (id3, aspect) => this.#images.setAspect(id3, aspect),
      fontFamily: (filename) => this.#fonts.getFamily(filename),
      reportResource: this.#reportResource,
      startTicker: this.#startTicker.bind(this),
      stopTicker: this.#stopTicker.bind(this),
      subscribeInput: this.#subscribeInput.bind(this),
      inputValue: (id3, value) => {
        this.#input(id3).setValue(value);
      },
      inputSelection: (id3, start, length) => {
        this.#input(id3).setSelection(start, length);
      },
      inputAttribute: (id3, name, value) => {
        this.#input(id3).setAttribute(name, value);
      },
      inputFocus: (id3, focused) => {
        return this.#input(id3).focus(focused);
      },
      report: this.#report.bind(this),
      getSystemTheme: this.#theme.getSystemTheme.bind(this.#theme),
      getThemeColor: this.#theme.getColor.bind(this.#theme),
      startThemeTracking: this.#theme.start.bind(this.#theme),
      applyTheme: this.#theme.apply.bind(this.#theme),
      create: this.#create.bind(this),
      style: this.#style.bind(this),
      property: this.#property.bind(this),
      attribute: this.#attribute.bind(this),
      frame: this.#frame.bind(this),
      measure: this.#measure.bind(this),
      insert: this.#insert.bind(this),
      remove: this.#remove.bind(this),
      release: this.#release.bind(this),
      mount: this.#mount.bind(this),
      unmount: this.#unmount.bind(this),
      subscribeClick: this.#subscribeClick.bind(this),
      unsubscribeClick: this.#unsubscribeClick.bind(this),
      subscribeScroll: this.#subscribeScroll.bind(this),
      requestLayout: this.#requestLayout,
      schedule: this.#schedule.bind(this),
      cancelSchedule: this.#cancelSchedule.bind(this),
      stop: this.#stop.bind(this)
    };
  }
  #get(id3) {
    if (!Number.isInteger(id3) || id3 <= 0 || id3 > 2147483647) {
      throw new Error(`Invalid MAUI element handle: ${id3}`);
    }
    const element = this.#elements.get(id3);
    if (!element) {
      throw new Error(`Stale MAUI element handle: ${id3}`);
    }
    return element;
  }
  #input(id3) {
    this.#get(id3);
    const input = this.#inputs.get(id3);
    if (!input) {
      throw new Error(`Input is not subscribed: ${id3}`);
    }
    return input;
  }
  #startTicker(maxFps) {
    if (this.#stopped || !Number.isInteger(maxFps) || maxFps <= 0) {
      throw new Error("Invalid or stopped animation ticker");
    }
    this.#stopTicker();
    this.#tickerRunning = true;
    this.#tickInterval = 1e3 / maxFps;
    this.#tickerFrame = requestAnimationFrame(this.#tick);
  }
  #tick = (timestamp) => {
    this.#tickerFrame = 0;
    if (!this.#tickerRunning || this.#stopped) {
      return;
    }
    if (this.#lastTick === void 0 || timestamp - this.#lastTick >= this.#tickInterval - 0.5) {
      this.#lastTick = timestamp;
      this.#invoke(() => {
        this.#getApi().AnimationTick();
      });
    }
    if (this.#tickerRunning && !this.#tickerFrame) {
      this.#tickerFrame = requestAnimationFrame(this.#tick);
    }
  };
  #stopTicker() {
    this.#tickerRunning = false;
    cancelAnimationFrame(this.#tickerFrame);
    this.#tickerFrame = 0;
    this.#lastTick = void 0;
  }
  #subscribeInput(id3) {
    if (this.#stopped || this.#inputs.has(id3)) {
      throw new Error("Input subscription is stopped or duplicated");
    }
    const input = new BrowserTextInput(this.#get(id3), {
      onText: ({ value, start, length }) => {
        this.#invoke(() => {
          this.#getApi().OnInput(id3, value, start, length);
        });
      },
      onFocus: (focused) => {
        this.#invoke(() => {
          this.#getApi().OnInputFocus(id3, focused);
        });
      },
      onSelection: ({ start, length }) => {
        this.#invoke(() => {
          this.#getApi().OnInputSelection(id3, start, length);
        });
      },
      onCompleted: () => {
        this.#invoke(() => {
          this.#getApi().OnInputCompleted(id3);
        });
      }
    });
    this.#inputs.set(id3, input);
    if (!this.#inputStyles) {
      this.#inputStyles = createInputStyles();
      this.#viewport.append(this.#inputStyles);
    }
  }
  #invoke(action) {
    try {
      action();
    } catch (error) {
      this.#onError(error instanceof Error ? error.message : String(error));
    }
  }
  #onViewportResize = (entries, observer) => {
    if (this.#stopped || !this.#mountedId || observer !== this.#observer) {
      return;
    }
    for (const entry of entries) {
      if (entry.target !== this.#viewport) {
        continue;
      }
      const { width, height } = entry.contentRect;
      if (!Number.isFinite(width) || !Number.isFinite(height) || width < 0 || height < 0) {
        continue;
      }
      this.#viewportSize = { width, height };
      this.#requestLayout();
    }
  };
  // Font and managed invalidations share the same coalesced layout scheduler.
  #requestLayout = () => {
    if (this.#stopped || !this.#mountedId || !this.#viewportSize || this.#frameId) {
      return;
    }
    const observer = this.#observer;
    this.#frameId = requestAnimationFrame(() => {
      if (observer !== this.#observer) {
        return;
      }
      this.#frameId = 0;
      const size = this.#viewportSize;
      if (this.#stopped || !this.#mountedId || !size || size.width <= 0 || size.height <= 0) {
        return;
      }
      this.#invoke(() => {
        this.#getApi().LayoutTick(size.width, size.height);
      });
    });
  };
  #unmount(id3) {
    if (this.#mountedId !== id3 || !this.#mountedId) {
      return;
    }
    this.#observer?.disconnect();
    this.#observer = void 0;
    this.#viewportSize = void 0;
    document.fonts.removeEventListener("loadingdone", this.#requestLayout);
    document.fonts.removeEventListener("loadingerror", this.#requestLayout);
    cancelAnimationFrame(this.#frameId);
    this.#frameId = 0;
    this.#mountedId = 0;
    this.#get(id3).remove();
  }
  #unsubscribeClick(id3) {
    const element = this.#get(id3);
    const callback = this.#clicks.get(id3);
    if (callback) {
      element.removeEventListener("click", callback);
    }
    this.#clicks.delete(id3);
  }
  #stop() {
    this.#stopped = true;
    this.#images.dispose();
    this.#fonts.dispose();
    this.#stopTicker();
    for (const input of this.#inputs.values()) {
      input.dispose();
    }
    this.#inputStyles?.remove();
    this.#inputStyles = void 0;
    this.#theme.dispose();
    if (this.#mountedId) {
      this.#unmount(this.#mountedId);
    }
    for (const timer of this.#timers.values()) {
      clearTimeout(timer);
    }
    this.#timers.clear();
  }
  #report(message) {
    this.#onError(message);
  }
  #reportResource = (message) => {
    if (this.#stopped) {
      return;
    }
    console.warn(message);
    this.#viewport.dispatchEvent(new CustomEvent("maui-resource-error", { detail: message }));
  };
  #create(tagName5) {
    if (this.#stopped) {
      throw new Error("MAUI bridge is stopped");
    }
    if (tagName5 !== tagName5.toLowerCase()) {
      throw new Error(`Expected a lowercase HTML tag name: ${tagName5}`);
    }
    if (tagName5.includes("-") && !customElements.get(tagName5)) {
      throw new Error(`Custom element is not registered: ${tagName5}`);
    }
    if (this.#sequence >= 2147483647) {
      throw new Error("MAUI element handle limit reached");
    }
    const element = document.createElement(tagName5);
    if (element instanceof HTMLUnknownElement) {
      throw new Error(`Unknown HTML element: ${tagName5}`);
    }
    const id3 = ++this.#sequence;
    element.style.position = "absolute";
    element.style.boxSizing = "border-box";
    this.#elements.set(id3, element);
    return id3;
  }
  #style(id3, name, value) {
    this.#get(id3).style.setProperty(name, value);
  }
  #property(id3, name, value) {
    const element = this.#get(id3);
    if (name === "__proto__" || name === "prototype" || name === "constructor" || !(name in element)) {
      throw new Error(`Unsupported element property: ${name}`);
    }
    if (!Reflect.set(element, name, value)) {
      throw new Error(`Element property is not writable: ${name}`);
    }
  }
  #attribute(id3, name, value) {
    const element = this.#get(id3);
    if (value === null) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, value);
    }
  }
  #frame(id3, x, y, width, height) {
    if (![x, y, width, height].every(Number.isFinite)) {
      throw new Error("Non-finite MAUI frame");
    }
    Object.assign(this.#get(id3).style, {
      left: `${x}px`,
      top: `${y}px`,
      width: `${width}px`,
      height: `${height}px`
    });
  }
  #measure(id3, width, height, returnHeight) {
    this.#inputs.get(id3)?.flush();
    const element = this.#get(id3);
    const saved = element.style.cssText;
    try {
      Object.assign(element.style, {
        width: "max-content",
        height: "auto",
        maxWidth: Number.isFinite(width) ? `${Math.max(0, width)}px` : "none",
        maxHeight: "none"
      });
      const bounds = element.getBoundingClientRect();
      return returnHeight ? bounds.height : bounds.width;
    } finally {
      element.style.cssText = saved;
    }
  }
  #insert(parent, child, index) {
    const container = this.#get(parent);
    const element = this.#get(child);
    element.remove();
    container.insertBefore(element, container.children[index] ?? null);
  }
  #remove(id3) {
    this.#get(id3).remove();
  }
  #release(id3) {
    const element = this.#get(id3);
    this.#images.release(id3);
    this.#inputs.get(id3)?.dispose();
    this.#inputs.delete(id3);
    this.#unmount(id3);
    this.#unsubscribeClick(id3);
    const onScroll = this.#scrolls.get(id3);
    if (onScroll) {
      element.removeEventListener("scroll", onScroll);
    }
    this.#scrolls.delete(id3);
    this.#elements.delete(id3);
    element.remove();
  }
  #mount(id3) {
    if (this.#stopped) {
      throw new Error("MAUI bridge is stopped");
    }
    if (this.#mountedId) {
      throw new Error("MAUI bridge supports one mounted window");
    }
    this.#viewport.append(this.#get(id3));
    this.#mountedId = id3;
    this.#viewportSize = void 0;
    this.#observer = new ResizeObserver(this.#onViewportResize);
    this.#observer.observe(this.#viewport);
    document.fonts.addEventListener("loadingdone", this.#requestLayout);
    document.fonts.addEventListener("loadingerror", this.#requestLayout);
  }
  #subscribeClick(id3) {
    if (this.#stopped) {
      throw new Error("MAUI bridge is stopped");
    }
    if (this.#clicks.has(id3)) {
      throw new Error("Duplicate MAUI button subscription");
    }
    const element = this.#get(id3);
    const callback = () => {
      if (this.#stopped || !this.#elements.has(id3)) {
        return;
      }
      this.#invoke(() => {
        this.#getApi().OnClick(id3);
      });
    };
    this.#clicks.set(id3, callback);
    element.addEventListener("click", callback);
  }
  #subscribeScroll(id3) {
    if (this.#stopped) {
      throw new Error("MAUI bridge is stopped");
    }
    if (this.#scrolls.has(id3)) {
      throw new Error("Duplicate scroll subscription");
    }
    const element = this.#get(id3);
    const callback = () => {
      if (this.#stopped || !this.#elements.has(id3)) {
        return;
      }
      this.#invoke(() => {
        this.#getApi().OnScroll(id3, element.scrollLeft, element.scrollTop);
      });
    };
    this.#scrolls.set(id3, callback);
    element.addEventListener("scroll", callback, { passive: true });
  }
  #schedule(id3, milliseconds) {
    if (this.#stopped) {
      throw new Error("MAUI bridge has stopped");
    }
    clearTimeout(this.#timers.get(id3));
    this.#timers.set(id3, setTimeout(() => {
      this.#timers.delete(id3);
      if (!this.#stopped) {
        this.#invoke(() => {
          this.#getApi().RunScheduled(id3);
        });
      }
    }, milliseconds));
  }
  #cancelSchedule(id3) {
    clearTimeout(this.#timers.get(id3));
    this.#timers.delete(id3);
  }
  dispose = () => {
    this.#stop();
    for (const id3 of this.#elements.keys()) {
      this.#release(id3);
    }
  };
};

// src/Browser.FluentUIWebComponents/web/components/scroll-view.ts
var styles = new CSSStyleSheet();
styles.replaceSync(`
    :host {
        display: block;
        overflow-y: auto;
        overflow-x: hidden;
    }
`);
var MauiScrollView = class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: "open" });
    root.adoptedStyleSheets = [styles];
    root.append(document.createElement("slot"));
  }
};

// src/Browser.FluentUIWebComponents/web/components/define.ts
customElements.define("maui-scroll-view", MauiScrollView);

// node_modules/@fluentui/web-components/dist/esm/button/button.options.js
var ButtonType = {
  submit: "submit",
  reset: "reset",
  button: "button"
};
var tagName2 = `${FluentDesignSystem.prefix}-button`;

// node_modules/@fluentui/web-components/dist/esm/utils/display.js
var hidden = `:host([hidden]){display:none}`;
function display(displayValue) {
  return `${hidden}:host{display:${displayValue}}`;
}

// node_modules/@fluentui/web-components/dist/esm/theme/design-tokens.js
var colorNeutralForeground1 = "var(--colorNeutralForeground1)";
var colorNeutralForeground1Hover = "var(--colorNeutralForeground1Hover)";
var colorNeutralForeground1Pressed = "var(--colorNeutralForeground1Pressed)";
var colorNeutralForeground2 = "var(--colorNeutralForeground2)";
var colorNeutralForeground2Hover = "var(--colorNeutralForeground2Hover)";
var colorNeutralForeground2Pressed = "var(--colorNeutralForeground2Pressed)";
var colorNeutralForeground2BrandHover = "var(--colorNeutralForeground2BrandHover)";
var colorNeutralForeground2BrandPressed = "var(--colorNeutralForeground2BrandPressed)";
var colorNeutralForeground3 = "var(--colorNeutralForeground3)";
var colorNeutralForeground4 = "var(--colorNeutralForeground4)";
var colorNeutralForegroundDisabled = "var(--colorNeutralForegroundDisabled)";
var colorNeutralForegroundOnBrand = "var(--colorNeutralForegroundOnBrand)";
var colorNeutralForegroundInverted = "var(--colorNeutralForegroundInverted)";
var colorNeutralBackground1 = "var(--colorNeutralBackground1)";
var colorNeutralBackground1Hover = "var(--colorNeutralBackground1Hover)";
var colorNeutralBackground1Pressed = "var(--colorNeutralBackground1Pressed)";
var colorNeutralBackground3 = "var(--colorNeutralBackground3)";
var colorNeutralBackgroundInverted = "var(--colorNeutralBackgroundInverted)";
var colorSubtleBackground = "var(--colorSubtleBackground)";
var colorSubtleBackgroundHover = "var(--colorSubtleBackgroundHover)";
var colorSubtleBackgroundPressed = "var(--colorSubtleBackgroundPressed)";
var colorTransparentBackground = "var(--colorTransparentBackground)";
var colorTransparentBackgroundHover = "var(--colorTransparentBackgroundHover)";
var colorTransparentBackgroundPressed = "var(--colorTransparentBackgroundPressed)";
var colorNeutralBackgroundDisabled = "var(--colorNeutralBackgroundDisabled)";
var colorBrandBackground = "var(--colorBrandBackground)";
var colorBrandBackgroundHover = "var(--colorBrandBackgroundHover)";
var colorBrandBackgroundPressed = "var(--colorBrandBackgroundPressed)";
var colorNeutralStrokeAccessible = "var(--colorNeutralStrokeAccessible)";
var colorNeutralStrokeAccessibleHover = "var(--colorNeutralStrokeAccessibleHover)";
var colorNeutralStrokeAccessiblePressed = "var(--colorNeutralStrokeAccessiblePressed)";
var colorNeutralStroke1 = "var(--colorNeutralStroke1)";
var colorNeutralStroke1Hover = "var(--colorNeutralStroke1Hover)";
var colorNeutralStroke1Pressed = "var(--colorNeutralStroke1Pressed)";
var colorNeutralStroke2 = "var(--colorNeutralStroke2)";
var colorCompoundBrandStroke = "var(--colorCompoundBrandStroke)";
var colorCompoundBrandStrokePressed = "var(--colorCompoundBrandStrokePressed)";
var colorNeutralStrokeDisabled = "var(--colorNeutralStrokeDisabled)";
var colorTransparentStroke = "var(--colorTransparentStroke)";
var colorTransparentStrokeInteractive = "var(--colorTransparentStrokeInteractive)";
var colorStrokeFocus2 = "var(--colorStrokeFocus2)";
var colorPaletteRedBorder2 = "var(--colorPaletteRedBorder2)";
var borderRadiusNone = "var(--borderRadiusNone)";
var borderRadiusSmall = "var(--borderRadiusSmall)";
var borderRadiusMedium = "var(--borderRadiusMedium)";
var borderRadiusLarge = "var(--borderRadiusLarge)";
var borderRadiusCircular = "var(--borderRadiusCircular)";
var fontFamilyBase = "var(--fontFamilyBase)";
var fontFamilyMonospace = "var(--fontFamilyMonospace)";
var fontFamilyNumeric = "var(--fontFamilyNumeric)";
var fontSizeBase100 = "var(--fontSizeBase100)";
var fontSizeBase200 = "var(--fontSizeBase200)";
var fontSizeBase300 = "var(--fontSizeBase300)";
var fontSizeBase400 = "var(--fontSizeBase400)";
var fontSizeBase500 = "var(--fontSizeBase500)";
var fontSizeBase600 = "var(--fontSizeBase600)";
var fontSizeHero700 = "var(--fontSizeHero700)";
var fontSizeHero800 = "var(--fontSizeHero800)";
var fontSizeHero900 = "var(--fontSizeHero900)";
var fontSizeHero1000 = "var(--fontSizeHero1000)";
var fontWeightRegular = "var(--fontWeightRegular)";
var fontWeightMedium = "var(--fontWeightMedium)";
var fontWeightSemibold = "var(--fontWeightSemibold)";
var fontWeightBold = "var(--fontWeightBold)";
var lineHeightBase100 = "var(--lineHeightBase100)";
var lineHeightBase200 = "var(--lineHeightBase200)";
var lineHeightBase300 = "var(--lineHeightBase300)";
var lineHeightBase400 = "var(--lineHeightBase400)";
var lineHeightBase500 = "var(--lineHeightBase500)";
var lineHeightBase600 = "var(--lineHeightBase600)";
var lineHeightHero700 = "var(--lineHeightHero700)";
var lineHeightHero800 = "var(--lineHeightHero800)";
var lineHeightHero900 = "var(--lineHeightHero900)";
var lineHeightHero1000 = "var(--lineHeightHero1000)";
var shadow2 = "var(--shadow2)";
var shadow4 = "var(--shadow4)";
var strokeWidthThin = "var(--strokeWidthThin)";
var strokeWidthThick = "var(--strokeWidthThick)";
var spacingHorizontalXXS = "var(--spacingHorizontalXXS)";
var spacingHorizontalXS = "var(--spacingHorizontalXS)";
var spacingHorizontalSNudge = "var(--spacingHorizontalSNudge)";
var spacingHorizontalS = "var(--spacingHorizontalS)";
var spacingHorizontalMNudge = "var(--spacingHorizontalMNudge)";
var spacingHorizontalM = "var(--spacingHorizontalM)";
var spacingHorizontalL = "var(--spacingHorizontalL)";
var spacingVerticalXS = "var(--spacingVerticalXS)";
var durationUltraFast = "var(--durationUltraFast)";
var durationFaster = "var(--durationFaster)";
var durationNormal = "var(--durationNormal)";
var curveAccelerateMid = "var(--curveAccelerateMid)";
var curveDecelerateMid = "var(--curveDecelerateMid)";
var curveEasyEase = "var(--curveEasyEase)";

// node_modules/@fluentui/web-components/dist/esm/button/button.styles.js
var baseButtonStyles = css`
  ${display("inline-flex")}

  :host {
    --icon-spacing: ${spacingHorizontalSNudge};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${colorNeutralBackground1};
    color: ${colorNeutralForeground1};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
    padding: 0 ${spacingHorizontalM};
    min-width: 96px;
    border-radius: ${borderRadiusMedium};
    font-size: ${fontSizeBase300};
    font-family: ${fontFamilyBase};
    font-weight: ${fontWeightSemibold};
    line-height: ${lineHeightBase300};
    transition-duration: ${durationFaster};
    transition-property: background, border, color;
    transition-timing-function: ${curveEasyEase};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${colorNeutralBackground1Hover};
    color: ${colorNeutralForeground1Hover};
    border-color: ${colorNeutralStroke1Hover};
  }

  :host(:hover:active) {
    background-color: ${colorNeutralBackground1Pressed};
    border-color: ${colorNeutralStroke1Pressed};
    color: ${colorNeutralForeground1Pressed};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${colorTransparentStroke};
    outline: ${strokeWidthThick} solid ${colorTransparentStroke};
    box-shadow: ${shadow4}, 0 0 0 2px ${colorStrokeFocus2};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  ::slotted([slot='end']),
  [slot='end'] {
    flex-shrink: 0;
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${spacingHorizontalXS};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${spacingHorizontalS};
    border-radius: ${borderRadiusSmall};
    font-size: ${fontSizeBase200};
    line-height: ${lineHeightBase200};
    font-weight: ${fontWeightRegular};
  }

  :host([size='small'][icon-only]) {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) {
    min-height: 40px;
    border-radius: ${borderRadiusLarge};
    padding: 0 ${spacingHorizontalL};
    font-size: ${fontSizeBase400};
    line-height: ${lineHeightBase400};
  }

  :host([size='large'][icon-only]) {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is([shape='circular'], [shape='circular']:focus-visible)) {
    border-radius: ${borderRadiusCircular};
  }

  :host(:is([shape='square'], [shape='square']:focus-visible)) {
    border-radius: ${borderRadiusNone};
  }

  :host([appearance='primary']) {
    background-color: ${colorBrandBackground};
    color: ${colorNeutralForegroundOnBrand};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) {
    background-color: ${colorBrandBackgroundHover};
  }

  :host([appearance='primary']:is(:hover, :hover:active):not(:focus-visible)) {
    border-color: transparent;
  }

  :host([appearance='primary']:is(:hover, :hover:active)) {
    color: ${colorNeutralForegroundOnBrand};
  }

  :host([appearance='primary']:hover:active) {
    background-color: ${colorBrandBackgroundPressed};
  }

  :host([appearance='primary']:focus-visible) {
    border-color: ${colorNeutralForegroundOnBrand};
    box-shadow: ${shadow2}, 0 0 0 2px ${colorStrokeFocus2};
  }

  :host([appearance='outline']) {
    background-color: ${colorTransparentBackground};
  }

  :host([appearance='outline']:hover) {
    background-color: ${colorTransparentBackgroundHover};
  }

  :host([appearance='outline']:hover:active) {
    background-color: ${colorTransparentBackgroundPressed};
  }

  :host([appearance='subtle']) {
    background-color: ${colorSubtleBackground};
    color: ${colorNeutralForeground2};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) {
    background-color: ${colorSubtleBackgroundHover};
    color: ${colorNeutralForeground2Hover};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) {
    background-color: ${colorSubtleBackgroundPressed};
    color: ${colorNeutralForeground2Pressed};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${colorNeutralForeground2BrandHover};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${colorNeutralForeground2BrandPressed};
  }

  :host([appearance='transparent']) {
    background-color: ${colorTransparentBackground};
    color: ${colorNeutralForeground2};
  }

  :host([appearance='transparent']:hover) {
    background-color: ${colorTransparentBackgroundHover};
    color: ${colorNeutralForeground2BrandHover};
  }

  :host([appearance='transparent']:hover:active) {
    background-color: ${colorTransparentBackgroundPressed};
    color: ${colorNeutralForeground2BrandPressed};
  }

  :host(:is([appearance='transparent'], [appearance='transparent']:is(:hover, :active))) {
    border-color: transparent;
  }
`;
var styles2 = css`
  ${baseButtonStyles}

  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable]):hover:active) {
    background-color: ${colorNeutralBackgroundDisabled};
    border-color: ${colorNeutralStrokeDisabled};
    color: ${colorNeutralForegroundDisabled};
    cursor: not-allowed;
  }

  :host([appearance='primary']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='primary']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host([appearance='outline']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='outline']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${colorTransparentBackground};
  }

  :host([appearance='subtle']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='subtle']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${colorTransparentBackground};
    border-color: transparent;
  }

  :host([appearance='transparent']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='transparent']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${colorTransparentBackground};
  }

  @media (forced-colors: active) {
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host([appearance='primary']:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(
        :is(
            :disabled,
            [disabled],
            [disabled-focusable],
            [appearance]:disabled,
            [appearance][disabled],
            [appearance][disabled-focusable]
          )
      ) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  }
`;

// node_modules/@fluentui/web-components/dist/esm/button/button.template.js
function buttonTemplate(options = {}) {
  return html`
    <template
      @click="${(x, c) => x.clickHandler(c.event)}"
      @keypress="${(x, c) => x.keypressHandler(c.event)}"
    >
      ${startSlotTemplate(options)}
      <span class="content" part="content">
        <slot ${slotted("defaultSlottedContent")}></slot>
      </span>
      ${endSlotTemplate(options)}
    </template>
  `;
}
var template = buttonTemplate();

// node_modules/@fluentui/web-components/dist/esm/button/button.definition.js
var definition = {
  name: tagName2,
  registry: FluentDesignSystem.registry,
  styles: styles2,
  template
};

// node_modules/@fluentui/web-components/dist/esm/button/button.base.js
var BaseButton = class extends FASTElement {
  /**
   * Handles changes to the disabled attribute. If the button is disabled, it
   * should not be focusable.
   *
   * @param previous - the previous disabled value
   * @param next - the new disabled value
   * @internal
   */
  disabledChanged() {
    this.setTabIndex();
  }
  /**
   * Sets the element's internal disabled state when the element is focusable while disabled.
   *
   * @param previous - the previous disabledFocusable value
   * @param next - the current disabledFocusable value
   * @internal
   */
  disabledFocusableChanged(previous, next2) {
    if (this.elementInternals) {
      this.elementInternals.ariaDisabled = `${!!next2}`;
    }
  }
  /**
   * The associated form element.
   *
   * @public
   */
  get form() {
    return this.elementInternals.form;
  }
  static {
    this.formAssociated = true;
  }
  /**
   * A reference to all associated label elements.
   *
   * @public
   */
  get labels() {
    return Object.freeze(Array.from(this.elementInternals.labels));
  }
  /**
   * Removes the form submission fallback control when the type changes.
   *
   * @param previous - the previous type value
   * @param next - the new type value
   * @internal
   */
  typeChanged(previous, next2) {
    if (next2 !== ButtonType.submit) {
      this.formSubmissionFallbackControl?.remove();
      this.shadowRoot?.querySelector('slot[name="internal"]')?.remove();
    }
  }
  /**
   * Handles the button click event.
   *
   * @param e - The event object
   * @internal
   */
  clickHandler(e) {
    if (e && this.disabledFocusable) {
      e.stopImmediatePropagation();
      return;
    }
    this.press();
    return true;
  }
  connectedCallback() {
    super.connectedCallback();
    this.elementInternals.ariaDisabled = `${!!this.disabledFocusable}`;
    this.setTabIndex();
    maybeSetAutoFocus(this);
  }
  constructor() {
    super();
    this.disabledFocusable = false;
    this.elementInternals = this.attachInternals();
    this.elementInternals.role = "button";
  }
  /**
   * This fallback creates a new slot, then creates a submit button to mirror the custom element's
   * properties. The submit button is then appended to the slot and the form is submitted.
   *
   * @internal
   * @privateRemarks
   * This is a workaround until {@link https://github.com/WICG/webcomponents/issues/814 | WICG/webcomponents/issues/814} is resolved.
   */
  createAndInsertFormSubmissionFallbackControl() {
    const internalSlot = this.formSubmissionFallbackControlSlot ?? document.createElement("slot");
    internalSlot.setAttribute("name", "internal");
    this.shadowRoot?.appendChild(internalSlot);
    this.formSubmissionFallbackControlSlot = internalSlot;
    const fallbackControl = this.formSubmissionFallbackControl ?? document.createElement("button");
    fallbackControl.style.display = "none";
    fallbackControl.setAttribute("type", "submit");
    fallbackControl.setAttribute("slot", "internal");
    if (this.formNoValidate) {
      fallbackControl.toggleAttribute("formnovalidate", true);
    }
    if (this.elementInternals.form?.id) {
      fallbackControl.setAttribute("form", this.elementInternals.form.id);
    }
    if (this.name) {
      fallbackControl.setAttribute("name", this.name);
    }
    if (this.value) {
      fallbackControl.setAttribute("value", this.value);
    }
    if (this.formAction) {
      fallbackControl.setAttribute("formaction", this.formAction ?? "");
    }
    if (this.formEnctype) {
      fallbackControl.setAttribute("formenctype", this.formEnctype ?? "");
    }
    if (this.formMethod) {
      fallbackControl.setAttribute("formmethod", this.formMethod ?? "");
    }
    if (this.formTarget) {
      fallbackControl.setAttribute("formtarget", this.formTarget ?? "");
    }
    this.append(fallbackControl);
    this.formSubmissionFallbackControl = fallbackControl;
  }
  /**
   * Invoked when a connected component's form or fieldset has its disabled state changed.
   *
   * @param disabled - the disabled value of the form / fieldset
   *
   * @internal
   */
  formDisabledCallback(disabled) {
    this.disabled = disabled;
  }
  /**
   * Handles keypress events for the button.
   *
   * @param e - the keyboard event
   * @returns - the return value of the click handler
   * @public
   */
  keypressHandler(e) {
    if (e && this.disabledFocusable) {
      e.stopImmediatePropagation();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      this.click();
      return;
    }
    return true;
  }
  /**
   * Presses the button.
   *
   * @public
   */
  press() {
    switch (this.type) {
      case ButtonType.reset: {
        this.resetForm();
        break;
      }
      case ButtonType.submit: {
        this.submitForm();
        break;
      }
    }
  }
  /**
   * Resets the associated form.
   *
   * @public
   */
  resetForm() {
    this.elementInternals.form?.reset();
  }
  /**
   * Sets the `tabindex` attribute based on the disabled state of the button.
   *
   * @internal
   */
  setTabIndex() {
    if (this.disabled) {
      this.removeAttribute("tabindex");
      return;
    }
    this.tabIndex = Number(this.getAttribute("tabindex") ?? 0) < 0 ? -1 : 0;
  }
  /**
   * Submits the associated form.
   *
   * @internal
   */
  submitForm() {
    if (!this.elementInternals.form || this.disabled || this.type !== ButtonType.submit) {
      return;
    }
    if (!this.name && !this.formAction && !this.formEnctype && !this.formAttribute && !this.formMethod && !this.formNoValidate && !this.formTarget) {
      this.elementInternals.form.requestSubmit();
      return;
    }
    try {
      this.elementInternals.setFormValue(this.value ?? "");
      this.elementInternals.form.requestSubmit(this);
    } catch (e) {
      this.createAndInsertFormSubmissionFallbackControl();
      this.elementInternals.setFormValue(null);
      this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl);
    }
  }
};
__decorate([
  observable
], BaseButton.prototype, "defaultSlottedContent", void 0);
__decorate([
  attr({ mode: "boolean" })
], BaseButton.prototype, "disabled", void 0);
__decorate([
  attr({ attribute: "disabled-focusable", mode: "boolean" })
], BaseButton.prototype, "disabledFocusable", void 0);
__decorate([
  attr({ attribute: "formaction" })
], BaseButton.prototype, "formAction", void 0);
__decorate([
  attr({ attribute: "form" })
], BaseButton.prototype, "formAttribute", void 0);
__decorate([
  attr({ attribute: "formenctype" })
], BaseButton.prototype, "formEnctype", void 0);
__decorate([
  attr({ attribute: "formmethod" })
], BaseButton.prototype, "formMethod", void 0);
__decorate([
  attr({ attribute: "formnovalidate", mode: "boolean" })
], BaseButton.prototype, "formNoValidate", void 0);
__decorate([
  attr({ attribute: "formtarget" })
], BaseButton.prototype, "formTarget", void 0);
__decorate([
  attr
], BaseButton.prototype, "name", void 0);
__decorate([
  attr
], BaseButton.prototype, "type", void 0);
__decorate([
  attr
], BaseButton.prototype, "value", void 0);

// node_modules/@fluentui/web-components/dist/esm/button/button.js
var Button = class extends BaseButton {
  constructor() {
    super(...arguments);
    this.iconOnly = false;
  }
};
__decorate([
  attr
], Button.prototype, "appearance", void 0);
__decorate([
  attr
], Button.prototype, "shape", void 0);
__decorate([
  attr
], Button.prototype, "size", void 0);
__decorate([
  attr({ attribute: "icon-only", mode: "boolean" })
], Button.prototype, "iconOnly", void 0);
applyMixins(Button, StartEnd);

// node_modules/@fluentui/web-components/dist/esm/button/define.js
Button.define(definition);

// node_modules/@fluentui/web-components/dist/esm/text/text.options.js
var tagName3 = `${FluentDesignSystem.prefix}-text`;

// node_modules/@fluentui/web-components/dist/esm/text/text.styles.js
var styles3 = css`
  ${display("inline")}

  :host {
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase300};
    line-height: ${lineHeightBase300};
    font-weight: ${fontWeightRegular};
    text-align: start;
  }

  :host([nowrap]),
  :host([nowrap]) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host([truncate]),
  :host([truncate]) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host([block]) {
    display: block;
  }
  :host([italic]) {
    font-style: italic;
  }
  :host([underline]) {
    text-decoration-line: underline;
  }
  :host([strikethrough]) {
    text-decoration-line: line-through;
  }
  :host([underline][strikethrough]) {
    text-decoration-line: line-through underline;
  }
  :host([size='100']) {
    font-size: ${fontSizeBase100};
    line-height: ${lineHeightBase100};
  }
  :host([size='200']) {
    font-size: ${fontSizeBase200};
    line-height: ${lineHeightBase200};
  }
  :host([size='400']) {
    font-size: ${fontSizeBase400};
    line-height: ${lineHeightBase400};
  }
  :host([size='500']) {
    font-size: ${fontSizeBase500};
    line-height: ${lineHeightBase500};
  }
  :host([size='600']) {
    font-size: ${fontSizeBase600};
    line-height: ${lineHeightBase600};
  }
  :host([size='700']) {
    font-size: ${fontSizeHero700};
    line-height: ${lineHeightHero700};
  }
  :host([size='800']) {
    font-size: ${fontSizeHero800};
    line-height: ${lineHeightHero800};
  }
  :host([size='900']) {
    font-size: ${fontSizeHero900};
    line-height: ${lineHeightHero900};
  }
  :host([size='1000']) {
    font-size: ${fontSizeHero1000};
    line-height: ${lineHeightHero1000};
  }
  :host([font='monospace']) {
    font-family: ${fontFamilyMonospace};
  }
  :host([font='numeric']) {
    font-family: ${fontFamilyNumeric};
  }
  :host([weight='medium']) {
    font-weight: ${fontWeightMedium};
  }
  :host([weight='semibold']) {
    font-weight: ${fontWeightSemibold};
  }
  :host([weight='bold']) {
    font-weight: ${fontWeightBold};
  }
  :host([align='center']) {
    text-align: center;
  }
  :host([align='end']) {
    text-align: end;
  }
  :host([align='justify']) {
    text-align: justify;
  }

  ::slotted(*) {
    font: inherit;
    line-height: inherit;
    text-decoration-line: inherit;
    text-align: inherit;
    text-decoration-line: inherit;
    margin: 0;
  }
`;

// node_modules/@fluentui/web-components/dist/esm/text/text.template.js
var template2 = html`<slot></slot>`;

// node_modules/@fluentui/web-components/dist/esm/text/text.definition.js
var definition2 = {
  name: tagName3,
  registry: FluentDesignSystem.registry,
  styles: styles3,
  template: template2
};

// node_modules/@fluentui/web-components/dist/esm/text/text.js
var Text = class extends FASTElement {
  constructor() {
    super(...arguments);
    this.elementInternals = this.attachInternals();
    this.nowrap = false;
    this.truncate = false;
    this.italic = false;
    this.underline = false;
    this.strikethrough = false;
    this.block = false;
  }
};
__decorate([
  attr({ mode: "boolean" })
], Text.prototype, "nowrap", void 0);
__decorate([
  attr({ mode: "boolean" })
], Text.prototype, "truncate", void 0);
__decorate([
  attr({ mode: "boolean" })
], Text.prototype, "italic", void 0);
__decorate([
  attr({ mode: "boolean" })
], Text.prototype, "underline", void 0);
__decorate([
  attr({ mode: "boolean" })
], Text.prototype, "strikethrough", void 0);
__decorate([
  attr({ mode: "boolean" })
], Text.prototype, "block", void 0);
__decorate([
  attr
], Text.prototype, "size", void 0);
__decorate([
  attr
], Text.prototype, "font", void 0);
__decorate([
  attr
], Text.prototype, "weight", void 0);
__decorate([
  attr
], Text.prototype, "align", void 0);

// node_modules/@fluentui/web-components/dist/esm/text/define.js
Text.define(definition2);

// node_modules/@fluentui/web-components/dist/esm/utils/support.js
var AnchorPositioningCSSSupported = CSS.supports("anchor-name: --a");
var AnchorPositioningHTMLSupported = "anchor" in HTMLElement.prototype;
var CustomStatesSetSupported = CSS.supports("selector(:state(g))");

// node_modules/@fluentui/web-components/dist/esm/utils/element-internals.js
var statesMap = /* @__PURE__ */ new Map();
function stateSelector(state) {
  return statesMap.get(state) ?? statesMap.set(state, CustomStatesSetSupported ? `:state(${state})` : `[state--${state}]`).get(state);
}

// node_modules/@fluentui/web-components/dist/esm/styles/states/index.js
var activeState = stateSelector("active");
var badInputState = stateSelector("bad-input");
var checkedState = stateSelector("checked");
var customErrorState = stateSelector("custom-error");
var descriptionState = stateSelector("description");
var disabledState = stateSelector("disabled");
var nativeDisabledState = ":is([disabled], :disabled)";
var errorState = stateSelector("error");
var flipBlockState = stateSelector("flip-block");
var focusVisibleState = stateSelector("focus-visible");
var hasMessageState = stateSelector("has-message");
var indeterminateState = stateSelector("indeterminate");
var multipleState = stateSelector("multiple");
var openState = stateSelector("open");
var patternMismatchState = stateSelector("pattern-mismatch");
var placeholderShownState = stateSelector("placeholder-shown");
var pressedState = stateSelector("pressed");
var rangeOverflowState = stateSelector("range-overflow");
var rangeUnderflowState = stateSelector("range-underflow");
var requiredState = stateSelector("required");
var selectedState = stateSelector("selected");
var stepMismatchState = stateSelector("step-mismatch");
var submenuState = stateSelector("submenu");
var tooLongState = stateSelector("too-long");
var tooShortState = stateSelector("too-short");
var typeMismatchState = stateSelector("type-mismatch");
var userInvalidState = stateSelector("user-invalid");
var validState = stateSelector("valid");
var valueMissingState = stateSelector("value-missing");

// node_modules/@fluentui/web-components/dist/esm/text-input/text-input.styles.js
var styles4 = css`
  ${display("block")}

  :host {
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase300};
    font-weight: ${fontWeightRegular};
    line-height: ${lineHeightBase300};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${colorNeutralForeground1};
    padding-bottom: ${spacingVerticalXS};
    flex-shrink: 0;
    padding-inline-end: ${spacingHorizontalXS};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${colorNeutralBackground1};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
    border-bottom-color: ${colorNeutralStrokeAccessible};
    border-radius: ${borderRadiusMedium};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${spacingHorizontalXXS};
    padding: 0 ${spacingHorizontalMNudge};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${colorPaletteRedBorder2};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${borderRadiusMedium});
    border-radius: 0 0 ${borderRadiusMedium} ${borderRadiusMedium};
    border-bottom: 2px solid ${colorCompoundBrandStroke};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${durationUltraFast};
    transition-delay: ${curveAccelerateMid};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${colorNeutralForeground1};
    border-radius: ${borderRadiusMedium};
    background: ${colorTransparentBackground};
    font-family: ${fontFamilyBase};
    font-weight: ${fontWeightRegular};
    font-size: ${fontSizeBase300};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${colorNeutralForeground4};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colorNeutralForeground3};
    font-size: ${fontSizeBase500};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${spacingHorizontalXXS};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${spacingHorizontalXXS};
    gap: ${spacingHorizontalXS};
  }
  :host(:hover) .root {
    border-color: ${colorNeutralStroke1Hover};
    border-bottom-color: ${colorNeutralStrokeAccessibleHover};
  }
  :host(:active) .root {
    border-color: ${colorNeutralStroke1Pressed};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${durationNormal};
    transition-delay: ${curveDecelerateMid};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${colorCompoundBrandStrokePressed};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
  }
  :host(:focus-within) .control {
    color: ${colorNeutralForeground1};
  }
  :host(${nativeDisabledState}) .root {
    background: ${colorTransparentBackground};
    border: ${strokeWidthThin} solid ${colorNeutralStrokeDisabled};
  }
  :host(${nativeDisabledState}) .control::placeholder,
  :host(${nativeDisabledState}) ::slotted([slot='start']),
  :host(${nativeDisabledState}) ::slotted([slot='end']) {
    color: ${colorNeutralForegroundDisabled};
  }
  ::selection {
    color: ${colorNeutralForegroundInverted};
    background-color: ${colorNeutralBackgroundInverted};
  }
  :host([control-size='small']) .control {
    font-size: ${fontSizeBase200};
    font-weight: ${fontWeightRegular};
    line-height: ${lineHeightBase200};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${spacingHorizontalXXS};
    padding: 0 ${spacingHorizontalSNudge};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${fontSizeBase400};
  }
  :host([control-size='large']) .control {
    font-size: ${fontSizeBase400};
    font-weight: ${fontWeightRegular};
    line-height: ${lineHeightBase400};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${spacingHorizontalS};
    padding: 0 ${spacingHorizontalM};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${fontSizeBase600};
  }
  :host([appearance='underline']) .root {
    background: ${colorTransparentBackground};
    border: 0;
    border-radius: 0;
    border-bottom: ${strokeWidthThin} solid ${colorNeutralStrokeAccessible};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${colorNeutralStrokeAccessibleHover};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${colorNeutralStrokeAccessiblePressed};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${colorNeutralStrokeAccessiblePressed};
  }
  :host([appearance='underline']${nativeDisabledState}) .root {
    border-bottom-color: ${colorNeutralStrokeDisabled};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
    box-shadow: ${shadow2};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${colorNeutralBackground1};
  }
  :host([appearance='filled-darker']) .root {
    background: ${colorNeutralBackground3};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${colorTransparentStrokeInteractive};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${colorTransparentStrokeInteractive};
    background: ${colorNeutralBackground3};
  }
`;

// node_modules/@fluentui/web-components/dist/esm/text-input/text-input.template.js
function textInputTemplate(options = {}) {
  return html`
    <template @keydown="${(x, c) => x.keydownHandler(c.event)}">
      <label part="label" for="control" class="label" ${ref("controlLabel")}>
        <slot ${slotted("defaultSlottedNodes")}></slot>
      </label>
      <div class="root" part="root">
        ${startSlotTemplate(options)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(x, c) => x.changeHandler(c.event)}"
          @input="${(x, c) => x.inputHandler(c.event)}"
          autocomplete="${(x) => x.autocomplete}"
          ?disabled="${(x) => x.disabled}"
          list="${(x) => x.list}"
          maxlength="${(x) => x.maxlength}"
          minlength="${(x) => x.minlength}"
          ?multiple="${(x) => x.multiple}"
          name="${(x) => x.name}"
          pattern="${(x) => x.pattern}"
          placeholder="${(x) => x.placeholder}"
          ?readonly="${(x) => x.readOnly}"
          ?required="${(x) => x.required}"
          size="${(x) => x.size}"
          spellcheck="${(x) => x.spellcheck}"
          type="${(x) => x.type}"
          value="${(x) => x.value}"
          ${ref("control")}
        />
        ${endSlotTemplate(options)}
      </div>
    </template>
  `;
}
var template3 = textInputTemplate();

// node_modules/@fluentui/web-components/dist/esm/text-input/text-input.definition.js
var definition3 = {
  name: tagName,
  registry: FluentDesignSystem.registry,
  shadowOptions: {
    delegatesFocus: true
  },
  styles: styles4,
  template: template3
};

// node_modules/@fluentui/web-components/dist/esm/text-input/define.js
TextInput.define(definition3);

// node_modules/@fluentui/web-components/dist/esm/image/image.options.js
var tagName4 = `${FluentDesignSystem.prefix}-image`;

// node_modules/@fluentui/web-components/dist/esm/image/image.styles.js
var styles5 = css`
  :host {
    contain: content;
  }

  :host ::slotted(img) {
    box-sizing: border-box;
    min-height: 8px;
    min-width: 8px;
    display: inline-block;
  }
  :host([block]) ::slotted(img) {
    width: 100%;
    height: auto;
  }
  :host([bordered]) ::slotted(img) {
    border: ${strokeWidthThin} solid ${colorNeutralStroke2};
  }
  :host([fit='none']) ::slotted(img) {
    object-fit: none;
    object-position: top left;
    height: 100%;
    width: 100%;
  }
  :host([fit='center']) ::slotted(img) {
    object-fit: none;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([fit='contain']) ::slotted(img) {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([fit='cover']) ::slotted(img) {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([shadow]) ::slotted(img) {
    box-shadow: ${shadow4};
  }
  :host([shape='circular']) ::slotted(img) {
    border-radius: ${borderRadiusCircular};
  }
  :host([shape='rounded']) ::slotted(img) {
    border-radius: ${borderRadiusMedium};
  }
`;

// node_modules/@fluentui/web-components/dist/esm/image/image.template.js
var template4 = html`<slot></slot>`;

// node_modules/@fluentui/web-components/dist/esm/image/image.definition.js
var definition4 = {
  name: tagName4,
  registry: FluentDesignSystem.registry,
  styles: styles5,
  template: template4
};

// node_modules/@fluentui/web-components/dist/esm/image/image.js
var Image = class extends FASTElement {
};
__decorate([
  attr({ mode: "boolean" })
], Image.prototype, "block", void 0);
__decorate([
  attr({ mode: "boolean" })
], Image.prototype, "bordered", void 0);
__decorate([
  attr({ mode: "boolean" })
], Image.prototype, "shadow", void 0);
__decorate([
  attr
], Image.prototype, "fit", void 0);
__decorate([
  attr
], Image.prototype, "shape", void 0);

// node_modules/@fluentui/web-components/dist/esm/image/define.js
Image.define(definition4);

// src/Browser.FluentUIWebComponents/web/fluent.ts
async function initializeFluent() {
  await customElements.whenDefined("fluent-button");
  await customElements.whenDefined("fluent-text");
  await customElements.whenDefined("fluent-text-input");
  await customElements.whenDefined("fluent-image");
  await document.fonts.ready;
  Updates.process();
}

// src/Browser.FluentUIWebComponents/web/assets.ts
function record(value, context) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Invalid MAUI asset catalog ${context}`);
  }
  return value;
}
function relativePath(value) {
  return value.split("/").every((part) => part.length > 0 && part !== "." && part !== ".." && !/[\\\u0000-\u001f\u007f<>:"|?*]/.test(part) && !/[. ]$/.test(part));
}
var BrowserAssetCatalog = class {
  #maps = /* @__PURE__ */ new Map();
  constructor(value, application, baseUrl) {
    const catalog = record(value, "root");
    if (catalog.version !== 1 || catalog.application !== application) {
      throw new Error(`MAUI asset catalog version/application mismatch (expected version 1, '${application}')`);
    }
    for (const kind of ["images", "fonts", "raw"]) {
      const entries = record(catalog[kind], kind);
      const map = /* @__PURE__ */ new Map();
      for (const [name, path] of Object.entries(entries)) {
        if (!relativePath(name) || kind !== "raw" && name.includes("/") || typeof path !== "string" || !relativePath(path) || !path.startsWith(`maui-assets/${kind}/`)) {
          throw new Error(`Invalid MAUI asset catalog ${kind} entry '${name}'`);
        }
        map.set(name, new URL(path.split("/").map(encodeURIComponent).join("/"), baseUrl).href);
      }
      this.#maps.set(kind, map);
    }
  }
  resolve(kind, name) {
    return this.#maps.get(kind)?.get(name);
  }
};
async function loadBrowserAssets(application, moduleUrl) {
  const base = new URL(".", moduleUrl);
  const url = new URL("maui-assets.json", base);
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(3e4) });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return new BrowserAssetCatalog(await response.json(), application.replace(/\.dll$/, ""), base);
  } catch (error) {
    throw new Error(`Unable to load MAUI asset catalog at ${url.href}: ${String(error)}`);
  }
}

// src/Browser.FluentUIWebComponents/web/maui-browser.ts
var applicationActive = false;
async function startMaui(dotnet, mainAssembly, element = document.getElementById("app")) {
  if (applicationActive) {
    throw new Error("A MAUI application is already starting or running on this page");
  }
  applicationActive = true;
  const onError = (error) => {
    const message = error instanceof Error ? error.message : String(error);
    if (element) {
      element.dataset.state = "failed";
    }
    console.error(message);
    element?.dispatchEvent(new CustomEvent("maui-error", { detail: message }));
  };
  let api;
  let bridge;
  let disposed = false;
  let ownsApplication = false;
  const getApi = () => {
    if (!api) {
      throw new Error("MAUI browser callbacks have not been initialized");
    }
    return api;
  };
  const dispose = () => {
    if (disposed) {
      return;
    }
    disposed = true;
    try {
      if (ownsApplication) {
        getApi().Shutdown();
      }
    } finally {
      ownsApplication = false;
      applicationActive = false;
      bridge?.dispose();
    }
  };
  try {
    if (!element) {
      throw new Error("MAUI app element was not found");
    }
    const assets = await loadBrowserAssets(mainAssembly, import.meta.url);
    bridge = new DomBrowserBridge(element, getApi, onError, assets);
    await initializeFluent();
    const runtime = await dotnet.withMainAssembly(mainAssembly).create();
    runtime.setModuleImports(BrowserModuleName, bridge.imports);
    api = resolveBrowserApplicationExports(await runtime.getAssemblyExports(BrowserApplicationAssemblyName));
    ownsApplication = true;
    const exitCode = await runtime.runMain(mainAssembly, []);
    if (exitCode !== 0) {
      throw new Error(`MAUI Main exited with code ${exitCode}`);
    }
    element.dataset.state = "ready";
    return { dispose };
  } catch (error) {
    try {
      dispose();
    } catch (cleanupError) {
      onError(cleanupError);
    }
    onError(error);
    throw error;
  }
}
export {
  startMaui
};
