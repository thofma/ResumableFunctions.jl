var documenterSearchIndex = {"docs":
[{"location":"library/#Library","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/#Public-interface","page":"Library","title":"Public interface","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"Modules = [ResumableFunctions]\nPrivate = false","category":"page"},{"location":"library/#ResumableFunctions.ResumableFunctions","page":"Library","title":"ResumableFunctions.ResumableFunctions","text":"Main module for ResumableFunctions.jl – C# style generators a.k.a. semi-coroutines for Julia\n\n\n\n\n\n","category":"module"},{"location":"library/#ResumableFunctions.@nosave","page":"Library","title":"ResumableFunctions.@nosave","text":"Macro if used in a @resumable function that creates a not saved variable otherwise throws an error.\n\n\n\n\n\n","category":"macro"},{"location":"library/#ResumableFunctions.@resumable-Tuple{Expr}","page":"Library","title":"ResumableFunctions.@resumable","text":"Macro that transforms a function definition in a finite-statemachine:\n\nDefines a new mutable struct that implements the iterator interface and is used to store the internal state.\nMakes this new type callable having following characteristics:\nimplementents the statements from the initial function definition but;\nreturns at a @yield statement and;\ncontinues after the @yield statement when called again.\nDefines a constructor function that respects the calling conventions of the initial function definition and returns an object of the new type.\n\n\n\n\n\n","category":"macro"},{"location":"library/#ResumableFunctions.@yield","page":"Library","title":"ResumableFunctions.@yield","text":"Macro if used in a @resumable function that returns the expr otherwise throws an error.\n\n\n\n\n\n","category":"macro"},{"location":"library/#Internals","page":"Library","title":"Internals","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"Modules = [ResumableFunctions]\nPublic = false","category":"page"},{"location":"library/#Base.IteratorSize-Union{Tuple{Type{T}}, Tuple{T}} where T<:ResumableFunctions.FiniteStateMachineIterator","page":"Library","title":"Base.IteratorSize","text":"Implements the iteratorsize method of the iterator interface for a subtype of FiniteStateMachineIterator.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.BoxedUInt8","page":"Library","title":"ResumableFunctions.BoxedUInt8","text":"Mutable struct that contains a single UInt8.\n\n\n\n\n\n","category":"type"},{"location":"library/#ResumableFunctions.FiniteStateMachineIterator","page":"Library","title":"ResumableFunctions.FiniteStateMachineIterator","text":"Abstract type used as base type for the type created by the @resumable macro.\n\n\n\n\n\n","category":"type"},{"location":"library/#Base.eltype-Union{Tuple{Type{T}}, Tuple{T}, Tuple{R}} where T<:ResumableFunctions.FiniteStateMachineIterator{R} where R","page":"Library","title":"Base.eltype","text":"Implements the eltype method of the iterator interface for a subtype of FiniteStateMachineIterator.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions._is_yield-Tuple{Any}","page":"Library","title":"ResumableFunctions._is_yield","text":"Function returning whether an expression is a @yield macro\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.get_args-Tuple{Dict}","page":"Library","title":"ResumableFunctions.get_args","text":"Function returning the arguments of a function definition\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.get_param_name-Tuple{Any}","page":"Library","title":"ResumableFunctions.get_param_name","text":"Function returning the name of a where parameter\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.get_slots-Tuple{Dict,Dict{Symbol,Any},Module}","page":"Library","title":"ResumableFunctions.get_slots","text":"Function returning the slots of a function definition\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.hasreturnvalue-Tuple{Any}","page":"Library","title":"ResumableFunctions.hasreturnvalue","text":"Function checking the use of a return statement with value\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.make_arg_any-Tuple{Any,Dict{Symbol,Any}}","page":"Library","title":"ResumableFunctions.make_arg_any","text":"Function changing the type of a slot arg of a arg = @yield ret or arg = @yield statement to Any.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.make_args-Tuple{Dict}","page":"Library","title":"ResumableFunctions.make_args","text":"Function returning the args for the type construction.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.remove_catch_exc-Tuple{Any,Dict{Symbol,Any}}","page":"Library","title":"ResumableFunctions.remove_catch_exc","text":"Function removing the exc symbol of a catch exc statement of a list of slots.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_arg-Tuple{Any}","page":"Library","title":"ResumableFunctions.transform_arg","text":"Function that replaces a arg = @yield ret statement by\n\n  @yield ret;\n  arg = arg_\n\nwhere arg_ is the argument of the function containing the expression.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_exc-Tuple{Any}","page":"Library","title":"ResumableFunctions.transform_exc","text":"Function that replaces a @yield ret or @yield statement by\n\n  @yield ret\n  _arg isa Exception && throw(_arg)\n\nto allow that an Exception can be thrown into a @resumable function.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_for-Tuple{Any,ResumableFunctions.BoxedUInt8}","page":"Library","title":"ResumableFunctions.transform_for","text":"Function that replaces a for loop by a corresponding while loop saving explicitely the iterator and its state.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_let-Tuple{Any,Set{Symbol}}","page":"Library","title":"ResumableFunctions.transform_let","text":"Function that replaces a variable _fsmi.x in an expression by x where x is a variable declared in a let block.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_nosave-Tuple{Any,Set{Symbol}}","page":"Library","title":"ResumableFunctions.transform_nosave","text":"Function that replaces a variable \n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_slots-Tuple{Any,Base.KeySet{Symbol,Dict{Symbol,Any}}}","page":"Library","title":"ResumableFunctions.transform_slots","text":"Function that replaces a variable x in an expression by _fsmi.x where x is a known slot.\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_slots_let-Tuple{Expr,Base.KeySet{Symbol,Dict{Symbol,Any}}}","page":"Library","title":"ResumableFunctions.transform_slots_let","text":"Function that handles let block\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_try-Tuple{Any,ResumableFunctions.BoxedUInt8}","page":"Library","title":"ResumableFunctions.transform_try","text":"Function that replaces a try-catch-finally-end expression having a top level @yield statement in the try part\n\n  try\n    before_statements...\n    @yield ret\n    after_statements...\n  catch exc\n    catch_statements...\n  finally\n    finally_statements...\n  end\n\nwith a sequence of try-catch-end expressions:\n\n  try\n    before_statements...\n  catch\n    catch_statements...\n    @goto _TRY_n\n  end\n  @yield ret\n  try\n    after_statements...\n  catch\n    catch_statements...\n  end\n  @label _TRY_n\n  finally_statements...\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_yield-Tuple{Any,ResumableFunctions.BoxedUInt8}","page":"Library","title":"ResumableFunctions.transform_yield","text":"Function that replaces a @yield ret or @yield statement with\n\n  _fsmi._state = n\n  return ret\n  @label _STATE_n\n  _fsmi._state = 0xff\n\n\n\n\n\n","category":"method"},{"location":"library/#ResumableFunctions.transform_yield-Tuple{Any}","page":"Library","title":"ResumableFunctions.transform_yield","text":"Function that replaces a @yield ret or @yield statement with\n\n  return ret\n\n\n\n\n\n","category":"method"},{"location":"manual/#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#Basic-usage","page":"Manual","title":"Basic usage","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"When a @resumable function is called, it continues where it left during the previous invocation:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function basic_example()\n    @yield \"Initial call\"\n    @yield \"Second call\"\n    \"Final call\"\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function basic_example()\n  @yield \"Initial call\"\n  @yield \"Second call\"\n  \"Final call\"\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> basic_iterator = basic_example();\n\njulia> basic_iterator()\n\"Initial call\"\n\njulia> basic_iterator()\n\"Second call\"\n\njulia> basic_iterator()\n\"Final call\"","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The @yield can also be used without a return argument:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function basic_example()\n    @yield \"Initial call\"\n    @yield \n    \"Final call\"\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function basic_example()\n  @yield \"Initial call\"\n  @yield \n  \"Final call\"\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> basic_iterator = basic_example();\n\njulia> basic_iterator()\n\"Initial call\"\n\njulia> basic_iterator()\n\njulia> basic_iterator()\n\"Final call\"","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The famous fibonacci sequence can easily be generated:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function fibonacci()\n    a = 0\n    b = 1\n    while true\n      @yield a\n      a, b = b, a + b\n    end\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function fibonacci()\n  a = 0\n  b = 1\n  while true\n    @yield a\n    a, b = b, a + b\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> fib_iterator = fibonacci();\n\njulia> fib_iterator()\n0\n\njulia> fib_iterator()\n1\n\njulia> fib_iterator()\n1\n\njulia> fib_iterator()\n2\n\njulia> fib_iterator()\n3\n\njulia> fib_iterator()\n5\n\njulia> fib_iterator()\n8","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The @resumable function can take arguments and the type of the return value can be specified:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function fibonacci(n) :: Int\n    a = 0\n    b = 1\n    for i in 1:n\n      @yield a\n      a, b = b, a + b\n    end\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function fibonacci(n) :: Int\n  a = 0\n  b = 1\n  for i in 1:n\n    @yield a\n    a, b = b, a + b\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> fib_iterator = fibonacci(4);\n\njulia> fib_iterator()\n0\n\njulia> fib_iterator()\n1\n\njulia> fib_iterator()\n1\n\njulia> fib_iterator()\n2\n\njulia> fib_iterator()\n\njulia> fib_iterator()\nERROR: @resumable function has stopped!","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"When the @resumable function returns normally an error will be thrown if called again.","category":"page"},{"location":"manual/#Two-way-communication","page":"Manual","title":"Two-way communication","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"The caller can transmit a variable to the @resumable function by assigning a @yield statement to a variable:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function two_way()\n    name = @yield \"Who are you?\"\n    \"Hello, \" * name * \"!\"\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function two_way()\n  name = @yield \"Who are you?\"\n  \"Hello, \" * name * \"!\"\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> hello = two_way();\n\njulia> hello()\n\"Who are you?\"\n\njulia> hello(\"Ben\")\n\"Hello, Ben!\"","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"When an Exception is passed to the @resumable function, it is thrown at the resume point:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function mouse()\n    try\n      @yield \"Here I am!\"\n    catch exc\n      return \"You got me!\"\n    end\n  end\n\n  struct Cat <: Exception end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function mouse()\n  try\n    @yield \"Here I am!\"\n  catch exc\n    return \"You got me!\"\n  end\nend\n\nstruct Cat <: Exception end","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> catch_me = mouse();\n\njulia> catch_me()\n\"Here I am!\"\n\njulia> catch_me(Cat())\n\"You got me!\"","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/#Iterator-interface","page":"Manual","title":"Iterator interface","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"The interator interface is implemented for a @resumable function:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function fibonacci(n) :: Int\n    a = 0\n    b = 1\n    for i in 1:n\n      @yield a\n      a, b = b, a + b\n    end\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function fibonacci(n) :: Int\n  a = 0\n  b = 1\n  for i in 1:n\n    @yield a\n    a, b = b, a + b\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> for val in fibonacci(10) println(val) end\n0\n1\n1\n2\n3\n5\n8\n13\n21\n34","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/#Parametric-@resumable-functions","page":"Manual","title":"Parametric @resumable functions","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"Type parameters can be specified with a where clause:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function fibonacci(a::N, b::N=a+one(N)) :: N where {N<:Number}\n    for i in 1:10\n      @yield a\n      a, b = b, a + b\n    end\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function fibonacci(a::N, b::N=a+one(N)) :: N where {N<:Number}\n  for i in 1:10\n    @yield a\n    a, b = b, a + b\n   end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> for val in fibonacci(0.0) println(val) end\n0.0\n1.0\n1.0\n2.0\n3.0\n5.0\n8.0\n13.0\n21.0\n34.0","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/#Let-block","page":"Manual","title":"Let block","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"A let block allows a variable not to be saved in between calls to a @resumable function:","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = quote\n  using ResumableFunctions\n\n  @resumable function arrays_of_tuples()\n    for u in [[(1,2),(3,4)], [(5,6),(7,8)]]\n      for i in 1:2\n        let i=i\n          val = [a[i] for a in u]\n        end\n        @yield val\n      end\n    end\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"@resumable function arrays_of_tuples()\n  for u in [[(1,2),(3,4)], [(5,6),(7,8)]]\n    for i in 1:2\n      let i=i\n        val = [a[i] for a in u]\n      end\n      @yield val\n    end\n  end\nend","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"julia> for array in arrays_of_tuples() println(array) end\n[1, 3]\n[2, 4]\n[5, 7]\n[6, 8]","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"DocTestSetup = nothing","category":"page"},{"location":"manual/#Caveats","page":"Manual","title":"Caveats","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"In a try block only top level @yield statements are allowed.\nIn a catch or a finally block a @yield statement is not allowed.\nAn anonymous function can not contain a @yield statement.\nIf a FiniteStateMachineIterator object is used in more than one for loop, only the state variable is reinitialised. A @resumable function that alters its arguments will use the modified values as initial parameters.","category":"page"},{"location":"#ResumableFunctions","page":"Home","title":"ResumableFunctions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"C# style generators a.k.a. semi-coroutines for Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"C# has a convenient way to create iterators using the yield return statement. The package ResumableFunctions provides the same functionality for the Julia language by introducing the @resumable and the @yield macros. These macros can be used to replace the Task switching functions produce and consume which were deprecated in Julia v0.6. Channels are the preferred way for inter-task communication in julia v0.6+, but their performance is subpar for iterator applications.","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using ResumableFunctions\n\n@resumable function fibonacci(n::Int)\n  a = 0\n  b = 1\n  for i in 1:n\n    @yield a\n    a, b = b, a+b\n  end\nend\n\nfor val in fibonacci(10) \n  println(val) \nend\n\n# output\n\n0\n1\n1\n2\n3\n5\n8\n13\n21\n34","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ResumableFunctions is a registered package and can be installed by running:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pkg.add(\"ResumableFunctions\")","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Ben Lauwens, Royal Military Academy, Brussels, Belgium.","category":"page"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ResumableFunctions is licensed under the MIT \"Expat\" License.","category":"page"},{"location":"internals/#Internals","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"The macro @resumable transform a function definition into a finite state-machine, i.e. a callable type holding the state and references to the internal variables of the function and a constructor for this new type respecting the method signature of the original function definition. When calling the new type a modified version of the body of the original function definition is executed:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"a dispatch mechanism is inserted at the start to allow a non local jump to a label inside the body;\nthe @yield statement is replaced by a return statement and a label placeholder as endpoint of a non local jump;\nfor loops are transformed in while loops and\ntry-catch-finally-end expressions are converted in a sequence of try-catch-end expressions with at the end of the catch part a non local jump to a label that marks the beginning of the expressions in the finally part.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"The two last transformations are needed to overcome the limitations of the non local jump macros @goto and @label.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"The complete procedure is explained using the following example:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"@resumable function fibonacci(n::Int)\n  a = 0\n  b = 1\n  for i in 1:n-1\n    @yield a\n    a, b = b, a + b\n  end\n  a\nend","category":"page"},{"location":"internals/#Split-the-definition","page":"Internals","title":"Split the definition","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"The function definition is split by MacroTools.splitdef in different parts, eg. :name, :body, :args, ...","category":"page"},{"location":"internals/#For-loops","page":"Internals","title":"For loops","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"for loops in the body of the function definition are transformed in equivalent while loops:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"begin\n  a = 0\n  b = 1\n  _iter = 1:n-1\n  _iterstate = start(_iter)\n  while !done(_iter, _iterstate)\n    i, _iterstate = next(_iter, _iterstate)\n    @yield a\n    a, b = b, a + b\n  end\n  a\nend","category":"page"},{"location":"internals/#Slots","page":"Internals","title":"Slots","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"The slots and their types in the function definition are recovered by running the code_typed function for the locally evaluated function definition:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"n :: Int64\na :: Int64\nb :: Int64\n_iter :: UnitRange{Int64}\n_iterstate :: Int64\ni :: Int64","category":"page"},{"location":"internals/#Type-definition","page":"Internals","title":"Type definition","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"A mutable struct is defined containing the state and the slots:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"mutable struct ##123 <: ResumableFunctions.FiniteStateMachineIterator\n      _state :: UInt8\n      n :: Int64\n      a :: Int64\n      b :: Int64\n      _iter :: UnitRange{Int64}\n      _iterstate :: Int64\n      i :: Int64 \n\n      function ##123()\n        fsmi = new()\n        fsmi._state = 0x00\n        fsmi\n      end\n    end","category":"page"},{"location":"internals/#Call-definition","page":"Internals","title":"Call definition","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"A call function is constructed that creates the previously defined composite type. This function satisfy the calling convention of the original function definition and is returned from the macro:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"function fibonacci(n::Int)\n  fsmi = ##123(n)\n  fsmi.n = n\n  fsmi\nend","category":"page"},{"location":"internals/#Transformation-of-the-body","page":"Internals","title":"Transformation of the body","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"In 6 steps the body of the function definition is transformed into a finite state-machine.","category":"page"},{"location":"internals/#Renaming-of-slots","page":"Internals","title":"Renaming of slots","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"The slots are replaced by references to the fields of the composite type:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"begin\n  _fsmi.a = 0\n  _fsmi.b = 1\n  _fsmi._iter = 1:n-1\n  _fsmi._iterstate = start(_fsmi._iter)\n  while !done(_fsmi._iter, _fsmi._iterstate)\n    _fsmi.i, _fsmi._iterstate = next(_fsmi._iter, _fsmi._iterstate)\n    @yield _fsmi.a\n    _fsmi.a, _fsmi.b = _fsmi.b, _fsmi.a + _fsmi.b\n  end\n  _fsmi.a\nend","category":"page"},{"location":"internals/#Two-way-communication","page":"Internals","title":"Two-way communication","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"All expressions of the form _fsmi.arg = @yield are transformed into:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"@yield\n_fsmi.arg = _arg","category":"page"},{"location":"internals/#Exception-handling","page":"Internals","title":"Exception handling","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"Exception handling is added to @yield:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"begin\n  _fsmi.a = 0\n  _fsmi.b = 1\n  _fsmi._iter = 1:n-1\n  _fsmi._iterstate = start(_fsmi._iter)\n  while !done(_fsmi._iter, _fsmi._iterstate)\n    _fsmi.i, _fsmi._iterstate = next(_fsmi._iter, _fsmi._iterstate)\n    @yield _fsmi.a\n    _arg isa Exception && throw(_arg)\n    _fsmi.a, _fsmi.b = _fsmi.b, _fsmi.a + _fsmi.b\n  end\n  _fsmi.a\nend","category":"page"},{"location":"internals/#Try-catch-finally-end-block-handling","page":"Internals","title":"Try catch finally end block handling","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"try-catch-finally-end expressions are converted in a sequence of try-catch-end expressions with at the end of the catch part a non local jump to a label that marks the beginning of the expressions in the finally part.","category":"page"},{"location":"internals/#Yield-transformation","page":"Internals","title":"Yield transformation","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"The @yield statement is replaced by a return statement and a label placeholder as endpoint of a non local jump:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"begin\n  _fsmi.a = 0\n  _fsmi.b = 1\n  _fsmi._iter = 1:n-1\n  _fsmi._iterstate = start(_fsmi._iter)\n  while !done(_fsmi._iter, _fsmi._iterstate)\n    _fsmi.i, _fsmi._iterstate = next(_fsmi._iter, _fsmi._iterstate)\n    _fsmi._state = 0x01\n    return _fsmi.a\n    @label _STATE_1\n    _fsmi._state = 0xff\n    _arg isa Exception && throw(_arg)\n    _fsmi.a, _fsmi.b = _fsmi.b, _fsmi.a + _fsmi.b\n  end\n  _fsmi.a\nend","category":"page"},{"location":"internals/#Dispatch-mechanism","page":"Internals","title":"Dispatch mechanism","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"A dispatch mechanism is inserted at the start of the body to allow a non local jump to a label inside the body:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"begin\n  _fsmi_state == 0x00 && @goto _STATE_0\n  _fsmi_state == 0x01 && @goto _STATE_1\n  error(\"@resumable function has stopped!\")\n  @label _STATE_0\n  _fsmi._state = 0xff\n  _arg isa Exception && throw(_arg)\n  _fsmi.a = 0\n  _fsmi.b = 1\n  _fsmi._iter = 1:n-1\n  _fsmi._iterstate = start(_fsmi._iter)\n  while !done(_fsmi._iter, _fsmi._iterstate)\n    _fsmi.i, _fsmi._iterstate = next(_fsmi._iter, _fsmi._iterstate)\n    _fsmi._state = 0x01\n    return _fsmi.a\n    @label _STATE_1\n    _fsmi._state = 0xff\n    _arg isa Exception && throw(_arg)\n    _fsmi.a, _fsmi.b = _fsmi.b, _fsmi.a + _fsmi.b\n  end\n  _fsmi.a\nend","category":"page"},{"location":"internals/#Making-the-type-callable","page":"Internals","title":"Making the type callable","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"A function is defined with one argument _arg:","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"function (_fsmi::##123)(_arg::Any=nothing)\n  _fsmi_state == 0x00 && @goto _STATE_0\n  _fsmi_state == 0x01 && @goto _STATE_1\n  error(\"@resumable function has stopped!\")\n  @label _STATE_0\n  _fsmi._state = 0xff\n  _arg isa Exception && throw(_arg)\n  _fsmi.a = 0\n  _fsmi.b = 1\n  _fsmi._iter = 1:n-1\n  _fsmi._iterstate = start(_fsmi._iter)\n  while !done(_fsmi._iter, _fsmi._iterstate)\n    _fsmi.i, _fsmi._iterstate = next(_fsmi._iter, _fsmi._iterstate)\n    _fsmi._state = 0x01\n    return _fsmi.a\n    @label _STATE_1\n    _fsmi._state = 0xff\n    _arg isa Exception && throw(_arg)\n    _fsmi.a, _fsmi.b = _fsmi.b, _fsmi.a + _fsmi.b\n  end\n  _fsmi.a\nend","category":"page"}]
}
